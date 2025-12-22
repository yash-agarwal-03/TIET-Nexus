import jwt from "jsonwebtoken";
import logger from "../utils/logger.js";

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    logger.error("Auth middleware: missing or malformed Authorization header");
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // attach user info to request
    req.user = {
    userId: decoded.userId,
    email: decoded.email,
    name: decoded.name,   // ← THIS WAS MISSING
    role: decoded.role
    };

    next();
  } catch (err) {
    logger.error("Auth middleware: invalid or expired token");
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default auth;
