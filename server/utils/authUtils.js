const userPath = "public/users.json";
import { readFile, writeFile } from "../utils/file.js";

const authUtils = {
  findUser(mail, username = "") {
    console.log("in utils");

    const users = readFile(userPath);
    if (users.length > 0) {
      const userMail = users.find((user) => user.mail === mail);
      const userNamec = users.find((user) => user.userName === username);
      if (userMail || userNamec) {
        return userMail;
      }
    }
    return false;
  },
  findId() {
    const users = readFile(userPath);
    if (users.length > 0) {
      const id = Math.max(...users.map((o) => o.id));
      return id;
    }
    return 0;
  },
};

export default authUtils;
