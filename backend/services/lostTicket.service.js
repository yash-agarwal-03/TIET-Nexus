import LostTicket from "../models/lostTicket.model.js";

export const createLostTicket = async ({ description, location, userId }) => {
  return LostTicket.create({
    description,
    location,
    uploadedBy: userId,
  });
};

export const getApprovedLostTickets = async ({ limit = 12, cursor }) => {
  const query = {
    status: "APPROVED",
    ...(cursor && { createdAt: { $lt: cursor } }),
  };

  const tickets = await LostTicket.find(query)
    .sort({ createdAt: -1 })
    .limit(limit + 1);

  const hasNext = tickets.length > limit;
  if (hasNext) tickets.pop();

  return {
    tickets,
    nextCursor: hasNext ? tickets[tickets.length - 1].createdAt : null,
  };
};

export const getMyApprovedTickets = async ({ userId }) => {
  return LostTicket.find({
    uploadedBy: userId,
    status: "APPROVED",
  }).sort({ createdAt: -1 });
};

export const getPendingTickets = async () => {
  return LostTicket.find({ status: "PENDING" }).sort({ createdAt: 1 });
};

export const approveTicket = async ({ ticketId }) => {
  const ticket = await LostTicket.findById(ticketId);
  if (!ticket) throw new Error("Ticket not found");

  ticket.status = "APPROVED";
  return ticket.save();
};

export const deleteTicket = async ({ ticketId }) => {
  const deleted = await LostTicket.findByIdAndDelete(ticketId);
  if (!deleted) throw new Error("Ticket not found");
  return deleted;
};
