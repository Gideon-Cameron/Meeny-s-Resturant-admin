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
  notification?: {
    phone?: string;
  };
  onComplete?: () => void;
}

const OrderCard: React.FC<OrderCardProps> = ({
  type,
  status,
  createdAt,
  pricing,
  items,
  delivery,
  notification,
  onComplete,
}) => {
  const date = createdAt.toDate().toLocaleString();

  return (
    <div
      className="
        w-full
        max-w-sm
        min-h-[360px]
        rounded-xl
        border
        border-gray-200
        bg-white
        p-4
        shadow-sm
        flex
        flex-col
      "
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-2">
        <div className="text-sm text-gray-600">
          <span className="font-medium">{type.toUpperCase()}</span> •{" "}
          <span className="capitalize">{status}</span>
        </div>
        <div className="text-xs text-gray-400">{date}</div>
      </div>

      {/* Delivery address */}
      {delivery && (
        <div className="text-sm text-gray-700 mb-2">
          <span className="font-medium">Address:</span> {delivery.address}
        </div>
      )}

      {/* Phone number (optional) */}
      {notification?.phone && (
        <div className="text-sm text-gray-700 mb-3">
          <span className="font-medium">Phone:</span>{" "}
          <a
            href={`tel:${notification.phone}`}
            className="text-green-600 hover:underline"
          >
            {notification.phone}
          </a>
        </div>
      )}

      {/* Items */}
      <ul className="text-sm text-gray-800 space-y-1 flex-1">
        {items.map((item) => (
          <li key={item.id} className="flex justify-between gap-2">
            <span className="truncate">
              {item.name} × {item.quantity}
            </span>
            <span className="shrink-0">£{item.lineTotal}</span>
          </li>
        ))}
      </ul>

      {/* Total */}
      <div className="flex justify-between font-semibold text-gray-900 pt-3 border-t mt-3">
        <span>Total</span>
        <span>£{pricing.total}</span>
      </div>

      {/* Complete Button */}
      {status === "active" && onComplete && (
        <button
          onClick={onComplete}
          className="mt-4 w-full rounded bg-green-600 py-2 text-white font-semibold hover:bg-green-700 transition"
        >
          Mark as Completed
        </button>
      )}
    </div>
  );
};

export default OrderCard;
