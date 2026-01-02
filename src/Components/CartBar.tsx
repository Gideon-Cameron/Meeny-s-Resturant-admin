import React from "react";
import { useCart } from "../context/CartContext";

const CartBar: React.FC = () => {
  const { items, total, openCart } = useCart();

  // Hide bar if nothing selected
  if (items.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* LEFT: ITEM COUNT */}
        <div className="text-sm font-medium text-gray-800">
          {items.length} item{items.length !== 1 ? "s" : ""} selected
        </div>

        {/* RIGHT: SUBMIT BUTTON */}
        <button
          onClick={() => {
            console.log("🧾 Review order clicked");
            openCart();
          }}
          className="rounded-lg bg-green-600 px-6 py-2 text-sm font-semibold text-white hover:bg-green-700 transition"
        >
          Review Order · £{total}
        </button>
      </div>
    </div>
  );
};

export default CartBar;
