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
    $stmt= $pdo->prepare('SELECT COUNT(*) FROM users WHERE email = :email');
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

    // 半角英数字＋記号チェック
    if (!preg_match('/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};:\'",.<>\/?\\|`~]+$/', $str)) {
        return MSG_PASS_PATTERN;
    }
    return null;
}

// htmlエスケープ
function escapeHtml($str)
{
    return htmlspecialchars($str ?? '', ENT_QUOTES, 'UTF-8');
}
