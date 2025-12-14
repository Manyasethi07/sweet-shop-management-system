import { useEffect, useState } from "react";
import { getSweets, searchSweets } from "../api/sweetsApi";
import SweetCard from "../components/SweetCard";
import AdminPanel from "../components/AdminPanel";
import { useAuth } from "../auth/AuthContext";

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

export default function Dashboard() {
  const { token, role, logout } = useAuth();
  const [sweets, setSweets] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const loadSweets = async () => {
    const res = await getSweets();
    setSweets(res.data);
  };

  useEffect(() => {
    if (token) loadSweets();
  }, [token]);

  const handleSearch = async (sweetName = name) => {
    const res = await searchSweets({
      name: sweetName || undefined,
      category: category || undefined,
    });
    setSweets(res.data);
    setName(sweetName);
  };

  if (!token) return null;

  return (
    <div className="container">
      <header>
        <h2>Sweet Shop Dashboard</h2>
        <button onClick={logout}>Logout</button>
      </header>

      <div className="filters">
        <input
          placeholder="Search by name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button onClick={() => handleSearch()}>Search</button>
      </div>

      <div className="quick-search">
        {SWEET_OPTIONS.map((sweet) => (
          <button
            key={sweet}
            onClick={() => handleSearch(sweet)}
            className="quick-btn"
          >
            {sweet}
          </button>
        ))}
      </div>

      {role === "admin" && <AdminPanel refresh={loadSweets} />}

      <div className="grid">
        {sweets.map((s) => (
          <SweetCard
            key={s.id}
            sweet={s}
            refresh={loadSweets}
            isAdmin={role === "admin"}
          />
        ))}
      </div>
    </div>
  );
}