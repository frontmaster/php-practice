const { getType } = require("typechecker");

describe("filterを使った問題", () => {
  const teams = ["tigers", "dna", "dragons"];
  const res = teams.filter((team) => {
    return team === "tigers";
  });
  it("tigersが抽出される", () => {
    const expected = ["tigers"];
    expect(res).toEqual(expected);
  });
});

describe("filterで一致しない場合", () => {
  const teams = ["tigers", "carp", "dna"];
  const res = teams.filter((team) => {
    return team === "giants";
  });
  it("何も抽出されない", () => {
    const expected = [];
    expect(res).toEqual(expected);
  });
});
