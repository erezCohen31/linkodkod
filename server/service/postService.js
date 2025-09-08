import { readFile } from "../utils/file.js";
const postPath = "public/posts.json";
const postService = {
  getAllPost() {
    const posts = readFile(postPath);
    return posts;
  },

  getPostById(id) {
    const posts = readFile(postPath);
    const post = posts.find((post) => post.id === id);
    return post;
  },
};

export default postService;
