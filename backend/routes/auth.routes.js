import { Router } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import logger from "../utils/logger.js";
import { OAuth2Client } from "google-auth-library";

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const router = Router();

/**
 * POST /api/auth/login
 * Body: { email, name, role }
 */

router.post("/google", async (req, res) => {
  try {
    const { credential, requestedRole } = req.body;

    if (!credential || !requestedRole) {
      return res.status(400).json({ message: "Missing data" });
    }

    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const email = payload.email;
    const name = payload.name;

    if (!email.endsWith("@thapar.edu")) {
      return res.status(403).json({ message: "Only Thapar emails allowed" });
    }

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        email,
        name,
        roles: ["STUDENT"],
      });
    }

    if (requestedRole !== "STUDENT" && !user.roles.includes(requestedRole)) {
      return res.status(403).json({ message: "Role not authorized" });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        name: user.name,
        role: requestedRole,
      },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    return res.json({ token, role: requestedRole });
  } catch (err) {
    return res.status(401).json({ message: "Invalid Google token" });
  }
});

router.post("/login", async (req, res, next) => {
  try {

    const { email, name, role } = req.body;


    if (!email || !role) {
      logger.error("Auth login failed: email or role missing");
      return res.status(400).json({ message: "Email and role required" });
    }

    if (!email.endsWith("@thapar.edu")) {
      logger.error(`Auth login blocked: invalid domain ${email}`);
      return res.status(403).json({ message: "Only Thapar emails allowed" });
    }

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        email,
        name,
        roles: ["STUDENT"]
      });
      logger.info(`Auth: new user created ${email}`);
    }
    console.log("User roles from DB:", user.roles);
    if (role !== "STUDENT" && !user.roles.includes(role)) {
      logger.error(`Auth role denied: ${email} → ${role}`);
      return res.status(403).json({ message: "Role not authorized" });
    }

    const token = jwt.sign(
    {
        userId: user._id,
        email: user.email,
        name: user.name,
        role
    },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
    );

    logger.info(`Auth login success: ${email} as ${role}`);

    return res.json({ token, role });
  } catch (err) {
    logger.error(`Auth login error: ${err.message}`);
    next(err);
  }
});

export default router;
