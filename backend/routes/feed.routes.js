import { Router } from "express";
import auth from "../middleware/auth.js";
import requireRole from "../middleware/role.js";
import {
  createFeed,
  getFeeds,
  toggleLike,
  shareFeed,
  deleteFeed
} from "../controllers/feeds.controller.js";

const router = Router();

router.post(
  "/",
  auth,
  requireRole(["THAPAR_ADMIN", "SOCIETY_ADMIN"]),
  createFeed
);

router.get("/", getFeeds);

router.post("/:id/like", auth, toggleLike);

router.post("/:id/share", auth, shareFeed);

router.delete(
  "/:id",
  auth,
  requireRole(["THAPAR_ADMIN", "SOCIETY_ADMIN"]),
  deleteFeed
);

export default router;
