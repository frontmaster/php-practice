const words = ["js", "vue", "js", "react", "vue", "js"];

// reduce を使って各単語の出現回数をオブジェクトにしてください
// 期待結果: { js: 3, vue: 2, react: 1 }

const result = words.reduce((acc, word) => {
  acc[word] = (acc[word] ?? 0) + 1;
  return acc;
}, {});

console.log(result);
