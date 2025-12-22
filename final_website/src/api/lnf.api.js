const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/api/lnf`;

export const getApprovedLostTickets = async (token, limit = 20) => {
  const res = await fetch(
    `${BASE_URL}/lost-tickets?limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch lost tickets");
  return res.json();
}
export const getPendingLostTickets = async (token) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/lnf/admin/lost-tickets/pending?limit=10`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch pending tickets");
  const data = await res.json();   // ✅ AWAIT HERE
  console.log("PENDING API DATA:", data);
  return data;     
};

export const approveLostTicket = async (token, ticketId) => {
    console.log("approve api hit");
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/lnf/admin/lost-tickets/${ticketId}/approve`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) throw new Error("Approve failed");
  return res.json();
};


/* ======================================================
   FOUND ITEMS + DELETE ACTIONS
   ====================================================== */

/* ---------- src/api/lnf.api.js ---------- */

export const getFoundItems = async (token, limit = 20) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/lnf/found-items?limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch found items");
  return res.json(); // { items: [...] }
};

export const deleteFoundItem = async (token, itemId) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/lnf/admin/found-items/${itemId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) throw new Error("Delete found item failed");
  return res.json();
};

export const deleteLostTicket = async (token, ticketId) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/lnf/admin/lost-tickets/${ticketId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) throw new Error("Delete lost ticket failed");
  return res.json();
};

export const getMyTickets = async (token, limit = 20) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/lnf/lost-tickets/myTickets?limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch my tickets");
  
  const data = await res.json();
  console.log(data);
  return data; // { tickets: [...] }
};
export const createFoundItem = async (token, payload) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/lnf/admin/found-items`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) throw new Error("Failed to create found item");
  return res.json();
};
export const createLostTicket = async (token, payload) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/lnf/lost-tickets`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) throw new Error("Failed to create lost ticket");
  return res.json();
};