import { readFile, writeFile } from "../utils/file.js";
const postPath = "public/posts.json";

function findId() {
  const posts = readFile(postPath);
  const id = Math.max(...posts.map((o) => o.id));
  return id;
}
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
  addPost(image, description) {
    const newPost = {
      id: findId(),
      url: `images/${image}`,
      alt: "image of men",
      description: description,
      numOfLike: 0,
      username: "erez",
      time: Date.now(),
    };
    writeFile(postPath, newPost);
  },
};

export default postService;
