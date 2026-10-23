import express from "express";
import { db } from "./config/db.js";
import "dotenv/config";
import cors from "cors";
import productRoutes from "./routes/productRoute.js";
import authRoutes from "./routes/authRoutes.js";
const app = express();
const port = 3001;
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
db();

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.listen(port, () => {
  console.log(`Ecommerce listening on port ${port}`);
});
