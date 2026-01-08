const judgeScore = (value) => {
  if (value >= 60) {
    return "合格";
  }
  return "不合格";
};

const getUserType = (value) => {
  if (value === "admin") {
    return "管理者";
  }
  if (value === "user") {
    return "一般ユーザー";
  }
  return "ゲスト";
};

const checkTeam = (value) => {
  if (value === "燕") {
    return "ヤクルトです";
  }
  if (value === "虎") {
    return "タイガースです";
  }
  return "そのチームはありません";
};

module.exports = {
  judgeScore,
  getUserType,
  checkTeam
};
