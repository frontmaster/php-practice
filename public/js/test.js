const tasks = [
  { id: 1, priority: "high" },
  { id: 2, priority: "low" },
  { id: 3, priority: "high" },
  { id: 4, priority: "low" },
  { id: 5, priority: "high" },
];

const result = tasks.reduce((acc, task) => {
  if (task.priority === "high") {
    acc.high = (acc.high ?? 0) + 1;
  }
  if (task.priority === "low") {
    acc.low = (acc.low ?? 0) + 1;
  }
  return acc;
}, {});

console.log(result);
