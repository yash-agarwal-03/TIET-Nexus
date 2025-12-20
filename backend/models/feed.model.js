import mongoose from "mongoose";

const feedSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      trim: true,
    },

    tag: {
      type: String,
      required: true,
      uppercase: true,
    },

    uploaderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    uploaderRole: {
      type: String,
      enum: ["THAPAR_ADMIN", "SOCIETY_ADMIN"],
      required: true,
    },

    uploaderName: {
      type: String,
      required: true,
    },

    likes: {
      type: Number,
      default: 0,
    },

    likedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    shares: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
feedSchema.index({ createdAt: -1 });

export default mongoose.model("Feed", feedSchema);
