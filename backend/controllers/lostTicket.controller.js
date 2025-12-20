import * as lostTicketService from "../services/lostTicket.service.js";

export const createLostTicket = async (req, res, next) => {
  try {
    const { description, location } = req.body;
    const ticket = await lostTicketService.createLostTicket({
      description,
      location,
      userId: req.user.userId,
    });
    res.status(201).json(ticket);
  } catch (err) {
    next(err);
  }
};

export const getApprovedLostTickets = async (req, res, next) => {
  try {
    const { limit, cursor } = req.query;
    const data = await lostTicketService.getApprovedLostTickets({
      limit: Number(limit),
      cursor,
    });
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const getMyApprovedTickets = async (req, res, next) => {
  try {
    const tickets = await lostTicketService.getMyApprovedTickets({
      userId: req.user.userId,
    });
    res.json(tickets);
  } catch (err) {
    next(err);
  }
};

export const getPendingTickets = async (req, res, next) => {
  try {
    const tickets = await lostTicketService.getPendingTickets();
    res.json(tickets);
  } catch (err) {
    next(err);
  }
};

export const approveTicket = async (req, res, next) => {
  try {
    const ticket = await lostTicketService.approveTicket({
      ticketId: req.params.id,
    });
    res.json(ticket);
  } catch (err) {
    next(err);
  }
};

export const deleteTicket = async (req, res, next) => {
  try {
    await lostTicketService.deleteTicket({
      ticketId: req.params.id,
    });
    res.json({ message: "Ticket deleted successfully" });
  } catch (err) {
    next(err);
  }
};
