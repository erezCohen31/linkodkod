import { generateToken } from "../utils/generateToken";
import authService from "../service/authService.js";

const authController = {
  async signup(req, res) {
    try {
      const { name, email, password } = req.body;
      const user = authService.createUser(name, email, password);
      const token = generateToken(user._id.toString());
      res.json({
        user: { name: user.name, email: user.email },
        token,
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = authService.compareUser(email, password);
      const token = generateToken(user.name.toString());
      res.json({
        user: { name: user.name, email: user.email },
        token,
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};

export default authController;
