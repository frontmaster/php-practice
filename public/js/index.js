const products = [
  {
    id: 1,
    name: "ランニングシューズ",
    price: 12000,
    stock: 5,
    isActive: true,
  },
  {
    id: 2,
    name: "サッカーボール",
    price: 4000,
    stock: 0,
    isActive: true,
  },
  {
    id: 3,
    name: "トレーニングウェア",
    price: 6000,
    stock: 12,
    isActive: false,
  },
];

const result = products =>
  products.map(({ id, name, price, stock, isActive }) =>
    ({ id, name, priceLabel: `¥${price.toLocaleString()}`, stockStatus: (stock === 0) ? "在庫なし" : "在庫あり", status: isActive ? "公開" : "非公開" }))

console.log(result(products));