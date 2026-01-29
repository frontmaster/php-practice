const members = [
  { id: 1, name: "田中", role: "admin", disabledAt: null },
  { id: 2, name: "佐藤", role: "user", disabledAt: "2024-05-01" },
  { id: 3, name: "鈴木", role: "user", disabledAt: null },
  { id: 4, name: "高橋", role: "admin", disabledAt: null },
];

const result = (members) => {
  return members
    .filter((member) => {
      return member.disabledAt === null && member.role === "user";
    })
    .map((member) => {
      return { value: member.id, label: member.name };
    });
};

console.log(result(members));
