import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: import.meta.env.MODE === "development" ? "https://loop-final-back-end.onrender.com/api/v1" : "https://loop-final-back-end.onrender.com/api/v1",
	withCredentials: true,
});
