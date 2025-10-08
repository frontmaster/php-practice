<?php
require_once('messages.php');

// 必須項目チェック
function validRequired($str)
{
    if (trim($str) === '') {
        return MSG_REQUIRED;
    }
    return null;
}

// Email形式チェック
function validEmail($str)
{
    if (!filter_var($str, FILTER_VALIDATE_EMAIL)) {
        return MSG_EMAIL;
    }
    return null;
}

// Email重複チェック
function validEmailDuplicate($str, $pdo)
{
    $stmt = $pdo->prepare('SELECT COUNT(*) FROM users WHERE email = :email');
    $stmt->bindValue(':email', $str, PDO::PARAM_STR);
    $stmt->execute();
    $count = $stmt->fetchColumn();

    if ($count > 0) {
        return MSG_EMAIL_DUPLICATE;
    }
    return null;
}

// バリデーション（パスワード）
function validPassword($str, $min = 6, $max = 20)
{
    // 未入力チェック
    if (trim($str) === '') {
        return MSG_REQUIRED;
    }

    // 最小文字数チェック
    if (mb_strlen($str) < $min) {
        return MSG_PASS_MINLEN;
    }

    // 最大文字数チェック
    if (mb_strlen($str) > $max) {
        return MSG_PASS_MAXLEN;
    }

    // 半角英数字チェック（記号不要）
    if (!preg_match('/^[a-zA-Z0-9]+$/', $str)) {
        return MSG_PASS_PATTERN;
    }
    return null;
}


// パスワード変更処理
function changePassword($pdo, $userId, $current, $new, $confirm)
{
    $errors = [];

    // 未入力チェック
    if (trim($current) === '') {
        $errors['current_password'] = "現在のパスワードを入力してください。";
    }

    if (trim($new) === '') {
        $errors['new_password'] = "新しいパスワードを入力してください。";
    }

    if (trim($confirm) === '') {
        $errors['confirm_password'] = "確認用パスワードを入力してください。";
    }

    if (!empty($errors)) {
        return $errors;
    }

    // 現在のパスワード確認
    $stmt = $pdo->prepare("SELECT password FROM users WHERE id = :id");
    $stmt->bindValue(':id', $userId, PDO::PARAM_INT);
    $stmt->execute();
    $user = $stmt->fetch();

    if (!$user || !password_verify($current, $user['password'])) {
        $errors[] = "現在のパスワードが違います。";
    }

    if ($new !== $confirm) {
        $errors[] = "新しいパスワードが一致しません。";
    }

    if (strlen($new) < 8) {
        $errors[] = "新しいパスワードは8文字以上で入力してください。";
    }

    if (empty($errors)) {
        $hashed = password_hash($new, PASSWORD_DEFAULT);
        $stmt = $pdo->prepare("UPDATE users SET password = :password WHERE id = :id");
        $stmt->bindValue(':password', $hashed, PDO::PARAM_STR);
        $stmt->bindValue(':id', $userId, PDO::PARAM_INT);
        $stmt->execute();
    }
    return $errors;
}


// htmlエスケープ
function escapeHtml($str)
{
    return htmlspecialchars($str ?? '', ENT_QUOTES, 'UTF-8');
}
