const prices = [100, 250, 400, 80];

const selectPrice = prices =>
  prices.filter((price) =>
    price >= 100).map((price) =>
      Math.round(price * 1.1));

console.log(selectPrice(prices));

const actions = [
  { type: "login" },
  { type: "logout" },
  { type: "login" },
  { type: "login" },
  { type: "logout" }
];

const actionCount = actions =>
  actions.reduce((acc, action) => {
    acc[action.type] = (acc[action.type] ?? 0) + 1
    return acc;
  }, {});

console.log(actionCount(actions));

const settings = {
  theme: "dark"
};

const { theme, lang = "ja" } = settings;

console.log(settings);

const users = [
  { name: "Taro", age: 17 },
  { name: "Hanako", age: 22 },
  { name: "Jiro", age: 19 },
  { name: "Ken", age: 30 }
];

const userCount = users =>
  users.reduce((acc, user) => {
    return acc + ((user.age >= 20) ? 1 : 0)
    
  }, 0)
console.log(userCount(users));

const a = [1, 2];
const b = [3, 4];

const newArray = a.concat(b);

console.log(newArray);