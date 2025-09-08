import express from "express";
import dotenv from "dotenv";
import PostRoutes from "./routes/PostRoute.js";
import path from "path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import cors from "cors";

dotenv.config();
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/api/post", PostRoutes);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
