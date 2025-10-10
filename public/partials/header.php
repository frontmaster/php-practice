<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../scss/foundation/reset.scss">
    <link rel="stylesheet" href="css/style.css">
    <title><?php echo $title ?? 'タイトル'; ?></title>
</head>

<body>
    <header class="l-header">
        <div class="l-header__logo">test</div>
        <nav class="l-header__nav">
            <?php if (!empty($_SESSION['user_id'])): ?>
                <a href="../mypage.php" class="l-header__link">マイページ</a>
                <a href="../logout.php" class="l-header__link">ログアウト</a>
            <?php else: ?>
                <a href="../login.php" class="l-header__link">ログイン</a>
                <a href="../register.php" class="l-header__link">ユーザー登録</a>
            <?php endif; ?>
        </nav>
    </header>
    <main class="l-main">