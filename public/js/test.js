const articles = [
  {
    id: 1,
    title: "JS入門",
    likes: 10,
    isPublished: true,
    publishedAt: "2025-01-10",
  },
  {
    id: 2,
    title: "React実践",
    likes: 0,
    isPublished: true,
    publishedAt: "2025-01-05",
  },
  {
    id: 3,
    title: "Vue設計",
    likes: 25,
    isPublished: false,
    publishedAt: "2025-01-01",
  },
  {
    id: 4,
    title: "TypeScript型設計",
    likes: 18,
    isPublished: true,
    publishedAt: "2025-01-20",
  },
];

const buildArticleList = (articles) => {
  return articles
    .filter((article) => {
      return article.isPublished && article.likes > 0;
    })
    .sort((a, b) => {
      return new Date(b.publishedAt) - new Date(a.publishedAt);
    })
    .map(({ id, title, likes, publishedAt }) => {
      return {
        id: id,
        title: title,
        likeLabel: `いいね ${likes}件`,
        publishedAt,
      };
    });
};

console.log(buildArticleList(articles));