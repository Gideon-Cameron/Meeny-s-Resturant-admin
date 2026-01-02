import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useMemo,
  } from "react";
  import { MenuItem } from "../data/menu";
  
  /* ======================
     TYPES
  ====================== */
  
  interface CartContextType {
    items: MenuItem[];
    isOpen: boolean;
    total: number;
  
    addItem: (item: MenuItem) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
  
    isItemSelected: (id: string) => boolean;
    getItemCount: (id: string) => number;
  
    openCart: () => void;
    closeCart: () => void;
  }
  
  /* ======================
     CONTEXT
  ====================== */
  
  const CartContext = createContext<CartContextType | undefined>(
    undefined
  );
  
  /* ======================
     PROVIDER
  ====================== */
  
  export const CartProvider = ({
    children,
  }: {
    children: ReactNode;
  }) => {
    const [items, setItems] = useState<MenuItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);
  
    /* ---------- ADD ITEM ---------- */
    const addItem = (item: MenuItem) => {
      setItems((prev) => [...prev, item]);
  
      console.log("➕ Added item:", item);
    };
  
    /* ---------- REMOVE ONE ITEM ---------- */
    const removeItem = (id: string) => {
      setItems((prev) => {
        const index = prev.findIndex((i) => i.id === id);
        if (index === -1) return prev;
  
        const copy = [...prev];
        copy.splice(index, 1);
        return copy;
      });
  
      console.log("➖ Removed one item:", id);
    };
  
    /* ---------- HELPERS ---------- */
    const isItemSelected = (id: string) =>
      items.some((item) => item.id === id);
  
    const getItemCount = (id: string) =>
      items.filter((item) => item.id === id).length;
  
    /* ---------- TOTAL ---------- */
    const total = useMemo(
      () => items.reduce((sum, item) => sum + item.price, 0),
      [items]
    );
  
    /* ---------- CART VISIBILITY ---------- */
    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);
  
    /* ---------- CLEAR ---------- */
    const clearCart = () => {
      setItems([]);
      setIsOpen(false);
      console.log("🧹 Cart cleared");
    };
  
    return (
      <CartContext.Provider
        value={{
          items,
          isOpen,
          total,
          addItem,
          removeItem,
          clearCart,
          isItemSelected,
          getItemCount,
          openCart,
          closeCart,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };
  
  /* ======================
     HOOK
  ====================== */
  
  export const useCart = () => {
    const context = useContext(CartContext);
  
    if (!context) {
      throw new Error(
        "useCart must be used within a CartProvider"
      );
    }
  
    return context;
  };
  