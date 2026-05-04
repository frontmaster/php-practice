<?php
session_start();

require_once('functions.php');
require_once('db.php');

if (empty($_SESSION['user_id'])) {
    header("Location:login.php");
    exit;
}

$title = "退会確認";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $userId = $_SESSION['user_id'];

    try {
        $stmt = $pdo->prepare("UPDATE users SET is_deleted = 1 WHERE id = :id");
        $stmt->bindValue(':id', $userId, PDO::PARAM_INT);
        $stmt->execute();

        session_destroy();
        header("Location:withdraw_complete.php");
        exit;
    } catch (PDOException $e) {
        echo "DBエラー:" . $e->getMessage();
    }
}
include 'partials/header.php';

?>
<section class="p-withdraw">
    <h1 class="p-withdraw__title">退会手続き</h1>
    <p>退会すると登録したすべてのデータが失われます。退会しますか？</p>
    <form action="withdraw.php" method="POST" class="p-withdraw__form">
        <button type="submit">退会する</button>
    </form>
</section>

<?php include 'partials/footer.php'; ?>