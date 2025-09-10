import { readFile, writeFile, deletePostFile } from "../utils/file.js";
const postPath = "public/posts.json";
import postUtils from "../utils/postUtils.js";

const postService = {
  getAllPost() {
    const posts = readFile(postPath);
    return posts;
  },
  getMyPost(userId) {
    const posts = readFile(postPath);
    const myPosts = posts.filter((post) => post.userId === userId);
    return myPosts;
  },
  deletePost(postId) {
    const posts = readFile(postPath);
    const newPosts = posts.filter((post) => Number(post.id) != postId);
    deletePostFile(postPath, newPosts);
    return true;
  },

  getPostById(id) {
    const posts = readFile(postPath);
    const post = posts.find((post) => post.id === id);
    return post;
  },
  addPost(image, description, userId, username, alt) {
    const newPost = {
      id: postUtils.findId() + 1,
      url: `images/${image}`,
      alt: alt,
      description: description,
      numOfLike: 0,
      username: username,
      time: postUtils.getTime(),
      userId: userId,
    };

    writeFile(postPath, newPost);
  },
  updateLikeCount(id, numOfLike) {
    const post = postUtils.findPost(id);
    post.numOfLike = numOfLike;
    writeFile(postPath, post);
    return post.numOfLike;
  },
};

export default postService;
