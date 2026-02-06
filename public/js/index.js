const nums = [1, 2, 3, 4];

const numArray = nums =>
  nums.map((num) =>
    num * 2);

console.log(numArray(nums));

const users = [
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: true },
];

const userArray = users =>
  users.filter((user) =>
    user.active);

console.log(userArray(users));

const scores = [55, 70, 82, 90, 48];

const arr = [];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 60) {
    arr.push(scores[i]);
  }
}
console.log(arr);

const user = {
  id: 1,
  name: 'Taro',
};

const obj = { ...user, role: "admin" };
console.log(obj);

// この関数をアロー関数にしてください
// function isAdult(age) {
//   return age >= 20;
// }

const isAdult = age =>
  age >= 20;

