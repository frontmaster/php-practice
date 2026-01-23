const apiResponse = [
  {
    id: 1,
    name: "ECサイト改修",
    status: "active",
    priority: "high",
    startDate: "2025-02-01",
  },
  {
    id: 2,
    name: "社内ツール",
    status: "pending",
    priority: "low",
    startDate: "2025-01-20",
  },
  {
    id: 3,
    name: "採用管理システム",
    status: "active",
    priority: "low",
    startDate: "2025-01-25",
  },
  {
    id: 4,
    name: "予約システム",
    status: "active",
    priority: "high",
    startDate: "2025-01-15",
  },
];

const selectRes = apiResponse
  .filter((res) => {
    return res.status === "active";
  })
  .map((res) => {
    return {
      id: res.id,
      name: res.name,
      isHighPriority: res.priority === "high",
      startDate: res.startDate,
    };
  });

const sortRes = selectRes.sort((a, b) => {
  if (a.isHighPriority !== b.isHighPriority) {
    return a.isHighPriority ? -1 : 1;
  }
  return new Date(a.startDate) - new Date(b.startDate);
});

console.log(sortRes);
