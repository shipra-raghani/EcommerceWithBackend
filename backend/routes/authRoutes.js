import express from "express";
import createUser from "../controller/registerController.js";
import loginUser from "../controller/loginController.js";

const router = express.Router();
router.post("/register", createUser);
router.post("/login", loginUser);
export default router;
