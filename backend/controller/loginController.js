import User from "../model/userModel.js";
import bcrypt from "bcryptjs";
import generateToken from "./authToken.js";

export default async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "Enter email and password" });
    }

    //Finding user
    const user = User.findOne({ email: email.toLowerCase() });

    if (!user) {
      res.status(400).json({ message: "User doesn't exists, Invalid details" });
    }

    const isPassword = await bcrypt.compare(password, user.password);

    if (!isPassword) {
      res.status(401).json({ message: "Invalid user password" });
    }
    const token = generateToken(user._id, user.role);
    res.status(200).json({
      message: "Login Successfull",
      success: true,
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
