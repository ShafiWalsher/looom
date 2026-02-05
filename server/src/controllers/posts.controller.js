import { pool } from "../db.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

//
// Create Post or Reply
//
export const createPost = asyncHandler(async (req, res) => {
  const { content, parent_id } = req.body;

  const result = await pool.query(
    `INSERT INTO posts (user_id, content, parent_id)
     VALUES ($1, $2, $3)
     RETURNING post_id, content, parent_id, likes_count, replies_count, created_at`,
    [req.user.user_id, content, parent_id || null],
  );

  res.status(201).json(result.rows[0]);
});

//
// Global Feed (Top-Level Posts)
//
export const getFeed = asyncHandler(async (req, res) => {
  const result = await pool.query(
    `
    SELECT 
      p.post_id,
      p.content,
      p.likes_count,
      p.replies_count,
      p.created_at,
      u.username
    FROM posts p
    JOIN users u ON u.user_id = p.user_id
    WHERE p.parent_id IS NULL
    ORDER BY p.created_at DESC
    `,
  );

  res.json(result.rows);
});

//
// Direct Replies (Conversation View)
//
export const getReplies = asyncHandler(async (req, res) => {
  const result = await pool.query(
    `
    SELECT 
      p.post_id,
      p.content,
      p.likes_count,
      p.replies_count,
      p.created_at,
      u.username
    FROM posts p
    JOIN users u ON u.user_id = p.user_id
    WHERE p.parent_id = $1
    ORDER BY p.created_at ASC
    `,
    [req.params.id],
  );

  res.json(result.rows);
});

//
// User Profile Posts (Top-Level Only)
//
export const getUserPosts = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  const result = await pool.query(
    `
    SELECT 
      p.post_id,
      p.content,
      p.likes_count,
      p.replies_count,
      p.created_at,
      u.username
    FROM posts p
    JOIN users u ON u.user_id = p.user_id
    WHERE p.user_id = $1
      AND p.parent_id IS NULL
    ORDER BY p.created_at DESC
    `,
    [userId],
  );

  res.json(result.rows);
});

//
// Delete Own Post
//
export const deletePost = asyncHandler(async (req, res) => {
  const result = await pool.query(
    `
    DELETE FROM posts
    WHERE post_id = $1
      AND user_id = $2
    RETURNING post_id
    `,
    [req.params.id, req.user.user_id],
  );

  if (result.rowCount === 0) {
    return res.status(404).json({ error: "Post not found or not authorized" });
  }

  res.json({ message: "Post deleted" });
});
