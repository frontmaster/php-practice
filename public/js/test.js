const check = require("./index.js");
describe("数値判定のテスト", () => {
  test("60以上の場合", () => {
    const res = check.judgeScore(60);
    expect(res).toEqual("合格");
  });
  test("60未満の場合", () => {
    const res = check.judgeScore(59);
    expect(res).toEqual("不合格");
  });
  test("notを使ったテスト", () => {
    const res = check.judgeScore(80);
    expect(res).not.toEqual("不合格");
  });
});

describe("ユーザー判定のテスト", () => {
  test("adminの場合", () => {
    const res = check.getUserType("admin");
    expect(res).toEqual("管理者");
  });

  test("userの場合", () => {
    const res = check.getUserType("user");
    expect(res).toEqual("一般ユーザー");
  });

  test("adminとuser以外の場合", () => {
    const res = check.judgeScore("犬");
    expect(res).not.toEqual("管理者");
  });
});

describe("野球チームのテスト", () => {
  test("燕の場合", () => {
    const res = check.checkTeam("燕");
    expect(res).toEqual("ヤクルトです");
  });
  test("虎の場合", () => {
    const res = check.checkTeam("虎");
    expect(res).toEqual("タイガースです");
  });

  test("燕、虎以外の場合",()=>{
    const res = check.checkTeam("馬");
    expect(res).not.toEqual("タイガースです");
  })
});
