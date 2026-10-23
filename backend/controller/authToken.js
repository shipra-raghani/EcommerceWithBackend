import jwt from "jsonwebtoken";
import User from "../model/userModel.js";
import "dotenv/config";

const generateToken = (userId, role) => {
  return jwt.sign(
    {
      id: userId,
      role: role,
    },
    process.env.JWT_SECRET,
    {
      expireIn: "7d",
    }
  );
};
export default generateToken;
