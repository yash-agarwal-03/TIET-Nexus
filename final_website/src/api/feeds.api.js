const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/api/feeds`;

export const getAllFeeds = async () => {
  const res = await fetch(`${BASE_URL}`);
  if (!res.ok) throw new Error("Failed to fetch feeds");
  const data = await res.json();
  console.log("feeds: ",data);
  return data;
};

export const addFeed = async (token, payload) => {
  const res = await fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Failed to post feed");
  return res.json();
};

export const updateLikes = async (token, feedId) => {
  const res = await fetch(`${BASE_URL}/${feedId}/like`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Failed to update likes");
  return res.json();
};
export const deleteFeed = async (token, feedId) => {
  const res = await fetch(`${BASE_URL}/${feedId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Failed to delete feed");
  return res.json();
};