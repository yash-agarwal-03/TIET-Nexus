import Feed from "../models/feed.model.js";
import { ALLOWED_FEED_TAGS } from "../constants.js";

export const createFeedService = async ({
  content,
  tag,
  userId,
  role,
  name
}) => {
  if (!content || !tag) {
    throw new Error("content and tag required");
  }

  if (!ALLOWED_FEED_TAGS.includes(tag.toUpperCase())) {
    throw new Error("invalid tag");
  }

  return await Feed.create({
    content,
    tag: tag.toUpperCase(),
    uploaderId: userId,
    uploaderRole: role,
    uploaderName: name
  });
};

export const getAllFeedsService = async (limit = 10, cursor = null) => {
  const query = cursor
    ? { createdAt: { $lt: new Date(cursor) } }
    : {};

  return await Feed.find(query)
    .sort({ createdAt: -1 })
    .limit(limit);
};


export const toggleLikeService = async (feedId, userId) => {
  const feed = await Feed.findById(feedId);
  if (!feed) throw new Error("Feed not found");

  const index = feed.likedBy.indexOf(userId);

  if (index === -1) {
    feed.likedBy.push(userId);
    feed.likes += 1;
  } else {
    feed.likedBy.splice(index, 1);
    feed.likes -= 1;
  }

  await feed.save();
  return feed.likes;
};

export const incrementShareService = async (feedId) => {
  const feed = await Feed.findByIdAndUpdate(
    feedId,
    { $inc: { shares: 1 } },
    { new: true }
  );

  if (!feed) throw new Error("Feed not found");
  return feed.shares;
};
export const deleteFeedService = async (feedId, user) => {
  const feed = await Feed.findById(feedId);
  if (!feed) throw new Error("Feed not found");

  // Thapar admin can delete anything
  if (user.role === "THAPAR_ADMIN") {
    await feed.deleteOne();
    return;
  }

  // Society admin can delete only their own feed
  if (
    user.role === "SOCIETY_ADMIN" &&
    feed.uploaderId.toString() === user.userId
  ) {
    await feed.deleteOne();
    return;
  }

  throw new Error("Forbidden");
};
