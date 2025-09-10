import { writeFile } from "../utils/file.js";
const userPath = "public/users.json";
import bcrypt from "bcrypt";
import authUtils from "../utils/authUtils.js";

const authService = {
  //logic for create user if already exist, create him and write in the json
  async createUser(name, mail, password) {
    const foundUser = authUtils.findUser(mail, name);
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

  //logic for login verify the mail and password and send it
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
