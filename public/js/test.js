// const { getType } = require("typechecker");

const users = [
  {
    id: 1,
    name: "田中",
    isActive: true,
    posts: [
      { id: 101, title: "JS", isPublished: true },
      { id: 102, title: "Vue", isPublished: false },
    ],
  },
  {
    id: 2,
    name: "佐藤",
    isActive: false,
    posts: [{ id: 103, title: "Laravel", isPublished: true }],
  },
  {
    id: 3,
    name: "鈴木",
    isActive: true,
    posts: [],
  },
];

const judgeUsers = users
  .filter((user) => {
    return user.isActive === true;
  })
  .map((user) => {
    const count = user.posts.filter((post) => {
      return post.isPublished === true;
    });
    return {
      id: user.id,
      name: user.name,
      publishPostCount: count.length,
    };
  });
console.log(judgeUsers);
