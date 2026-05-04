<?php

$orders = [
  ['id' => 1, 'price' => 100, 'status' => 'completed'],
  ['id' => 2, 'price' => 200, 'status' => 'pending'],
  ['id' => 3, 'price' => 300, 'status' => 'completed'],
];

$total = array_reduce($orders, fn($carry, $order) => ($order["status"] === 'completed') ? $carry + $order["price"] : $carry, 0);

print_r($total);


$users = [
  ['name' => 'Taro', 'scores' => [10, 20]],
  ['name' => 'Jiro', 'scores' => [30, 40]],
];

$userScore = array_map(fn($user) => ['name' => $user['name'], 'total' => array_reduce($user['scores'], fn($carry, $score) => $carry + $score, 0)], $users);
print_r($userScore);