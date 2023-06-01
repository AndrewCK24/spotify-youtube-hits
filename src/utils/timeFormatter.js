const timeFormatter = (ms) => {
  const seconds = Math.floor(ms / 1000); // 取得秒數
  const minutes = Math.floor(seconds / 60); // 取得分鐘數
  const remainingSeconds = seconds % 60; // 取得剩餘秒數

  const formattedMinutes = String(minutes).padStart(2, '0'); // 格式化分鐘數，補零至兩位數
  const formattedSeconds = String(remainingSeconds).padStart(2, '0'); // 格式化剩餘秒數，補零至兩位數

  return `${formattedMinutes}:${formattedSeconds}`; // 回傳格式化後的時間字串
}

export default timeFormatter;
