const nums = [4, 7, 1, 9];

// reduce を使って合計を求めてください
// 期待結果: 21

const result = nums.reduce((acc, num) => {
  return acc + num;
}, 0);

console.log(result);

const users = [
  { name: "Alice", isActive: true },
  { name: "Bob", isActive: false },
  { name: "Charlie", isActive: true },
];

// reduce を使って
// isActive === true の name だけを配列にしてください
// 期待結果: ["Alice", "Charlie"]

const res = users.reduce((acc, user) => {
  if (user.isActive === true) {
    acc.push(user.name);
  }
  return acc;
}, []);
console.log(res);

const colors = ["red", "blue", "red", "green", "blue", "red"];

// reduce を使って
// 各色の出現回数をオブジェクトにしてください
// 期待結果: { red: 3, blue: 2, green: 1 }
const colorNum = colors.reduce((acc, color) => {
  acc[color] = (acc[color] ?? 0) + 1;
  return acc;
}, {});

console.log(colorNum);

const orders = [
  { userId: 1, amount: 500, status: "completed" },
  { userId: 2, amount: 1200, status: "completed" },
  { userId: 1, amount: 700, status: "pending" },
  { userId: 2, amount: 300, status: "completed" },
];

// reduce を使って
// status === "completed" のものだけを
// userId ごとに合計金額としてオブジェクトにしてください
// 期待結果: { 1: 500, 2: 1500 }

const orderRes = orders.reduce((acc, order) => {
  if (order.status === "completed") {
    acc[order.userId] = (acc[order.userId] ?? 0) + order.amount;
  }
  return acc;
}, {});

console.log(orderRes);
