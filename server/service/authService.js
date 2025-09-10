import { readFile, writeFile } from "../utils/file.js";
const userPath = "public/users.json";
import bcrypt from "bcrypt";

function findUser(mail) {
  const users = readFile(userPath);
  if (users.length > 0) {
    const user = users.find((user) => user.mail === mail);
    return user;
  }
  return null;
}
export function findId() {
  const users = readFile(userPath);
  if (users.length > 0) {
    const id = Math.max(...users.map((o) => o.id));
    return id;
  }
  return 0;
}
const authService = {
  async createUser(name, mail, password) {
    const foundUser = findUser(mail);

    if (!foundUser) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = {
        id: findId() + 1,
        name,
        mail,
        password: hashedPassword,
      };
      writeFile(userPath, newUser);
      newUser.password = "";
      return newUser;
    }
    return false;
  },
  async compareUser(mail, password) {
    let valid;
    const foundUser = findUser(mail);

    if (foundUser) {
      valid = await bcrypt.compare(password, foundUser.password);
    }
    if (valid) {
      return foundUser;
    }
    return false;
  },
};

export default authService;
