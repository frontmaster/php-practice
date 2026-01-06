// 欲望の後付け
const wantMoney = (num) => {
  return `${num}兆円ほしい`;
};

const res = wantMoney(10);
console.log(res);

// 条件分岐
const wantMoney2 = (num) => {
  if (num < 100) {
    return "現実的ですね";
  }
  if (100 <= num && num < 1000) {
    return "まあまあ欲張りです";
  }

  if (num >= 1000) {
    return "欲望がインフレしています";
  }
};

console.log(wantMoney2(99));
console.log(wantMoney2(999));
console.log(wantMoney2(10000));

const checkType = (num) => {
  if (typeof num !== "number") {
    return "数値を入力してください";
  }
  if (typeof num === "number") {
    return `${num}兆円あれば人生が変わる`;
  }
};

console.log(checkType("a"));
console.log(checkType(7));

const profile = (name, job, age) => {
  return `私の名前は${name}です。職業は${job}です。年齢は${age}です。`;
};

const res4 = profile("田中", "エンジニア", 42);

console.log(res4);

const introduce = ({name, age, job})=>{
    return `私の名前は${name}です。職業は${job}です。年齢は${age}です。`;
}

const res5 = introduce({
  age: 42,
  job: "看護師",
  name: "佐々木",
});

console.log(res5);
