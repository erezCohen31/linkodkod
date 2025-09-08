import { readFile, writeFile } from "../utils/file.js";
const userPath = "public/users.json";
import bcrypt from "bcrypt";

function findUser(mail) {
  const users = readFile(userPath);
  const user = users.find((user) => user.mail === mail);
  return user;
}
function findId() {
  const posts = readFile(userPath);
  const id = Math.max(...posts.map((o) => o.id));
  return id;
}
const authService = {
  async createUser(name, mail, password) {
    const foundUser = findUser(mail);
    if (!foundUser) {
      user.password = await bcrypt.hash(user.password, 10);
      const newUser = {
        name,
        mail,
        password,
      };
      writeFile(userPath, newUser);
      return true;
    }
    return false;
  },
  async compareUser(mail, password) {
    const foundUser = findUser(mail);
    if (!foundUser && (await bcrypt.compare(password, findUser.password))) {
      return findUser;
    }
    return false;
  },
};

export default authService;
