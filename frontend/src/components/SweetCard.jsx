import { purchaseSweet, deleteSweet, restockSweet } from "../api/sweetsApi";

export default function SweetCard({ sweet, refresh, isAdmin }) {
  return (
    <div className="card">
      <h3>{sweet.name}</h3>
      <p>{sweet.category}</p>
      <p>₹ {sweet.price}</p>
      <p>Stock: {sweet.quantity}</p>

      <button
        disabled={sweet.quantity === 0}
        onClick={() => purchaseSweet(sweet.id).then(refresh)}
      >
        {sweet.quantity === 0 ? "Out of Stock" : "Purchase"}
      </button>

      {isAdmin && (
        <>
          <button onClick={() => restockSweet(sweet.id, 10).then(refresh)}>
            Restock +10
          </button>
          <button onClick={() => deleteSweet(sweet.id).then(refresh)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}