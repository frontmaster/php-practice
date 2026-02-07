const apiUsers = [
  { id: 1, name: 'Taro', active: true, age: 25 },
  { id: 2, name: 'Hanako', active: false, age: 17 },
  { id: 3, name: 'Jiro', active: true, age: 32 },
];

const userArr = [];

for (let i = 0; i < apiUsers.length; i++) {
  userArr.push({ id: apiUsers[i].id, name: apiUsers[i].name, isAdult: (apiUsers[i].age >= 20) ? true : false, canLogin: (apiUsers[i].active && apiUsers[i].age >= 20) ? true : false });
}

console.log(userArr);