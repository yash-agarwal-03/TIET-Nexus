export async function googleLogin(credential, requestedRole) {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/auth/google`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ credential, requestedRole }),
    }
  );

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Login failed");
  return data;
}
