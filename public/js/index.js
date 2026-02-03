const flags = [true, false, true, true, false];

const trueCount = flags =>
  flags.reduce((acc, flag) => {
    if (flag === true) {
      return acc + 1;
    }
    return acc;
  }, 0);

console.log(trueCount(flags));


const users = [
  { name: "Taro", age: 18 },
  { name: "Hanako", age: 22 },
  { name: "Jiro", age: 30 }
];


const usersCount = users =>
  users.reduce((acc, user) => {
    if (user.age >= 20) {
      return acc + 1;
    }
    return acc;
  }, 0);

console.log(usersCount(users));

const orders = [
  { amount: 1000, status: "completed" },
  { amount: 500, status: "pending" },
  { amount: 2000, status: "completed" }
];


const ordersCount = orders =>
  orders.reduce((acc, order) => {
    if (order.status === "completed") {
      return acc + order.amount;
    }
    return acc;
  }, 0);

console.log(ordersCount(orders));


const members = [
  { name: "Taro", role: "admin" },
  { name: "Hanako", role: "user" },
  { name: "Jiro", role: "admin" },
  { name: "Ken", role: "user" }
];

const selectMembers = members => 
  members.reduce((acc, member)=>{
    acc[member.role] = (acc[member.role] ?? 0) + 1;
    return acc;
  }, {});

  console.log(selectMembers(members));




