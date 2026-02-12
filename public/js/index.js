const users = [
  { id: 1, age: 25, active: true },
  { id: 2, age: 17, active: true },
  { id: 3, age: 40, active: false },
];

const userObj = users =>
  users
    .filter(({ active }) => active)
    .map(({ id, age }) => ({ id, canLogin: age >= 20 }));

console.log(userObj(users));

const products = [
  { id: 1, price: 1000, taxRate: 0.1 },
  { id: 2, price: 2000, taxRate: 0.1 },
];

const productsObj = products =>
  products.map(({ id, price, taxRate }) => ({ id, price, priceWithTax: price + price * taxRate }));

console.log(productsObj(products));

const scores = [30, 60, 80];

const scoresArray = scores => scores.map((score) => score >= 60 ? "pass" : "fail");

console.log(scoresArray(scores));