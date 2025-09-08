import postService from "../service/postService.js";

const postController = {
  async addPost(req, res) {
    const description = req.body.description;
    console.log(req.file.filename);

    postService.addPost(req.file.filename, description);

    if (req.file) {
      res.send("Image uploaded successfully: " + req.file.filename);
    } else {
      res.status(400).send("No image uploaded.");
    }
  },

  async getAllPosts(req, res) {
    try {
      const posts = postService.getAllPost();
      if (!posts) {
        return res.status(404).json({ message: "Posts not found" });
      }

      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  async getPostByid(req, res) {
    try {
      const { id } = req.params;
      const post = postService.getPostById(Number(id));
      console.log(post);

      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }

      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

export default postController;
