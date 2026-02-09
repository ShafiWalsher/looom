import api from "../api/axios";

export const toggleLike = async (postId, action) => {
  try {
    const res = await api.post(`/posts/${postId}/like`, { action });
    return res.data;
  } catch (err) {
    throw err.message;
  }
};

export const toggleFollow = async (userId, action) => {
  try {
    const res = await api.post(`/users/${userId}/follow`, { action });
    return res.data;
  } catch (err) {
    throw err.message;
  }
};
