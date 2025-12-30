import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URI}/api`,

  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/auth/login";
    }

    return Promise.reject(error);
  }
);
