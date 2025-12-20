import FoundItem from "../models/foundItem.model.js";

export const createFoundItem = async ({ description, location, userId }) => {
  return FoundItem.create({
    description,
    location,
    uploadedBy: userId,
  });
};

export const getFoundItems = async ({ limit = 12, cursor }) => {
  const query = cursor ? { createdAt: { $lt: cursor } } : {};

  const items = await FoundItem.find(query)
    .sort({ createdAt: -1 })
    .limit(limit + 1);

  const hasNext = items.length > limit;
  if (hasNext) items.pop();

  return {
    items,
    nextCursor: hasNext ? items[items.length - 1].createdAt : null,
  };
};

export const deleteFoundItem = async ({ itemId }) => {
  const deleted = await FoundItem.findByIdAndDelete(itemId);
  if (!deleted) throw new Error("Item not found");
  return deleted;
};
