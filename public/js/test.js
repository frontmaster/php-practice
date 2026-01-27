const users = [
  { id: 1, name: "Alice", age: 28, isActive: true },
  { id: 2, name: "Bob", age: 35, isActive: false },
  { id: 3, name: "Charlie", age: 22, isActive: true },
  { id: 4, name: "Dave", age: 35, isActive: true },
];

const getActiveUserName = (users) => {
  return users
    .filter((user) => {
      return user.isActive === true && user.age < 30;
    })
    .map((user) => {
      return user.name;
    });
};

console.log(getActiveUserName(users));
