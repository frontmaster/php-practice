const { getType } = require("typechecker");

describe("問題1", () => {
  const judgeScore = (score) => {
    if (score >= 90) {
      return "S";
    }
    if (score >= 70) {
      return "A";
    }
    if (score >= 50) {
      return "B";
    }
    return "C";
  };
  it("score判定", () => {
    expect(judgeScore(95)).toEqual("S");
    expect(judgeScore(70)).toEqual("A");
    expect(judgeScore(50)).toEqual("B");
    expect(judgeScore(40)).toEqual("C");
  });
});

describe("問題2", () => {
  const users = [
    { name: "ken", age: 18 },
    { name: "tanaka", age: 25 },
  ];
  const addAge = users.map((user) => {
    return { name: user.name, age: user.age + 5 };
  });
  it("addAgeのチェック", () => {
    expect(addAge).toEqual([
      { name: "ken", age: 23 },
      { name: "tanaka", age: 30 },
    ]);
  });
});

describe("問題3", () => {
  const names = ["ken", "tanaka", "joe", "sato", "oda"];
  const selectName = names.filter((name) => {
    return name.length >= 4 && name.includes("a");
  });
  it("4文字以上かつaを含むname", () => {
    expect(selectName).toEqual(["tanaka", "sato"]);
  });
});

describe("問題4", () => {
  const users = [
    { name: "ken", age: 18 },
    { name: "tanaka", age: 25 },
    { name: "sato", age: 30 },
  ];
  const selectUser = users.filter((user) => {
    return user.age >= 20;
  });
  const resetUser = selectUser.map((user) => {
    return user.name;
  });
  it("20歳以上でnameのみ", () => {
    expect(resetUser).toEqual(["tanaka", "sato"]);
  });
});

describe("問題5", () => {
  const names = ["ken", "tanaka"];
  const utils = {
    createName: (name) => {
      return `Mr.${name}`;
    },
  };
  const res = names.map((name) => {
    return utils.createName(name);
  });
  it("Mr.をつけたname", () => {
    expect(res).toEqual(["Mr.ken", "Mr.tanaka"]);
  });
});

describe("問題6", () => {
  const users = [
    { name: "ken", age: 18 },
    { name: "tanaka", age: 25 },
  ];
  const addProperty = users.map((user) => {
    if (user.age >= 20) {
      return { name: user.name, age: user.age, isAdult: true };
    }
    return { name: user.name, age: user.age, isAdult: false };
  });
  it("20歳以上かどうか", () => {
    expect(addProperty).toEqual([
      { name: "ken", age: 18, isAdult: false },
      { name: "tanaka", age: 25, isAdult: true },
    ]);
  });
});
