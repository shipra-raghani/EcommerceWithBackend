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

export default generateToken;
