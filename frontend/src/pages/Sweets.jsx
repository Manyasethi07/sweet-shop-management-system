import { useEffect, useState } from "react";
import { getSweets } from "../api/sweetsApi";
import SweetCard from "../components/SweetCard";

export default function Sweets() {
  const [sweets, setSweets] = useState([]);

  useEffect(() => {
    getSweets().then(res => setSweets(res.data));
  }, []);

  return (
    <div>
      <h2>Sweets</h2>
      {sweets.map(s => <SweetCard key={s.id} sweet={s} />)}
    </div>
  );
}