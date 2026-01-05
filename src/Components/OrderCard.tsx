import React from "react";
import { Timestamp } from "firebase/firestore";

export interface OrderCardProps {
  id: string;
  type: "pickup" | "delivery";
  status: "active" | "completed";
  createdAt: Timestamp;
  pricing: {
    subtotal: number;
    deliveryFee: number;
    total: number;
  };
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    lineTotal: number;
    type: string;
  }[];
  delivery: { address: string } | null;
  onComplete?: () => void; // Optional: only passed for active orders
}

const OrderCard: React.FC<OrderCardProps> = ({
  id,
  type,
  status,
  createdAt,
  pricing,
  items,
  delivery,
  onComplete,
}) => {
  const date = createdAt.toDate().toLocaleString();

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm space-y-3">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          <span className="font-medium">{type.toUpperCase()}</span> •{" "}
          <span className="capitalize">{status}</span>
        </div>
        <div className="text-sm text-gray-400">{date}</div>
      </div>

      {/* Delivery address (if any) */}
      {delivery && (
        <div className="text-sm text-gray-700">
          <span className="font-medium">Address:</span> {delivery.address}
        </div>
      )}

      {/* Items */}
      <ul className="text-sm text-gray-800 space-y-1">
        {items.map((item) => (
          <li key={item.id} className="flex justify-between">
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>£{item.lineTotal}</span>
          </li>
        ))}
      </ul>

      {/* Total */}
      <div className="flex justify-between font-semibold text-gray-900 pt-2 border-t">
        <span>Total</span>
        <span>£{pricing.total}</span>
      </div>

      {/* Complete Button */}
      {status === "active" && onComplete && (
        <button
          onClick={onComplete}
          className="mt-2 w-full rounded bg-green-600 py-2 text-white font-semibold hover:bg-green-700 transition"
        >
          Mark as Completed
        </button>
      )}
    </div>
  );
};

export default OrderCard;
