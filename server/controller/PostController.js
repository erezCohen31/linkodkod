import { readFile } from "../utils/file.js";
import path from "path";
const urlPost = path.join(process.cwd(), "public/posts.json");

const postController = {
  async imagePost(req, res) {
    if (req.file) {
      res.send("Image uploaded successfully: " + req.file.filename);
    } else {
      res.status(400).send("No image uploaded.");
    }
  },

  async getAllPosts(req, res) {
    try {
      const posts = readFile(urlPost);
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

export default postController;
