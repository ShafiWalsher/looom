import express from "express";
import {
  createPost,
  deletePost,
  getFeed,
  getPostThread,
  getReplies,
  getUserPosts,
} from "../controllers/posts.controller.js";
import { auth } from "../middleware/auth.js";
import { requireFields } from "../middleware/validate.js";

const router = express.Router();

// Create post or reply
router.post("/", auth, requireFields(["content"]), createPost);

// Global feed
router.get("/feed", getFeed);

// Direct replies (conversation view)
router.get("/:postId/replies", getReplies);

// get post thread (post + all replies)
router.get("/:postId", getPostThread);

// User profile posts
router.get("/user/:userId", getUserPosts);

// Delete own post
router.delete("/:postId", auth, deletePost);

export default router;
