import axios from "axios";

const API_BASE_URL = process.env.BASE_URL + "/api";

const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status) {
      if (error.response.status === 401) {
        console.log("Unauthorized");
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
