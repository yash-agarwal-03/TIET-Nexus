const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/api/societies`;

export const getSocietyById = async (id, token) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Failed to fetch society");
  return res.json();
};

export const patchSociety = async (id, payload, token) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to update society");
  return res.json();
};
