import mongoose from "mongoose";

const lostTicketSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["PENDING", "APPROVED"],
      default: "PENDING",
      index: true,
    },

    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
  },
  {
    timestamps: true, // gives createdAt & updatedAt
    versionKey: false,
  }
);

/**
 * Indexes for performance
 * - status + createdAt → pending cleanup & listing
 * - uploadedBy → "My Tickets"
 */
lostTicketSchema.index({ status: 1, createdAt: 1 });

export default mongoose.model("LostTicket", lostTicketSchema);
