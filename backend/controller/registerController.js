import User from "../model/userModel.js";
import bcrypt from "bcryptjs";

export default async function createUser(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({ message: "Name, Email, Password are required" });
    }
    if (password.length < 6) {
      res.status(400).json({ message: "Password must be of 6 charaxters" });
    }

    //To checck the existing user
    const existingUser = User.findOne({ email });

    if (existingUser) {
      res.status(409).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: "user",
    });
    const savedUser = await user.save();
    console.log("object");

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: savedUser,
    });
  } catch (error) {
    // Handle duplicate email errors
    // if (error.code === 11000) {
    //   return res.status(409).json({
    //     message: "Email already registered",
    //   });
    // }

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
