const { getType } = require("typechecker");

describe("mapのテスト", () => {
  const numbers = [2, 4, 6];
  const res = numbers.map((num) => {
    return num * 3;
  });
  it("配列の数値を3倍にする", () => {
    expect(res).toEqual([6, 12, 18]);
  });
});

describe("mapのテスト(文字列)", () => {
  const strings = ["sato", "yamada"];
  const res = strings.map((name) => {
    return `Mr.${name}`;
  });
  test("Mr.をつける", () => {
    expect(res).toEqual(["Mr.sato", "Mr.yamada"]);
  });
});

describe("map length", () => {
  const names = ["ken", "tanaka", "oda"];
  const res = names.map((name) => {
    return name.length;
  });
  test("文字列の長さ", () => {
    expect(res).toEqual([3, 6, 3]);
  });
});

describe("map object", () => {
  const users = [
    { name: "ken", age: 18 },
    { name: "tanaka", age: 25 },
  ];
  const res = users.map((user) => {
    return user.name;
  });
  it("nameのみ", () => {
    expect(res).toEqual(["ken", "tanaka"]);
  });
});
