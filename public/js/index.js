const nums = [4, 6, 8];

const newNum = nums =>
  nums.map((num) =>
    num * 2);

console.log(newNum(nums));

const users = [
  { name: "Taro", score: 80 },
  { name: "Hanako", score: 45 },
  { name: "Jiro", score: 90 }
];


const newUser = users =>
  users.filter((user) =>
    user.score >= 60).map((user) =>
      user.name);

console.log(newUser(users));

const numbers = [10, 20, 30];

const newArr = numbers =>
  numbers.reduce((acc, number) => {
    return acc + number;
  }, 0);

console.log(newArr(numbers));

const user = {
  id: 1,
  settings: {
    theme: "dark",
    lang: "ja"
  }
};

const { theme } = user.settings;
console.log(theme);
