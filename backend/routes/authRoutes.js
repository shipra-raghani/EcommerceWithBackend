import express from "express";
import createUser from "../controller/registerController.js";
import loginUser from "../controller/loginController.js";
import getMe from "../controller/authController.js";
import auth from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/me", auth, getMe);
export default router;
