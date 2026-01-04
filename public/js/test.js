const check = require("./index.js");
describe("惑星のチェック関数のテスト", () => {
  test("月の場合", () => {
    const res = check("月");
    expect(res).toEqual("月です");
  });

  test("太陽の場合", () => {
    const res = check("太陽");
    expect(res).toEqual("太陽です");
  });

  test("犬の場合", () => {
    const res = check("犬");
    expect(res).toEqual("月でも太陽でもありません");
  });

  test("数値の場合", () => {
    const res = check(100);
    expect(res).toEqual("月でも太陽でもありません");
  });
});
