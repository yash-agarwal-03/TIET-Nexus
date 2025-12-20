import {
  createFeedService,
  getAllFeedsService,
  toggleLikeService,
  deleteFeedService ,
  incrementShareService
} from "../services/feeds.service.js";

export const createFeed = async (req, res, next) => {
  try {
    const feed = await createFeedService({
      content: req.body.content,
      tag: req.body.tag,
      userId: req.user.userId,
      role: req.user.role,
      name: req.user.name
    });
    res.status(201).json(feed);
  } catch (err) {
    next(err);
  }
};

export const getFeeds = async (req, res, next) => {
  try {
    const { limit = 10, cursor } = req.query;

    const feeds = await getAllFeedsService(
      parseInt(limit),
      cursor
    );

    const nextCursor =
      feeds.length > 0
        ? feeds[feeds.length - 1].createdAt
        : null;

    res.json({
      feeds,
      nextCursor
    });
  } catch (err) {
    next(err);
  }
};



export const toggleLike = async (req, res, next) => {
  try {
    const likes = await toggleLikeService(
      req.params.id,
      req.user.userId
    );
    res.json({ likes });
  } catch (err) {
    next(err);
  }
};

export const shareFeed = async (req, res, next) => {
  try {
    const shares = await incrementShareService(req.params.id);
    res.json({ shares });
  } catch (err) {
    next(err);
  }
};
export const deleteFeed = async (req, res, next) => {
  try {
    await deleteFeedService(req.params.id, req.user);
    res.json({ message: "Feed deleted" });
  } catch (err) {
    next(err);
  }
};