const logs = [
  { id: 1, type: "error", resolvedAt: null },
  { id: 2, type: "info", resolvedAt: "2025-01-01" },
  { id: 3, type: "error", resolvedAt: null },
  { id: 4, type: "warn", resolvedAt: null },
];

const result = (logs) => {
  return logs.reduce((acc, log) => {
    if (log.resolvedAt !== null) {
      return acc;
    }
    acc[log.type] = (acc[log.type] ?? 0) + 1;
    return acc;
  }, {});
};

console.log(result(logs));
