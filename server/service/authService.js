import { writeFile } from "../utils/file.js";
const userPath = "public/users.json";
import bcrypt from "bcrypt";
import authUtils from "../utils/authUtils.js";

const authService = {
  async createUser(name, mail, password) {
    const foundUser = authUtils.findUser(mail, name);
    console.log(foundUser);

    if (!foundUser) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = {
        id: authUtils.findId() + 1,
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
    const foundUser = authUtils.findUser(mail);

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
