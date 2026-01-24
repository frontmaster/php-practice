const numbers = [10, 20, 30, 40];

const totalNum = numbers.reduce((acc, num) => {
  return acc + num;
}, 0);

console.log(totalNum);
