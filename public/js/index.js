const users = [
  { id: 1, age: 25, active: true },
  { id: 2, age: 17, active: false },
  { id: 3, age: 32, active: true },
];

const usersMap = users =>
  users.filter(({ age, active }) =>
    active && age >= 20).map(({ id }) =>
      ({ id }));

console.log(usersMap(users));


const userArray = [];

for (let i = 0; i < users.length; i++) {
  if (users[i].active && users[i].age >= 20) {
    userArray.push({ id: users[i].id });
  }
}

console.log(userArray);

const nums = [1, 2, 3, 4, 5];

const numsArray = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    numsArray.push(nums[i]);
  }
}

console.log(numsArray);


const product = { id: 1, price: 1000 };

const newProduct = { ...product, price: 1200 }
console.log(newProduct);

// アロー関数に
function isEven(num) {
  return num % 2 === 0;
}

const isEven = num => num % 2 === 0;