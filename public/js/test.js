const { getType } = require("typechecker");

describe("型チェック（数値、関数）", () => {
  test("数値の場合", () => {
    const value = 100;
    const res = getType(value);
    expect(res).toEqual("number");
  });
  test("関数の場合", () => {
    const value = (x) => x + 3;
    const res = getType(value);
    expect(res).toEqual("function");
  });
});

describe("型チェック（配列、オブジェクト）", () => {
  test("配列の場合", () => {
    const value = [1, 2, 3];
    const res = getType(value);
    expect(res).toEqual("array");
  });
  test("オブジェクトの場合", () => {
    const value = { name: "ken" };
    const res = getType(value);
    expect(res).toEqual("object");
  });
});

describe("型チェック（null、undefined）", () => {
  test("nullの場合", () => {
    const value = null;
    const res = getType(value);
    expect(res).toEqual("null");
  });

  test("undefinedの場合", () => {
    const value = undefined;
    const res = getType(value);
    expect(res).toEqual("undefined");
  });
});

describe("型チェック（boolean）", () => {
  test("trueの場合", () => {
    const value = true;
    const res = getType(value);
    expect(res).toEqual("boolean");
  });
  test("falseの場合", () => {
    const value = false;
    const res = getType(value);
    expect(res).not.toEqual("string");
  });
});

describe("型チェック（日付）", () => {
  test("Dateの場合", () => {
    const value = new Date();
    const res = getType(value);
    expect(res).toEqual("date");
  });
});

describe("型チェック（NaN）", () => {
  test("NaNの場合", () => {
    const value = NaN;
    const res = getType(value);
    expect(res).toEqual("number");
  });
});
