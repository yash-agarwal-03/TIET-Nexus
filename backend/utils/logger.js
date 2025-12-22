/**
 * 📝 LOGGER SETUP (Daily rotation, structured folders, clean formatting)
 *
 * 1. Creates one log file per day: YYYY-MM-DD.log
 * 2. Auto-rotates at 12 AM IST.
 * 3. Writes:
 *    - All info-level and above logs → /logs/info-logs
 *    - Only errors → /logs/error-logs
 * 4. Console output stays colorized.
 */

import { createLogger, format, transports } from "winston";
import path from "path";
import fs from "fs";
import moment from "moment-timezone";

const { combine, printf, colorize } = format;

// Create timestamp in IST
const timestampIST = format((info) => {
  info.timestamp = moment().tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss");
  return info;
});

// Generate daily log filename (e.g. 2025-11-01.log)
function getLogFileName() {
  return `${moment().tz("Asia/Kolkata").format("YYYY-MM-DD")}.log`;
}

// Ensure required directories exist
const baseDir = path.join(process.cwd(), "logs");
const infoDir = path.join(baseDir, "info-logs");
const errorDir = path.join(baseDir, "error-logs");
[baseDir, infoDir, errorDir].forEach((dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
});

// Log format
const logFormat = printf(({ level, message, timestamp }) => {
  return `[IST ${timestamp}] [${level.toUpperCase()}]: ${message}`;
});

// Create transport instances
function createTransports() {
  const fileName = getLogFileName();
  return [
    new transports.Console({
      format: combine(colorize(), logFormat),
      level: "info",
    }),
    new transports.File({
      filename: path.join(infoDir, fileName),
      level: "info",
      format: combine(logFormat),
    }),
    new transports.File({
      filename: path.join(errorDir, fileName),
      level: "error",
      format: combine(logFormat),
    }),
  ];
}

// Rotate logs at 12AM IST daily
function scheduleDailyRotation(logger) {
  const now = moment().tz("Asia/Kolkata");
  const nextMidnight = now.clone().add(1, "day").startOf("day");
  const msUntilMidnight = nextMidnight.diff(now);

  setTimeout(() => {
    logger.clear();
    createTransports().forEach((t) => logger.add(t));
    scheduleDailyRotation(logger);
  }, msUntilMidnight);
}

// Create main logger
const logger = createLogger({
  level: "info",
  format: combine(timestampIST(), logFormat),
  transports: createTransports(),
});

scheduleDailyRotation(logger);

export default logger;
