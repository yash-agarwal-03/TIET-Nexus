import LostTicket from "../models/lostTicket.model.js";
import logger from "./logger.js";

const TEN_DAYS_MS = 10 * 24 * 60 * 60 * 1000;

const cleanupPendingLostTickets = async () => {
  try {
    const cutoffDate = new Date(Date.now() - TEN_DAYS_MS);

    const result = await LostTicket.deleteMany({
      status: "PENDING",
      createdAt: { $lte: cutoffDate },
    });

    if (result.deletedCount > 0) {
      logger.info(
        `LNF Cleanup: deleted ${result.deletedCount} pending lost tickets older than 10 days`
      );
    }
  } catch (err) {
    logger.error("LNF Cleanup failed", err);
  }
};

export default cleanupPendingLostTickets;
