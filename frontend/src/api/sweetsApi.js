import api from "./axios";

export const getSweets = () => api.get("/sweets/");

export const searchSweets = (params) =>
  api.get("/sweets/search", { params });

export const addSweet = (data) => api.post("/sweets/", data);
export const updateSweet = (id, data) => api.put(`/sweets/${id}`, data);
export const deleteSweet = (id) => api.delete(`/sweets/${id}`);
export const purchaseSweet = (id) =>
  api.post(`/inventory/${id}/purchase`);
export const restockSweet = (id, amount) =>
  api.post(`/inventory/${id}/restock?amount=${amount}`);