import api from "../api/axios";

export const registerUser = async (data) => {
  try {
    const res = await api.post("/auth/register", data);
    return res.data;
  } catch (err) {
    throw err.message;
  }
};

export const loginUser = async (data) => {
  try {
    const res = await api.post("/auth/login", data);
    localStorage.setItem("token", res.data.token);
    return res.data;
  } catch (err) {
    throw err.message;
  }
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

export const isAuthenticated = () => !!localStorage.getItem("token");
