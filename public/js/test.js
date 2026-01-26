const nums = [1, 2, 2, 3, 3, 3, 4];

const result = nums
  .filter((num) => {
    return num >= 2;
  })
  .reduce((acc, num) => {
    acc[num] = (acc[num] ?? 0) + 1;
    return acc;
  }, {});

  console.log(result);
