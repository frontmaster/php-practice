<?php
require_once('Animal.php');

class Dog extends Animal
{
    public function speak()
    {
        echo "Woof!\n";
    }
}

class Cat extends Animal
{
    public function speak()
    {
        echo "Meow!\n";
    }
}

$dog = new Dog();
$dog->speak();

$cat = new Cat();
$cat->speak();