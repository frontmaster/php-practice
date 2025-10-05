<?php
require_once('functions.php');
require_once('db.php');

session_start();
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
?>
<!DOCTYPE html>
<html lang="ja">

<?php include 'partials/head.php'; ?>

<body>
    <h1>ログイン</h1>
    <?php if (!empty($errors['login'])): ?>
        <p><?php echo escapeHtml($errors['login']) ?? ''; ?></p>
    <?php endif; ?>
    <form action="login.php" method="POST">
        <?php if (!empty($errors['email'])): ?>
            <p><?php echo $errors['email']; ?></p>
        <?php endif; ?>
        <div>
            <label for="">メールアドレス</label>
            <input type="email" name="email" value="<?php echo escapeHtml($_POST['email'] ?? ''); ?>">
        </div>

        <?php if (!empty($errors['password'])): ?>
            <p><?php echo $errors['password']; ?></p>
        <?php endif; ?>
        <div>
            <label for="">パスワード</label>
            <input type="password" name="password">
        </div>
        <button type="submit">ログイン</button>
    </form>
    <a href="register.php">ユーザー登録ページへ</a>
</body>

</html>