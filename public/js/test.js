const response = {
  status: 200,
  data: {
    orders: [
      { id: 1, amount: "1200", currency: "JPY", isCancelled: false },
      { id: 2, amount: null, currency: "JPY", isCancelled: false },
      { id: 3, amount: "3000", currency: "USD", isCancelled: false },
      { id: 4, amount: "500", currency: "JPY", isCancelled: true },
      { id: 5, amount: "", currency: "JPY", isCancelled: false },
      { id: 6, amount: 2500, currency: "JPY", isCancelled: false },
    ],
  },
};

const getLargeJpyAmounts = (response) => {
  if (response.status !== 200) {
    return [];
  }
  return response.data.orders
    .filter((order) => {
      const parsedAmount = Number(order.amount);
      return (
        order.isCancelled === false &&
        order.currency === "JPY" &&
        order.amount !== null &&
        order.amount !== "" &&
        Number.isFinite(parsedAmount) &&
        parsedAmount >= 2000
      );
    })
    .map((order) => {
      return order.amount;
    });
};

console.log(getLargeJpyAmounts(response));
