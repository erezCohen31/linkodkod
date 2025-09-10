import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import postUtils from "../utils/postUtils.js";

dotenv.config();

const SECRET = process.env.JWT_SECRET || "secretKey";

//middlware to verify if token exist and good
export function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("Token verification failed:", err.message);

    return res.status(401).json({ error: "Invalid or expired token." });
  }
}

//middleware to verify the id of the user if is to him
export function verifyId(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized. No user data." });
  }
  if (req.user.id !== req.params.userId) {
    return res.status(403).json({ error: "Access forbidden: Admins only." });
  }
  next();
}

//middleware to verify is the user id and the user id of the post are same
export function verifyPostId(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized. No user data." });
  }
  if (req.user.id !== postUtils.findPostByid(req.params.postId)) {
    return res.status(403).json({ error: "Access forbidden: Admins only." });
  }
  next();
}
