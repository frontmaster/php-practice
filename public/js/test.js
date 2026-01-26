const orders = [
  { id: 1, userId: 10, amount: 1200, status: "completed" },
  { id: 2, userId: 11, amount: 800, status: "pending" },
  { id: 3, userId: 10, amount: 500, status: "completed" },
  { id: 4, userId: 12, amount: 2000, status: "completed" },
  { id: 5, userId: 11, amount: 700, status: "completed" },
];

const result = orders
  .filter((order) => {
    return order.status === "completed" && order.amount >= 1000;
  })
  .reduce((acc, order) => {
    acc[order.userId] = (acc[order.userId] ?? 0) + order.amount;
    return acc;
  }, {});
console.log(result);
