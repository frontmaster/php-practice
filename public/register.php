<?php
require_once('functions.php');
require_once('db.php');
include 'partials/header.php';

$title = "ユーザー登録";

$errors = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    if ($msg = validRequired($email)) {
        $errors['email'] = $msg;
    } elseif ($msg = validEmail($email)) {
        $errors['email'] = $msg;
    } else {
        if ($msg = validEmailDuplicate($email, $pdo)) {
            $errors['email'] = $msg;
        }
    }

    if ($msg = validPassword($password)) {
        $errors['password'] = $msg;
    }


    if (empty($errors)) {
        try {

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
<section class="p-register">
    <h1 class="p-register__title">ユーザー登録</h1>
    <div class="p-register__formField">
        <form action="register.php" method="POST" class="p-register__form">
            <div class="p-register__inputField">
                <div class="p-register__labelField">
                    <label for="" class="p-register__label">メールアドレス</label>
                    <span class="c-require">必須</span>
                </div>
                <?php if (!empty($errors['email'])): ?>
                    <p class="c-errMsg p-register__errMsg"><?php echo $errors['email']; ?></p>
                <?php endif; ?>
                <input type="email" name="email" class="c-input"
                    value="<?php echo escapeHtml($_POST['email'] ??  ''); ?>">
            </div>

            <div class="p-register__inputField">
                <div class="p-register__labelField">
                    <label for="" class="p-register__label">パスワード</label>
                    <span class="c-require">必須</span>
                </div>
                <?php if (!empty($errors['password'])): ?>
                    <p class="c-errMsg p-register__errMsg"><?php echo $errors['password']; ?></p>
                <?php endif; ?>
                <input type="password" name="password" class="c-input">
            </div>

            <div class="p-register__btnField">
                <button type="submit" class="c-btn p-register__btn">登録</button>
            </div>
        </form>
    </div>
</section>
<a href="login.php">ログイン</a>

<?php include 'partials/footer.php'; ?>