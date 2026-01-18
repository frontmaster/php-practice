const { getType } = require("typechecker");

describe("実務的ユーザー整形処理", () => {
  const apiUsers = [
    { id: 1, name: "ken", age: 18, skills: ["js"], deleted: false },
    { id: 2, name: "tanaka", age: 25, skills: ["js", "vue"], deleted: false },
    { id: 3, name: "sato", age: 30, skills: ["php"], deleted: true },
    { id: 4, name: "oda", age: 17, skills: [], deleted: false },
  ];

  const selectUser = apiUsers.filter((user) => {
    return user.deleted === false && user.age >= 20;
  });
  const newUser = selectUser.map((user) => {
    return {
      id: user.id,
      displayName: "Mr." + user.name,
      skillCount: user.skills.length,
      isAdult: user.age >= 20,
    };
  });
  it("管理画面用ユーザー一覧を生成できる", () => {
    expect(newUser).toEqual([
      {
        id: 2,
        displayName: "Mr.tanaka",
        skillCount: 2,
        isAdult: true,
      },
    ]);
  });
});
