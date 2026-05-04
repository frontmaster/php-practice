const orders = [
  { id: 1, items: [{ price: 100 }, { price: 200 }] },
  { id: 2, items: [{ price: 300 }] },
];


const formatOrder = orders => orders.reduce((acc, order) => {
  ({ id: order.id, total: order.items.reduce((sum, item) => sum + item.price, 0) })
  return acc;
}, []);

console.log(formatOrder(orders));