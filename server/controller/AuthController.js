import { generateToken } from "../utils/generateToken.js";
import authService from "../service/authService.js";

const authController = {
  async signup(req, res) {
    try {
      const { name, mail, password } = req.body;
      const user = await authService.createUser(name, mail, password);
      if (user) {
        const token = generateToken(user.id.toString());
        console.log(token);
        res.json({
          user: { id: user.id, name: user.name, email: user.email },
          token,
        });
      }
      return res.status(400).json({ error: "user exist" });
    } catch (err) {}
  },
  async login(req, res) {
    try {
      const { mail, password } = req.body;
      const user = await authService.compareUser(mail, password);
      if (user) {
        const token = generateToken(user.id.toString());
        res.json({
          user: { id: user.id, name: user.name, email: user.email },
          token,
        });
      }
      return res.status(400).json({ error: "mail or password not good" });
    } catch (err) {}
  },
};

export default authController;

console.log(await authController.signup("ed", "ed", "ed"));
console.log(await authController.login("ed", "ed"));
