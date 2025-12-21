const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/api`;

export const getSocietyCategories = async () => {
  const res = await fetch(`${BASE_URL}/society/categories`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  const data= await res.json(); // array
  console.log("get categories: ",data);
  return data;
}
export const getSocietiesByCategory = async (categoryId) => {
  const res = await fetch(
    `${BASE_URL}/society/by-category?categoryId=${categoryId}`
  );

  if (!res.ok) throw new Error("Failed to fetch societies");

  const data = await res.json();

  // backend may return { data: [...] } or [...]
  return data.data || data || [];
};
