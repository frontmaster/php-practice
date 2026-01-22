const response = {
  meta: {
    page: 3,
    perPage: 20,
  },
};

const { meta: { page: currentPage = 1 } = {} } = response;

console.log(currentPage);