<?php
require_once('functions.php');
ini_set('display_errors', 1);
error_reporting(E_ALL);

//DB接続情報
$host = 'db';
$db = 'practice';
$user = 'user';
$pass = 'password';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

$errors = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    if ($msg = validRequired($email)) {
        $errors['email'] = $msg;
    } elseif ($msg = validEmail($email)) {
        $errors['email'] = $msg;
    }

    if ($msg = validRequired($password)) {
        $errors['password'] = $msg;
    } elseif ($msg = validMinLen($password)) {
        $errors['password'] = $msg;
    }


    if (empty($errors)) {
        try {
            $pdo = new PDO($dsn, $user, $pass, $options);

            $hash = password_hash($password, PASSWORD_DEFAULT);

            $stmt = $pdo->prepare('INSERT INTO users (email, password) VALUES (:email, :password)');
            $stmt->bindValue(':email', $email, PDO::PARAM_STR);
            $stmt->bindValue(':password', $hash, PDO::PARAM_STR);
            $stmt->execute();

            echo "<p>登録が完了しました</p>";
        } catch (PDOException $e) {
            echo 'DBエラー:' . $e->getMessage();
        }
    }
}
?>

<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ユーザー登録</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <h1>ユーザー登録</h1>
    <a href="login.php">ログイン</a>
    <form action="register.php" method="POST" class="p-register__form">
        <div class="p-register__inputContainer">
            <label for="" class="p-register__label">メールアドレス</label>
            <?php if (!empty($errors['email'])): ?>
                <p class="c-error"><?php echo $errors['email']; ?></p>
            <?php endif; ?>
            <input type="email" name="email" class="p-register__input"
                value="<?php echo escapeHtml($_POST['email'] ??  ''); ?>">
        </div>

        <div class="p-register__inputContainer">
            <label for="" class="p-register__label">パスワード</label>
            <?php if (!empty($errors['password'])): ?>
                <p class="c-error"><?php echo $errors['password']; ?></p>
            <?php endif; ?>
            <input type="password" name="password" class="p-register__input">
        </div>

        <div class="p-register__btnContainer">
            <button type="submit" class="c-btn">登録</button>
        </div>
    </form>
</body>

</html>