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
  
    toggleItem: (item: MenuItem) => void;
    isItemSelected: (id: string) => boolean;
  
    openCart: () => void;
    closeCart: () => void;
    clearCart: () => void;
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
  
    /* ---------- TOGGLE ITEM ---------- */
    const toggleItem = (item: MenuItem) => {
      setItems((prev) => {
        const exists = prev.some((i) => i.id === item.id);
  
        if (exists) {
          // Unselect
          return prev.filter((i) => i.id !== item.id);
        } else {
          // Select
          setIsOpen(true); // open cart when item added
          return [...prev, item];
        }
      });
    };
  
    /* ---------- CHECK IF SELECTED ---------- */
    const isItemSelected = (id: string) => {
      return items.some((item) => item.id === id);
    };
  
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
    };
  
    return (
      <CartContext.Provider
        value={{
          items,
          isOpen,
          total,
          toggleItem,
          isItemSelected,
          openCart,
          closeCart,
          clearCart,
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
  