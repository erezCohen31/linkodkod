import { readFile } from "../utils/file.js";
const postPath = "public/posts.json";

const postUtils = {
  findPost(id) {
    const posts = readFile(postPath);
    if (posts.length > 0) {
      const post = posts.find((post) => post.id === id);
      return post;
    }
    return null;
  },

  findPostByid(postId) {
    const posts = readFile(postPath);
    const post = posts.find((post) => post.id === Number(postId));
    return post.userId;
  },

  findId() {
    const posts = readFile(postPath);
    if (posts.length > 0) {
      const id = Math.max(...posts.map((o) => o.id));
      return id;
    }
    return 0;
  },

  getTime() {
    const timestamp = Date.now();
    const dateObject = new Date(timestamp);
    const dateString = dateObject.toLocaleString("fr-Fr", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    return dateString;
  },
};
export default postUtils;
