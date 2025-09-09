import { readFile, writeFile } from "../utils/file.js";
const postPath = "public/posts.json";

function findId() {
  const posts = readFile(postPath);
  const id = Math.max(...posts.map((o) => o.id));
  return id;
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

  getPostById(id) {
    const posts = readFile(postPath);
    const post = posts.find((post) => post.id === id);
    return post;
  },
  addPost(image, description, userId, username) {
    const newPost = {
      id: findId() + 1,
      url: `images/${image}`,
      alt: "image of men",
      description: description,
      numOfLike: 0,
      username: username,
      time: getTime(),
      userId: userId,
    };

    writeFile(postPath, newPost);
  },
};

export default postService;
