import User from "../model/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = (userId, role) => {
  return jwt.sign(
    {
      id: userId,
      role: role,
    },
    JWT_SECRET || "dhcbbceuhiwjzwwnxwviqe83ygd38xnk",
    {
      expiresIn: "7d",
    }
  );
};

//Register
export async function createUser(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(422)
        .json({ message: "Name, Email, Password are required" });
    }
    if (password.length < 6) {
      return res
        .status(422)
        .json({ message: "Password must be of 6 characters" });
    }

    //To checck the existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: "user",
    });
    const savedUser = await user.save();

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: savedUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

//Login
export async function loginUser(req, res) {
  console.log("LOGIN BODY:", req.body);

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Enter email and password" });
    }

    //Finding user
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res
        .status(400)
        .json({ message: "User doesn't exists or Invalid Email" });
    }

    const isPassword = await bcrypt.compare(password, user.password);

    if (!isPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = generateToken(user._id, user.role);
    return res
      .cookie("auth_token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 3600000,
      })
      .status(200)
      .json({
        message: "Login Successfull",
        success: true,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

//GetMe
export async function getMe(req, res) {
  try {
    res
      .status(200)
      .json({ message: "User Logged in", success: true, user: req.user });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
}
