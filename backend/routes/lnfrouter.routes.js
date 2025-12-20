// routes/lnf.routes.js
import { Router } from "express";
import auth from "../middleware/auth.js";
import requireRole from "../middleware/role.js";
import {
  createLostTicket,
  getApprovedLostTickets,
  getMyApprovedTickets,
  getPendingTickets,
  approveTicket,
  deleteTicket,
} from "../controllers/lostTicket.controller.js";
import {
  createFoundItem,
  getFoundItems,
  deleteFoundItem,
} from "../controllers/foundItem.controller.js";

const router = Router();

/* STUDENT */
router.post("/lost-tickets", auth, requireRole(["STUDENT"]), createLostTicket);
router.get("/lost-tickets", auth, getApprovedLostTickets);
router.get("/lost-tickets/myTickets", auth, requireRole(["STUDENT"]), getMyApprovedTickets);
router.get("/found-items", auth,requireRole(["STUDENT", "LNF_ADMIN"]), getFoundItems);

/* LNF ADMIN */
router.get(
  "/admin/lost-tickets/pending",
  auth,
  requireRole(["LNF_ADMIN"]),
  getPendingTickets
);
router.patch(
  "/admin/lost-tickets/:id/approve",
  auth,
  requireRole(["LNF_ADMIN"]),
  approveTicket
);
router.delete(
  "/admin/lost-tickets/:id",
  auth,
  requireRole(["LNF_ADMIN"]),
  deleteTicket
);
router.post(
  "/admin/found-items",
  auth,
  requireRole(["LNF_ADMIN"]),
  createFoundItem
);
router.delete(
  "/admin/found-items/:id",
  auth,
  requireRole(["LNF_ADMIN"]),
  deleteFoundItem
);

export default router;
