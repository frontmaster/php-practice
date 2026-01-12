const { getType } = require("typechecker");

describe("オブジェクトの中に配列を入れてテスト", () => {
  const teams = ["tigers", "carp", "swallows"];

  const obj = {
    title: "プロ野球チーム",
    count: 12,
    list: teams,
  };
  it("オブジェクト全体の型チェック", () => {
    const res = getType(obj);
    expect(res).toEqual("object");
  });
  it("オブジェクト内の配列の型と値をチェック", () => {
    const res = getType(obj.list);
    expect(res).toEqual("array");
    expect(res).not.toEqual("object");
    const res2 = obj.list;
    expect(res2).toEqual(["tigers", "carp", "swallows"]);
  });
  it("titleの型チェック", () => {
    const res = getType(obj.title);
    expect(res).toEqual("string");
  });
  it("countの値チェック", () => {
    const res = obj.count;
    expect(res).toEqual(12);
  });
});
