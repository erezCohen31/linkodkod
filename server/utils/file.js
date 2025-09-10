import fs from "fs";

export function readFile(url) {
  try {
    const data = fs.readFileSync(url, {
      encoding: "utf8",
      flag: "r",
    });

    return JSON.parse(data);
  } catch (error) {
    return error;
  }
}

export function writeFile(url, post) {
  try {
    const posts = readFile(url);
    posts.push(post);
    const stringPost = JSON.stringify(posts);
    fs.writeFileSync(url, stringPost);
  } catch (error) {
    return error;
  }
}
export function deletePostFile(url, posts) {
  try {
    const stringPost = JSON.stringify(posts);
    fs.writeFileSync(url, stringPost);
  } catch (error) {
    return error;
  }
}
