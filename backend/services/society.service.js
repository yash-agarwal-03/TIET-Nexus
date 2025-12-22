import mongoose from "mongoose";
import Society from "../models/society.model.js";

class SocietyService {
  async create(payload) {
    return Society.create(payload);
  }

  async getById(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw { status: 400, message: "Invalid ID" };
    }

    const society = await Society.findById(id)
      .populate("category", "name")
      .lean();

    if (!society) {
      throw { status: 404, message: "Society not found" };
    }

    return society;
  }

  async listByCategory(categoryId) {
    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      throw { status: 400, message: "Invalid categoryId" };
    }

    const societies = await Society.find({ category: categoryId })
      .select("name about stats.activeMembers")
      .lean();

    return societies.map((s) => ({
      _id: s._id,
      name: s.name,
      shortIntro: s.about.slice(0, 120),
      activeMembers: s.stats?.activeMembers ?? 0,
    }));
  }

  async update(id, payload) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw { status: 400, message: "Invalid ID" };
    }

    const updated = await Society.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    }).lean();

    if (!updated) {
      throw { status: 404, message: "Society not found" };
    }

    return updated;
  }
}

export default SocietyService;
