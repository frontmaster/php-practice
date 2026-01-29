const posts = [
  { id: 1, title: "JS基礎", publishedAt: "2025-01-01", isDraft: false },
  { id: 2, title: "Vue入門", publishedAt: null, isDraft: true },
  { id: 3, title: "Laravel実務", publishedAt: "2025-01-10", isDraft: false },
];

const result = (posts) => {
  return posts
    .filter((post) => {
      return post.isDraft === false;
    })
    .sort((a, b) => {
      return new Date(a.publishedAt) - new Date(b.publishedAt);
    })
    .map((post) => {
      return { id: post.id, title: post.title };
    });
};

console.log(result(posts));
