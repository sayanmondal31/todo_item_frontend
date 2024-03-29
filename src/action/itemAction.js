import axios from "axios";

export const createItemAction = async (payload) => {
  console.log(payload, "item create payload");
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/Items`, payload);
  return response;
};

export const getItemsAction = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/Items`);
  return response;
};

export const updateItemAction = async (payload) => {
  const response = await axios.patch(
    `${import.meta.env.VITE_BASE_URL}/Items/${payload.id}`,
    payload.body
  );
  return response;
};

export const deleteItemAction = async (payload) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_BASE_URL}/Items/${payload.id}`
  );
  return response;
};
