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
