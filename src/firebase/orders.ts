import {
    collection,
    addDoc,
    serverTimestamp,
  } from "firebase/firestore";
  import { db } from "./firebase";
  import { MenuItem } from "../data/menu";
  
  /* ======================
     TYPES
  ====================== */
  
  export type OrderType = "pickup" | "delivery";
  
  export interface OrderItem {
    item: MenuItem;
    qty: number;
  }
  
  export interface CreateOrderPayload {
    type: OrderType;
    items: Record<string, OrderItem>;
    subtotal: number;
    deliveryFee: number;
    total: number;
    address: string | null;
  }
  
  /* ======================
     FIRESTORE COLLECTION
  ====================== */
  
  const ordersRef = collection(db, "orders");
  
  /* ======================
     CREATE ORDER
  ====================== */
  
  export const createOrder = async (
    payload: CreateOrderPayload
  ) => {
    const orderDoc = {
      type: payload.type,
      items: payload.items,
      pricing: {
        subtotal: payload.subtotal,
        deliveryFee: payload.deliveryFee,
        total: payload.total,
      },
      address: payload.address,
  
      status: "active", // active | completed
      createdAt: serverTimestamp(),
      completedAt: null,
  
      // Useful later for analytics / filtering
      source: "web",
    };
  
    const docRef = await addDoc(ordersRef, orderDoc);
  
    console.log("📦 Order saved to Firestore:", docRef.id);
  
    return docRef.id;
  };
  