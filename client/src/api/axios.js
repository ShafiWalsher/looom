import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: { "Content-Type": "application/json" },
});

// Attach token automatically to ALL requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Handle server errors globally
api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (!error.response) {
      return Promise.reject("Network error");
    }

    const { status, data } = error.response;

    if (status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    return Promise.reject(data?.error || "Something went wrong");
  },
);

export default api;
