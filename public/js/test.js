const { getType } = require("typechecker");

describe("オブジェクトに関数を入れた場合のテスト", () => {
  const add = (num1, num2) => {
    return num1 + num2;
  };

  const obj = {
    name: "加算の関数",
    subject: "算数",
    myFunc: add,
  };

  it("関数の型チェック", () => {
    const res = getType(obj.myFunc);
    expect(res).toEqual("function");
  });
  it("関数の結果をチェック", () => {
    const res = obj.myFunc(15, 24);
    expect(res).toEqual(39);
  });
});
