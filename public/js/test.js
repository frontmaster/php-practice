const { getType } = require("typechecker");

describe("問題1", () => {
  const judgeScore = (score) => {
    if (score >= 80) {
      return "A";
    }
    if (score >= 60 && score < 80) {
      return "B";
    }
    return "C";
  };
  it("80点以上はA", () => {
    expect(judgeScore(80)).toEqual("A");
  });
  it("60点以上80点未満はB", () => {
    expect(judgeScore(60)).toEqual("B");
  });
  it("60点未満はC", () => {
    expect(judgeScore(59)).toEqual("C");
  });
});

describe("問題2", () => {
  const prices = [100, 200, 300];
  const res = prices.map((price) => {
    return Math.round(price * 1.1);
  });
  it("税込価格に変換", () => {
    expect(res).toEqual([110, 220, 330]);
  });
});

describe("問題3", () => {
  const names = ["ken", "tanaka", "joe", "suzuki"];
  const res = names.filter((name) => {
    return name.length >= 5;
  });
  it("5文字以上の名前を抽出", () => {
    expect(res).toEqual(["tanaka", "suzuki"]);
  });
});

describe("問題4", () => {
  const utils = {
    formatUser: (name) => {
      return `User:${name}`;
    },
  };
  const users = ["ken", "tanaka"];
  const res = users.map((name) => {
    return utils.formatUser(name);
  });
  it("Userを付ける", () => {
    expect(res).toEqual(["User:ken", "User:tanaka"]);
  });
});

describe("問題5", () => {
  const users = [
    { name: "ken", age: 18 },
    { name: "tanaka", age: 25 },
    { name: "sato", age: 30 },
  ];
  const selectAge = users.filter((user) => {
    return user.age >= 20;
  });
  const selectName = selectAge.map((user) => {
    return user.name;
  });
  it("20歳以上の名前一覧", () => {
    expect(selectName).toEqual(["tanaka", "sato"]);
  });
});

describe("問題6", () => {
  const obj = {
    calc: (a, b) => {
      return a + b;
    },
  };
  it("calcは関数型", () => {
    const res = getType(obj.calc);
    expect(res).toEqual("function");
  });
  it("計算結果", () => {
    expect(obj.calc(7, 8)).toEqual(15);
  });
});
