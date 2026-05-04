<?php
session_start();

require_once('functions.php');



include 'partials/header.php';
?>

<section class="p-forgot-password-sent">
    <h1>パスワードリセットメールを送信しました</h1>
    <p>ご登録のメールアドレスに、パスワード再設定用のリンクを送信しました。</p>
    <p>メールアドレスをご確認のうえ、リンクからパスワードを設定してください。</p>
    <a href="login.php">ログインページに戻る</a>
</section>

<?php include 'partials/footer.php'; ?>