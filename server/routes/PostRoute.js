import { Router } from "express";
import upload from "../middleware/imageMiddleware.js";
import postController from "../controller/PostController.js";

const router = Router();

router.post("/image", upload.single("image"), postController.imagePost);
router.get("/", postController.getAllPosts);

export default router;
