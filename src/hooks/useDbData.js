// 匯入檔案
const filePath = "./src/utils/data.json";

// 使用 Fetch API 讀取 JSON 檔案
export const fetchDbData = async () => {
	try {
		const response = await fetch(filePath);
		const data = await response.json();
		const dataList = data.tracks;
		return dataList;
	} catch (error) {
		// 處理讀取檔案時的錯誤
		console.error("Error reading file:", error);
	}
};
