import express from "express";
import createProduct from "../controller/productController.js";
import upload from "../middlewares/uploadMiddleware.js";

const router = express.Router();
router.route("/addProduct").post(upload.single("image"), createProduct);

export default router;
