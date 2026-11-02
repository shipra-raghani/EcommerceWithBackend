import express from "express";
import { db } from "./config/db.js";
import "dotenv/config";
import cors from "cors";
import productRoutes from "./routes/productRoute.js";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
const app = express();
const port = 3001;
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
db();

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.listen(port, () => {
  console.log(`Ecommerce listening on port ${port}`);
});
