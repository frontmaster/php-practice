const { getType } = require("typechecker");

describe("filterのテスト", () => {
  const numbers = [1, 5, 10, 15, 20];
  const selectNum = numbers.filter((num) => {
    return num >= 10;
  });
  it("10以上をfilter", () => {
    const res = selectNum;
    expect(res).toEqual([10, 15, 20]);
  });
});

describe("falseが混ざるケース", () => {
  const names = ["ken", "kentaro", "joe", "tanaka"];
  const selectName = names.filter((name) => {
    return name.length >= 5;
  });
  it("5文字以上の名前を残す", () => {
    const res = selectName;
    expect(res).toEqual(["kentaro", "tanaka"]);
  });
});

describe("objectのケース", () => {
  const users = [
    { name: "ken", age: 18 },
    { name: "tanaka", age: 25 },
    { name: "sato", age: 30 },
  ];
  const selectUser = users.filter((user) => {
    return user.age >= 25;
  });
  it("20歳以上を残す", () => {
    const res = selectUser;
    expect(res).toEqual([
      { name: "tanaka", age: 25 },
      { name: "sato", age: 30 },
    ]);
  });
});

describe("全部falseの場合", () => {
  const fruits = ["apple", "banana", "orange"];
  const selectFruits = fruits.filter((fruit) => {
    return fruit === "grape";
  });
  it("grapeの場合", () => {
    const res = selectFruits;
    expect(res).toEqual([]);
  });
});
