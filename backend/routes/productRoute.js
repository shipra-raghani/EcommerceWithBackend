import express from "express";
import {
  createProduct,
  getAllProducts,
} from "../controller/productController.js";
import upload from "../middlewares/uploadMiddleware.js";

const router = express.Router();
router.route("/addProduct").post(upload.single("image"), createProduct);
router.get("/", getAllProducts);

export default router;
