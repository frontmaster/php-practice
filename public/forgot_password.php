<?php
date_default_timezone_set('Asia/Tokyo');
session_start();
require_once('functions.php');
require_once('db.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$title = "パスワードリセット";

$errors = [];
$success = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email'] ?? '');

    // バリデーション
    if ($msg = validRequired($email)) {
        $errors['email'] = $msg;
    } elseif ($msg = validEmail($email)) {
        $errors['email'] = $msg;
    }

    if (empty($errors)) {
        try {
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // ユーザー存在確認
            $stmt = $pdo->prepare("SELECT id FROM users WHERE email = :email LIMIT 1");
            $stmt->bindValue(':email', $email, PDO::PARAM_STR);
            $stmt->execute();
            $user = $stmt->fetch(PDO::FETCH_ASSOC);

            $token = null;

            if ($user) {
                // トークン生成
                $token = bin2hex(random_bytes(32));
                $expires = date('Y-m-d H:i:s', time() + 3600);

                // DB に保存
                $stmt = $pdo->prepare("
                    UPDATE users 
                    SET reset_token = :token, reset_token_expires = :expires 
                    WHERE id = :id
                ");
                $stmt->bindValue(':token', $token, PDO::PARAM_STR);
                $stmt->bindValue(':expires', $expires, PDO::PARAM_STR);
                $stmt->bindValue(':id', $user['id'], PDO::PARAM_INT);
                $stmt->execute();
            }

            // トークンがある場合のみリンク作成
            $resetLink = $token
                ? "http://localhost:8082/reset_password.php?token={$token}"
                : 'dummy-token';

            // PHPMailer で HTML メール送信
            $mail = new PHPMailer(true);
            try {
                $mail->isSMTP();
                $mail->Host = 'mailhog';
                $mail->Port = 1025;
                $mail->SMTPAuth = false;

                $mail->setFrom('no-reply@yourapp.local', 'Your App');
                $mail->addAddress($email);

                $mail->isHTML(true);
                $mail->Subject = 'パスワードリセットのご案内';
                $mail->Body = "<p>下記リンクから新しいパスワードを設定してください。</p>
                               <p><a href='{$resetLink}'>{$resetLink}</a></p>";
                $mail->AltBody = "下記リンクから新しいパスワードを設定してください:\n{$resetLink}";

                $mail->send();
                $success = "リセット用のメールを送信しました。メール内にあるリンクからパスワードを設定してください。";

                if($success){
                    $_SESSION['flash_success'] = $success;
                    header("Location:forgot_password_sent.php");
                    exit;
                }
            } catch (Exception $e) {
                $errors['mail'] = "メール送信失敗: {$mail->ErrorInfo}";
            }
        } catch (PDOException $e) {
            $errors['db'] = "DBエラー: " . $e->getMessage();
        }
    }
}
include 'partials/header.php';
?>

<section class="p-forgot-password">
    <h1 class="p-forgot-password__title">パスワードリセット</h1>

    <?php if ($success): ?>
        <p class="c-success"><?= escapeHtml($success) ?></p>
    <?php endif; ?>

    <div class="p-forgot-password__formField">
        <form action="forgot_password.php" method="POST" class="p-forgot-password__form">
            <div class="p-forgot-password__inputField">
                <label class="p-forgot-password__label">メールアドレス</label>
                <?php foreach (['db', 'mail', 'email'] as $key): ?>
                    <?php if (!empty($errors[$key])): ?>
                        <p class="c-errMsg p-forgot-password__errMsg"><?= escapeHtml($errors[$key]) ?></p>
                    <?php endif; ?>
                <?php endforeach; ?>
                <input type="email" name="email" class="c-input p-forgot-password__input" value="<?= escapeHtml($email ?? '') ?>">
            </div>
            <button type="submit" class="c-btn p-forgot-password__btn">送信</button>
        </form>
    </div>
</section>

<?php include 'partials/footer.php'; ?>