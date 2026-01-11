const checkDay = (value) => {
  if (value === "月") {
    return "月曜日です";
  }
  if (value === "火") {
    return "火曜日です";
  }

  if (value === "水") {
    return "水曜日です";
  }
  return "対象外の曜日です";
};

const checkFruits = (value) => {
  if (value === "りんご") {
    return "りんごです";
  }
  if (value === "ばなな") {
    return "ばななです";
  }
  if(value === "みかん"){
    return "みかんです";
  }
  return "対象外の果物です";
};

const checkStatus = (value) =>{
    if(value === "success"){
        return "成功です";
    }
    if(value === "error"){
        return "失敗です";
    }
    if(value === "loading"){
       return "処理中です";
    }
    return "不明な状態です";
}
module.exports = {
  checkDay,
  checkFruits,
  checkStatus
};
