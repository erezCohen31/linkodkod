import { readFile, writeFile, deletePostFile } from "../utils/file.js";
const postPath = "public/posts.json";
import postUtils from "../utils/postUtils.js";

const postService = {
  //recover all posts
  getAllPost() {
    const posts = readFile(postPath);
    return posts;
  },

  //search posts by user and return
  getMyPost(userId) {
    const posts = readFile(postPath);
    const myPosts = posts.filter((post) => post.userId === userId);
    return myPosts;
  },

  //search the post by id and delete it
  deletePost(postId) {
    const posts = readFile(postPath);
    const newPosts = posts.filter((post) => Number(post.id) != postId);
    deletePostFile(postPath, newPosts);
    return true;
  },

  //get post by id
  getPostById(id) {
    const posts = readFile(postPath);
    const post = posts.find((post) => post.id === id);
    return post;
  },

  //logic for add a new post
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

  //logic for update counter like
  updateLikeCount(id, numOfLike) {
    const post = postUtils.findPost(id);
    post.numOfLike = numOfLike;
    writeFile(postPath, post);
    return post.numOfLike;
  },
};

export default postService;
