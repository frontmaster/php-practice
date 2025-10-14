<?php
session_start();

require_once('functions.php');
require_once('db.php');



if (!empty($_SESSION['user_id'])) {
    header('Location:mypage.php');
    exit;
}


$title = "ログイン";
$errors = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    // バリデーション
    if (empty($email)) {
        $errors['email'] = "メールアドレスを入力してください。";
    }

    if (empty($password)) {
        $errors['password'] = "パスワードを入力してください";
    }

    // DB接続
    if (empty($errors)) {
        try {
            $stmt = $pdo->prepare('SELECT * FROM users WHERE email = :email LIMIT 1');
            $stmt->bindValue(':email', $email, PDO::PARAM_STR);
            $stmt->execute();
            $user = $stmt->fetch();

            if ($user && password_verify($password, $user['password'])) {
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['email'] = $user['email'];
                header('Location:mypage.php');
                exit;
            } else {
                $errors['login'] = 'メールアドレスまたはパスワードが正しくありません';
            }
        } catch (PDOException $e) {
            echo 'DBエラー：' . $e->getMessage();
        }
    }
}
include 'partials/header.php';
?>
<section class="p-login">
    <h1 class="p-login__title">ログイン</h1>
    <?php if (!empty($errors['login'])): ?>
        <p><?php echo escapeHtml($errors['login']) ?? ''; ?></p>
    <?php endif; ?>
    <div class="p-login__formField">
        <form action="login.php" method="POST" class="p-login__form">
            <div class="p-login__inputField">
                <div class="p-login__labelField">
                    <label for="" class="p-login__label">メールアドレス</label>
                    <span class="c-require">必須</span>
                </div>
                <?php if (!empty($errors['email'])): ?>
                    <p class="c-errMsg p-login__errMsg"><?php echo $errors['email']; ?></p>
                <?php endif; ?>
                <input type="email" name="email" class="c-input" value="<?php echo escapeHtml($_POST['email'] ?? ''); ?>">
            </div>


            <div class="p-login__inputField--pass">
                <div class="p-login__labelField">
                    <label for="" class="p-login__label">パスワード</label>
                    <span class="c-require">必須</span>
                </div>
                <?php if (!empty($errors['password'])): ?>
                    <p class="c-errMsg p-login__errMsg"><?php echo $errors['password']; ?></p>
                <?php endif; ?>
                <input type="password" name="password" class="c-input">
            </div>
            <div class="p-login__btnField">
                <button type="submit" class="c-btn p-login__btn">ログイン</button>
            </div>
            <a href="forgot_password.php" class="p-login__link">パスワードを忘れた方はこちら</a>
        </form>
    </div>
    
</section>

<?php include 'partials/footer.php'; ?>