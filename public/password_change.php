<?php
session_start();
$title = "パスワード変更";
require_once('functions.php');
require_once('db.php');


if (empty($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}

$errors = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $current = $_POST['current_password'] ?? '';
    $new = $_POST['new_password'] ?? '';
    $confirm = $_POST['confirm_password'];

    $errors = changePassword($pdo, $_SESSION['user_id'], $current, $new, $confirm);

    if (empty($errors)) {

        header("Location: mypage.php");
        exit;
    }
}

include 'partials/header.php';
?>

<section class="p-password-change">
    <h1 class="p-password-change__title">パスワード変更</h1>
    
    <div class="p-password-change__formField">
        <form action="password_change.php" method="POST" class="p-password-change__form">
            <div class="p-password-change__inputField">
                <div class="p-password-change__labelField">
                    <label for="" class="p-password-change__label">現在のパスワード</label>
                </div>
                <?php if (!empty($errors['current_password'])): ?>
                    <p class="c-errMsg p-password-change__errMsg"><?php echo $errors['current_password']; ?></p>
                <?php endif; ?>
                <input type="password" name="current_password" class="c-input">
            </div>


            <div class="p-password-change__inputField">
                <div class="p-password-change__labelField">
                    <label for="" class="p-password-change__label">新しいパスワード</label>
                </div>
                <?php if (!empty($errors['new_password'])): ?>
                    <p class="c-errMsg p-password-change__errMsg"><?php echo $errors['new_password']; ?></p>
                <?php endif; ?>
                <input type="password" name="new_password" class="c-input">
            </div>

            <div class="p-password-change__inputField">
                <div class="p-password-change__labelField">
                    <label for="" class="p-password-change__label">新しいパスワード(確認)</label>
                </div>
                <?php if (!empty($errors['confirm_password'])): ?>
                    <p class="c-errMsg p-password-change__errMsg"><?php echo $errors['confirm_password']; ?></p>
                <?php endif; ?>
                <input type="password" name="confirm_password" class="c-input">
            </div>
            
            <div class="p-password-change__btnField">
                <button type="submit" class="c-btn p-password-change__btn">変更する</button>
            </div>
        </form>
    </div>
    <a href="register.php">ユーザー登録ページへ</a>
</section>

<?php include 'partials/footer.php'; ?>