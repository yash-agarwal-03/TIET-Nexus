import logger from "../utils/logger.js";

/**
 * Usage:
 * requireRole(["THAPAR_ADMIN", "SOCIETY_ADMIN"])
 */
const requireRole = (allowedRoles = []) => {
  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      logger.error("Role middleware: user not attached to request");
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!allowedRoles.includes(req.user.role)) {
      logger.warn(
        `Forbidden: ${req.user.email} (${req.user.role}) tried ${req.originalUrl}`
      );
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
  };
};

export default requireRole;
