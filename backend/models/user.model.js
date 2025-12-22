import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    name: {
      type: String,
      required: true,
      trim: true
    },

    roles: {
      type: [String],
      default: ["STUDENT"] // everyone is at least a student
    },

    // only present if user is a SOCIETY_ADMIN
    societyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Society",
      default: null
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
