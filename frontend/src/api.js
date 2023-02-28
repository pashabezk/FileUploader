import axios from "axios";

const SERVER_BASE_URL = "http://localhost:5000/"; // url сервера

// instance для запросов
export const axiosInstance = axios.create({
	baseURL: SERVER_BASE_URL,
	withCredentials: true
});

// добавление данных
export const postAddData = (login, password, file) => {
	return axiosInstance.post(`add`, {login, password, file}, {
		headers: {"Content-Type": "multipart/form-data"}
	});
};

// получение данных
export const getData = () => {
	return axiosInstance.get(`data`);
};