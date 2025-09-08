import { Router } from "express";
import { readFile } from "../utils/file.js";
import path from "path";

const router = Router();
const urlPost = path.join(process.cwd(), "public/posts.json");

router.get("/", (req, res) => {
  try {
    const posts = readFile(urlPost);
    console.log(posts);

    res.json(posts);
  } catch (error) {
    res.status(501).json({ error: err.message });
  }
});

export default router;
