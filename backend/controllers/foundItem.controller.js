import * as foundItemService from "../services/foundItem.service.js";

export const createFoundItem = async (req, res, next) => {
  try {
    const { description, location } = req.body;
    const item = await foundItemService.createFoundItem({
      description,
      location,
      userId: req.user.userId,
    });
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};

export const getFoundItems = async (req, res, next) => {
  try {
    const { limit, cursor } = req.query;
    const data = await foundItemService.getFoundItems({
      limit: Number(limit),
      cursor,
    });
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const deleteFoundItem = async (req, res, next) => {
  try {
    await foundItemService.deleteFoundItem({
      itemId: req.params.id,
    });
    res.json({ message: "Found item deleted successfully" });
  } catch (err) {
    next(err);
  }
};
