import express from "express"; 
import { getMe, loginUser, createUser } from "../controller/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/me", authMiddleware, getMe);
export default router;
