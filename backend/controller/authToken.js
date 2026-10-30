import jwt from "jsonwebtoken";
import "dotenv/config";

const generateToken = (userId, role) => {
  return jwt.sign(
    {
      id: userId,
      role: role,
    },
    process.env.JWT_SECRET || "dhcbbceuhiwjzwwnxwviqe83ygd38xnk",
    {
      expiresIn: "7d",
    }
  );
};
export default generateToken;
