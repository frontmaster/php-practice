const testReturn = () => {
  return "ここで終了";

  console.log("これは表示される？");
};

const res = testReturn();

console.log(res);

const checkType = (value) => {
  if (typeof value !== "number") {
    return "数値を入力してください";
  } else {
    return `${value}は正常な数値です`;
  }
};

console.log(checkType("あ"));
console.log(checkType(10));

const noReturn = () => {
  const a = 10;
  const b = 20;
  const c = a + b;
};

const res6 = noReturn();
console.log(res6);

const validate = (value) => {
  if (value === null) {
    return "値がありません";
  }
  if (typeof value !== "number") {
    return "数値を入力してください";
  } else {
    return "OK";
  }
};
console.log(validate(null));
// "値がありません"

console.log(validate("10"));
// "数値を入力してください"

console.log(validate(10));
// "OK"

