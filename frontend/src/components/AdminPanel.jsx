import { useState } from "react";
import { addSweet } from "../api/sweetsApi";

const SWEET_OPTIONS = [
  "Ladoo",
  "Gulab Jamun",
  "Rasgulla",
  "Jalebi",
  "Barfi",
  "Kaju Katli",
  "Peda",
  "Soan Papdi",
  "Halwa",
  "Modak"
];

export default function AdminPanel({ refresh }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addSweet({
      name,
      category,
      price: Number(price),
      quantity: Number(quantity),
    });

    setName("");
    setCategory("");
    setPrice("");
    setQuantity("");
    refresh();
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <h3>Add New Sweet</h3>

      <select value={name} onChange={(e) => setName(e.target.value)} required>
        <option value="">Select Sweet Name</option>
        {SWEET_OPTIONS.map((sweet) => (
          <option key={sweet} value={sweet}>
            {sweet}
          </option>
        ))}
      </select>

      <input
        placeholder="Category (e.g. Indian)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />

      <button type="submit">Add Sweet</button>
    </form>
  );
}