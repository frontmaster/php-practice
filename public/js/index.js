const users = [
  { id: 1, name: "Taro", age: 20 },
  { id: 2, name: "Hanako", age: 17 },
  { id: 3, name: "Jiro", age: 25 }
];

const newUser = users =>
  users.map(({ name, age }) =>
    ({ name, age }));

console.log(newUser(users));

const nums = [1, 2, 3, 4, 5];

const newNums = nums =>
  nums.reduce((acc, num) => {
    acc.push(num * num);
    return acc;
  }, []);

console.log(newNums(nums));

const name = "Taro";
const score = 80;

const obj = { name, score };
console.log(obj);

const flags = [true, false, true, false, true];
const newFlag = flags =>
  flags.filter((flag) =>
    flag === true);

console.log(newFlag(flags));

const user = {
  name: "Taro",
  age: 20,
  country: "Japan"
};

const newObj = { ...user, age: 21 }

console.log(newObj);