import jwt from "jsonwebtoken";
import "dotenv/config";

export default function auth(req, res, next) {
  try {
    const token = req.cookies.auth_token;
    if (!token) {
      return res.status(401).json({ message: "No Token provided" });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token", success: false });
  }
}
