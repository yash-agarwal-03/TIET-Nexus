import express from "express";
import auth from "../middleware/auth.js";
import requireRole from "../middleware/role.js";
import validateRequest from "../middleware/validateRequest.js";
import { createSocietySchema } from "../validators/societyDetails.validator.js";
import * as controller from "../controllers/society.controller.js";

const router = express.Router();

// Create — ONLY THAPAR_ADMIN
router.post(
  "/",
  auth,
  requireRole(["THAPAR_ADMIN"]),
  validateRequest(createSocietySchema),
  controller.createSociety
);

// Explore page
router.get("/by-category", controller.getSocietiesByCategory);

// Society modal
router.get("/:id", controller.getSocietyById);

// Update — ONLY EXEC MEMBERS
router.patch("/:id", auth, controller.updateSociety);

export default router;
