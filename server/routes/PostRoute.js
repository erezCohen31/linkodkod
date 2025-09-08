import { Router } from "express";
import upload from "../middleware/imageMiddleware.js";
import postController from "../controller/PostController.js";

const router = Router();

router.post("/image", upload.single("image"), postController.imagePost);
router.get("/", postController.getAllPosts);
router.get("/:id", postController.getPostByid);

export default router;
