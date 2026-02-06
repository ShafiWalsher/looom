import express from "express";
import {
  toggleFollow,
  toggleLike,
} from "../controllers/likes-follow.controller.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.post("/:postId/like", auth, toggleLike);

router.post("/:user_id/follow", auth, toggleFollow);

export default router;
