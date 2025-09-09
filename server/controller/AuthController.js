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
          user: { id: user.id, name: user.name, mail: user.mail },
          token,
        });
      }
      return res.status(400).json({ error: "user exist" });
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  async login(req, res) {
    try {
      const { mail, password } = req.body;
      const user = await authService.compareUser(mail, password);
      if (user) {
        const token = generateToken(user.id.toString());
        res.json({
          user: { id: user.id, name: user.name, mail: user.mail },
          token,
        });
      }
      return res.status(400).json({ message: "mail or password not good" });
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

export default authController;
