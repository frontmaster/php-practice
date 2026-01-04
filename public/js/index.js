// 文字列を返す
const string = (str) => {
  return str;
};

const res = string("hello");
console.log(res);

// 数値を2倍で返す
const double = (num) => {
  return num * 2;
};

const res2 = double(10);
console.log(res2);

// 条件分岐で文字列を返す
const strings = (str) => {
  if (str === "admin") {
    return "管理者です";
  }
  if (str === "user") {
    return "一般ユーザーです";
  }
  return "不明な権限です";
};

const res3 = strings("admin");
const res4 = strings("user");
const res5 = strings("燕");

console.log(res3);
console.log(res4);
console.log(res5);
