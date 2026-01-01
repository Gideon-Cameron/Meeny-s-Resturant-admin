import React from "react";
import { useCart } from "../context/CartContext";

const CartPopup: React.FC = () => {
  const { items, total, clearCart } = useCart();
  const [open, setOpen] = React.useState(true);

  // Do not render if cart is empty or popup closed
  if (items.length === 0 || !open) return null;

  // Debug logging
  console.log("🛒 Cart Popup Opened");
  console.log("Items in cart:", items);
  console.log("Total:", total);

  const handleClose = () => {
    console.log("❌ Cart popup closed");
    setOpen(false);
  };

  const handleClear = () => {
    console.log("🧹 Cart cleared");
    clearCart();
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center">
      {/* BACKDROP */}
      <div
        className="absolute inset-0"
        onClick={handleClose}
      />

      {/* POPUP */}
      <div className="relative w-full max-w-md rounded-t-2xl bg-white p-6 shadow-xl sm:rounded-2xl">
        {/* HEADER */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            Your Order
          </h2>

          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-800"
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {/* ITEMS */}
        <ul className="max-h-64 space-y-3 overflow-y-auto">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex justify-between border-b pb-2 text-gray-800"
            >
              <span>{item.name}</span>
              <span className="font-semibold">£{item.price}</span>
            </li>
          ))}
        </ul>

        {/* TOTAL */}
        <div className="mt-6 flex items-center justify-between text-lg font-bold">
          <span>Total</span>
          <span>£{total}</span>
        </div>

        {/* ACTIONS */}
        <div className="mt-6 space-y-3">
          <button
            className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white opacity-60"
            disabled
          >
            Checkout (next step)
          </button>

          <button
            onClick={handleClear}
            className="w-full text-sm font-medium text-red-600 hover:underline"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
