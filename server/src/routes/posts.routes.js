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
router.get("/:id/replies", getReplies);

// get post thread (post + all replies)
router.get("/:id", getPostThread);

// User profile posts
router.get("/user/:userId", getUserPosts);

// Delete own post
router.delete("/:id", auth, deletePost);

export default router;
