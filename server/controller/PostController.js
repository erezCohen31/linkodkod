import postService from "../service/postService.js";

const postController = {
  async addPost(req, res) {
    try {
      const { description, userId, username, alt } = req.body;
      postService.addPost(
        req.file.filename,
        description,
        userId,
        username,
        alt
      );
      res.json({ error: "post uploaded successfully: " });
    } catch (error) {
      res.status(400).json({ error: "Post not add" });
    }
  },

  async getAllPosts(req, res) {
    try {
      const posts = postService.getAllPost();
      if (!posts) {
        return res.status(404).json({ error: "Posts not found" });
      }
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  async getMyPost(req, res) {
    try {
      const { userId } = req.params;
      console.log(userId);

      const posts = postService.getMyPost(userId);
      if (!posts) {
        return res.status(404).json({ error: "Posts not found" });
      }
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async getPostByid(req, res) {
    try {
      const { id } = req.params;
      const post = postService.getPostById(Number(id));
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  async updateLikeCount(req, res) {
    try {
      const { id } = req.params;
      const { numOfLike } = req.body;
      const newLikeCount = postService.updateLikeCount(
        Number(id),
        Number(numOfLike)
      );
      if (!newLikeCount) {
        return res.status(404).json({ error: "Post not found" });
      }
      const newLikeCountStr = newLikeCount.toString();
      res.send(newLikeCountStr);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  async deletePost(req, res) {
    try {
      const { postId } = req.params;
      const post = postService.deletePost(Number(postId));
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      res.send(true);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

export default postController;
