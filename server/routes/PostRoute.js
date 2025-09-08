import { Router } from "express";
import { readFile } from "../utils/file.js";
import path from "path";

const router = Router();
const urlPost = path.join(process.cwd(), "public/posts.json");

router.get("/", (req, res) => {
  try {
    const posts = readFile(urlPost);
    console.log("recu");

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
