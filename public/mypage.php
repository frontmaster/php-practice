<?php
session_start();

$title = "マイページ";

if (empty($_SESSION['user_id'])) {
    header('Location:login.php');
    exit;
}

?>

<!DOCTYPE html>
<html lang="ja">

<?php include 'partials/header.php'; ?>

<body>
    <h1>マイページ</h1>
    <a href="logout.php">ログアウト</a>
</body>

</html>