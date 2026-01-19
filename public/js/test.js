const { getType } = require("typechecker");

describe("総合問題", () => {
  const apiUsers = [
    {
      id: 1,
      name: "ken",
      age: 18,
      skills: ["js"],
      loginCount: 5,
      deleted: false,
    },
    {
      id: 2,
      name: "tanaka",
      age: 25,
      skills: ["js", "vue"],
      loginCount: 40,
      deleted: false,
    },
    {
      id: 3,
      name: "sato",
      age: 35,
      skills: ["php", "laravel", "docker"],
      loginCount: 120,
      deleted: false,
    },
    {
      id: 4,
      name: "oda",
      age: 28,
      skills: [],
      loginCount: 2,
      deleted: true,
    },
  ];

  const judgeUser = apiUsers.filter((user) => {
    return user.deleted === false && user.age >= 20;
  });
  const selectUser = judgeUser.map((user) => {
    const baseUser = {
      id: user.id,
      displayName: `Mr.${user.name}`,
      skillCount: user.skills.length,
      isAdult: user.age >= 20,
      isActiveUser: user.loginCount >= 30,
    };
    if (user.skills.length >= 3) {
      return { ...baseUser, level: "senior" };
    }
    if (user.skills.length >= 1) {
      return { ...baseUser, level: "middle" };
    }
    if (user.skills.length === 0) {
      return { ...baseUser, level: "junior" };
    }
  });
  it("結果", () => {
    expect(selectUser).toEqual([
      {
        id: 2,
        displayName: "Mr.tanaka",
        skillCount: 2,
        isAdult: true,
        level: "middle",
        isActiveUser: true,
      },
      {
        id: 3,
        displayName: "Mr.sato",
        skillCount: 3,
        isAdult: true,
        level: "senior",
        isActiveUser: true,
      },
    ]);
  });
});
