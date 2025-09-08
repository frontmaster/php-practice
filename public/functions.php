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

// 最小文字数チェック
function validMinLen($str, $min = 6)
{
    if (mb_strlen($str) < $min) {
        return MSG_PASS_MINLEN;
    }
    return null;
}

function escapeHtml($str)
{
    return htmlspecialchars($str ?? '', ENT_QUOTES, 'UTF-8');
}
