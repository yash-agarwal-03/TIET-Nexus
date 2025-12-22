import mongoose from "mongoose";

const societyCategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true },
  description: { type: String },
}, { timestamps: true });

export default mongoose.model("SocietyCategory", societyCategorySchema);
