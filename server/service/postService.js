import { readFile, writeFile, deletePostFile } from "../utils/file.js";
const postPath = "public/posts.json";

function findPost(id) {
  const posts = readFile(postPath);
  if (posts.length > 0) {
    const post = posts.find((post) => post.id === id);
    return post;
  }
  return null;
}
export function findPostByid(postId) {
  const posts = readFile(postPath);
  const post = posts.find((post) => post.id === Number(postId));
  return post.userId;
}
function findId() {
  const posts = readFile(postPath);
  if (posts.length > 0) {
    const id = Math.max(...posts.map((o) => o.id));
    return id;
  }
  return 0;
}
function getTime() {
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
}
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
      id: findId() + 1,
      url: `images/${image}`,
      alt: alt,
      description: description,
      numOfLike: 0,
      username: username,
      time: getTime(),
      userId: userId,
    };

    writeFile(postPath, newPost);
  },
  updateLikeCount(id, numOfLike) {
    const post = findPost(id);
    post.numOfLike = numOfLike;
    writeFile(postPath, post);
    return post.numOfLike;
  },
};

export default postService;
