<?php
session_start();
require_once('functions.php');
require_once('db.php');

$title = "パスワード再設定";

$errors = [];
$success = '';
$token = $_GET['token'] ?? '';

// トークンがある場合、ユーザーを確認
if ($token) {
    $stmt = $pdo->prepare("SELECT id FROM users WHERE reset_token = :token AND reset_token_expires >= NOW()");
    $stmt->bindValue(':token', $token, PDO::PARAM_STR);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
        $errors['token'] = "無効または期限切れのトークンです。";
    }
} else {
    $errors['token'] = "無効または期限切れのトークンです。";
}

// パスワード更新処理
if ($_SERVER['REQUEST_METHOD'] === 'POST' && empty($errors)) {
    $password = $_POST['password'] ?? '';
    $passwordConfirm = $_POST['password_confirm'] ?? '';

    // バリデーション
    if ($msg = validRequired($password)) {
        $errors['password'] = $msg;
    } elseif ($msg = validMinLength($password, 6)) {
        $errors['password'] = $msg;
    }

    if ($password !== $passwordConfirm) {
        $errors['password_confirm'] = "パスワードが一致しません。";
    }

    if (empty($errors)) {
        // パスワードをハッシュ化して更新
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $pdo->prepare("UPDATE users SET password = :password, reset_token = NULL, reset_token_expires = NULL WHERE id = :id");
        $stmt->bindValue(':password', $hash, PDO::PARAM_STR);
        $stmt->bindValue(':id', $user['id'], PDO::PARAM_INT);
        $stmt->execute();

        $success = "パスワードを更新しました。ログインしてください。";
    }
}
?>

<section class="p-reset-password">
    <h1>パスワード再設定</h1>

    <?php if ($success): ?>
        <p class="c-success"><?= escapeHtml($success) ?></p>
    <?php endif; ?>

    <?php if (!empty($errors['token'])): ?>
        <p class="c-errMsg"><?= escapeHtml($errors['token']) ?></p>
    <?php else: ?>
        <form action="reset_password.php?token=<?= escapeHtml($token) ?>" method="POST">
            <label>新しいパスワード</label>
            <?php if (!empty($errors['password'])): ?>
                <p class="c-errMsg"><?= escapeHtml($errors['password']) ?></p>
            <?php endif; ?>
            <input type="password" name="password" required>

            <label>パスワード確認</label>
            <?php if (!empty($errors['password_confirm'])): ?>
                <p class="c-errMsg"><?= escapeHtml($errors['password_confirm']) ?></p>
            <?php endif; ?>
            <input type="password" name="password_confirm" required>

            <button type="submit">更新</button>
        </form>
    <?php endif; ?>
</section>
