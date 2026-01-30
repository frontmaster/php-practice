
const users = [
  { id: 1, name: "佐藤", age: 28, isActive: true },
  { id: 2, name: "鈴木", age: 17, isActive: true },
  { id: 3, name: "高橋", age: 35, isActive: false },
  { id: 4, name: "田中", age: 42, isActive: true },
];

const formatActiveAdultUsers = (users) => {
  return users
    .filter((user) => {
      return user.isActive && user.age >= 20;
    })
    .sort((a, b) => {
      return a.age - b.age;
    })
    .map((user) => {
      return { id: user.id, label: `${user.name}（${user.age}）` };
    });
};

console.log(formatActiveAdultUsers(users));
