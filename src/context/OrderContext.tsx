import React, { createContext, useContext, useState } from "react";

/* ======================
   TYPES
====================== */

export type OrderType = "delivery" | "collection" | null;

interface OrderState {
  orderType: OrderType;
  deliveryFee: number;
  address: string;
  notes: string;
}

interface OrderContextValue extends OrderState {
  setOrderType: (type: OrderType) => void;
  setAddress: (address: string) => void;
  setNotes: (notes: string) => void;
  resetOrder: () => void;
}

/* ======================
   CONTEXT
====================== */

const OrderContext = createContext<OrderContextValue | undefined>(undefined);

/* ======================
   PROVIDER
====================== */

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [orderType, setOrderType] = useState<OrderType>(null);
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  // Fixed for now, can be dynamic later
  const deliveryFee = orderType === "delivery" ? 3 : 0;

  const resetOrder = () => {
    setOrderType(null);
    setAddress("");
    setNotes("");
  };

  return (
    <OrderContext.Provider
      value={{
        orderType,
        deliveryFee,
        address,
        notes,
        setOrderType,
        setAddress,
        setNotes,
        resetOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

/* ======================
   HOOK
====================== */

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};
