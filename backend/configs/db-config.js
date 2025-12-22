import mongoose from "mongoose";
import logger from "../utils/logger.js";
const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    logger.error(`❌ MongoDB connection failed: ${error.message}`);
    process.exit(1); // stop the server if DB connection fails
  }
};

export default connectToDB;
