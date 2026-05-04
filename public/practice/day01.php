<?php

$users = [
    ['id' => 1, 'name' => 'Alice', 'age' => 20],
    ['id' => 2, 'name' => 'Bob',   'age' => 17],
    ['id' => 3, 'name' => 'Charlie', 'age' => 30],
];

$names = [];

foreach ($users as $user) {
    if ($user['age'] >= 20) {
        array_push($names, $user['name']);
    }
}

var_dump($names);
