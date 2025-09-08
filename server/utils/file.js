import fs from "fs";

export function readFile(url) {
  try {
    const data = fs.readFileSync(url, {
      encoding: "utf8",
      flag: "r",
    });

    return data;
  } catch (error) {
    return error;
  }
}
