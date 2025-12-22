import mongoose from "mongoose";

const executiveMemberSchema = new mongoose.Schema(
  {
  name: { type: String, required: true },
  role: { type: String, required: true },
  email: { type: String, required: true }
},
  { _id: false }
);

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: String, required: true },
    location: { type: String },
  },
  { _id: false }
);

const societySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SocietyCategory",
      required: true,
      index: true,
    },

    logo: { type: String, required: true },
    about: { type: String, required: true },

    stats: {
      activeMembers: { type: Number, default: 0 },
      establishedYear: { type: Number },
      location: { type: String },
    },

    contact: {
      email: { type: String },
      phone: { type: String },
      website: { type: String },
    },

    // 🔐 ONLY editors
    executiveTeam: {
      type: [executiveMemberSchema],
      validate: [
        (v) => Array.isArray(v) && v.length > 0,
        "At least one executive member is required",
      ],
    },

    ourActivities: [{ type: String }],
    recentAchievements: [{ type: String }],
    upcomingEvents: [eventSchema],

    socials: {
      instagram: { type: String },
      linkedin: { type: String },
      twitter: { type: String },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Society", societySchema);
