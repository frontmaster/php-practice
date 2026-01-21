// const { getType } = require("typechecker");

const apiResponse = [
  {
    id: 1,
    name: "田中",
    role: "member",
    tasks: [
      { id: 101, status: "todo" },
      { id: 102, status: "done" },
    ],
  },
  {
    id: 2,
    name: "佐藤",
    role: "admin",
    tasks: [],
  },
  {
    id: 3,
    name: "鈴木",
    role: "member",
    tasks: [{ id: 103, status: "todo" }],
  },
];

const selectMembers = apiResponse
  .filter((response) => {
    return response.role === "member";
  })
  .map((response) => {
    const todoNumber = response.tasks.filter((task) => {
      return task.status === "todo";
    });
    return {
      id: response.id,
      name: response.name,
      todoCount: todoNumber.length,
    };
  });

const judgeMember = selectMembers.filter((member) => {
  return member.todoCount > 0;
});

console.log(judgeMember);
