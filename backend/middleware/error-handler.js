// middleware/errorMiddleware.js
import logger from "../utils/logger.js";

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  logger.error(
    `${req.method} ${req.originalUrl} | ${statusCode} | ${err.message}`
  );

  res.status(statusCode).json({
    success: false,
    message: err.message || "Server Error",
  });
};
