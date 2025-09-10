import { Router } from "express";
import upload from "../middleware/imageMiddleware.js";
import postController from "../controller/PostController.js";
import {
  verifyToken,
  verifyId,
  verifyPostId,
} from "../middleware/verifyToken.js";

const router = Router();

router.post(
  "/image",
  verifyToken,
  upload.single("image"),
  postController.addPost
);
router.get("/", verifyToken, postController.getAllPosts);
router.get("/:id", verifyToken, postController.getPostByid);
router.put("/:id", verifyToken, postController.updateLikeCount);
router.get("/mypost/:userId", verifyToken, verifyId, postController.getMyPost);
router.delete(
  "/delete/:postId",
  verifyToken,
  verifyPostId,
  postController.deletePost
);

export default router;
