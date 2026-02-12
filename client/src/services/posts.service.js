import api from "../api/axios";

/**
 * Create a new post
 */
export const createPost = async (data) => {
  const res = await api.post("/posts", data);
  return res.data;
};

/**
 * Get feed
 */
export const getFeed = async (params = {}) => {
  const res = await api.get("/posts/feed", { params });
  return res.data;
};

/**
 * Get replies for a post
 */
export const getReplies = async (postId, params = {}) => {
  if (!postId) {
    throw { status: 400, message: "Post ID is required" };
  }

  const res = await api.get(`/posts/${postId}/replies`, { params });
  return res.data;
};

/**
 * Get full thread
 */
export const getThread = async (postId, params = {}) => {
  if (!postId) {
    throw { status: 400, message: "Post ID is required" };
  }

  const res = await api.get(`/posts/${postId}`, { params });
  return res.data;
};

/**
 * Delete post
 */
export const deletePost = async (postId) => {
  if (!postId) {
    throw { status: 400, message: "Post ID is required" };
  }

  const res = await api.delete(`/posts/${postId}`);
  return res.data;
};
