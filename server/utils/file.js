import { log } from "console";
import fs from "fs";
import { json } from "stream/consumers";

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
    console.log("File written successfully.");
  } catch (error) {
    return error;
  }
}
