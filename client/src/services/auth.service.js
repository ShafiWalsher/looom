import api from "../api/axios";

/**
 * Register user
 */
export const registerUser = async (data) => {
  const res = await api.post("/auth/register", data);
  return res.data;
};

/**
 * Login user
 */
export const loginUser = async (data) => {
  const res = await api.post("/auth/login", data);

  const token = res.data?.token;

  if (!token) {
    throw {
      status: 500,
      message: "Authentication failed. Token not provided.",
    };
  }

  localStorage.setItem("token", token);

  return res.data;
};

/**
 * Logout user
 */
export const logoutUser = () => {
  localStorage.removeItem("token");
  window.location.replace("/");
  window.location.reload();
};

/**
 * Check authentication
 */
export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return Boolean(token);
};

/**
 * Get token
 */
export const getToken = () => localStorage.getItem("token");

/**
 * Decode JWT payload
 */
export const getUser = () => {
  const token = getToken();
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload; // { user_id, username }
  } catch {
    return null;
  }
};
