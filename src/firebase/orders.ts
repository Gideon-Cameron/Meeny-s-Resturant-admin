import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  query,
  where,
  orderBy,
  updateDoc,
  deleteDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";
import { MenuItem } from "../data/menu";

/* ======================
   TYPES
====================== */

export type OrderType = "pickup" | "delivery";
export type OrderStatus = "active" | "completed";

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
   CREATE ORDER (CUSTOMER)
====================== */

export const createOrder = async (
  payload: CreateOrderPayload
) => {
  console.log("✅ Using correct createOrder runtime");

  // Normalize items map → array
  const normalizedItems = Object.values(payload.items).map(
    ({ item, qty }) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: qty,
      lineTotal: item.price * qty,
      type: item.type,
    })
  );

  const orderDoc = {
    type: payload.type,

    items: normalizedItems,

    pricing: {
      subtotal: payload.subtotal,
      deliveryFee: payload.deliveryFee,
      total: payload.total,
    },

    delivery:
      payload.type === "delivery"
        ? { address: payload.address }
        : null,

    status: "active" as OrderStatus,

    createdAt: serverTimestamp(),
    completedAt: null,

    // TTL reference (used by admin cleanup)
    expiresAt: new Date(Date.now() + 48 * 60 * 60 * 1000),

    source: "web",
  };

  const docRef = await addDoc(ordersRef, orderDoc);

  console.log("📦 Order saved to Firestore:", docRef.id);

  return docRef.id;
};

/* ======================
   ADMIN: GET ORDERS
====================== */

export const getOrdersByStatus = async (
  status: OrderStatus
) => {
  const q = query(
    ordersRef,
    where("status", "==", status),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

/* ======================
   ADMIN: MARK COMPLETED
====================== */

export const markOrderCompleted = async (
  orderId: string
) => {
  const orderRef = doc(db, "orders", orderId);

  await updateDoc(orderRef, {
    status: "completed",
    completedAt: Timestamp.now(),
  });
};

/* ======================
   ADMIN: DELETE OLD ORDERS
   (Runs when admin site loads)
====================== */

export const deleteOldOrders = async () => {
  const now = Date.now();
  const twoDaysAgo = now - 48 * 60 * 60 * 1000;

  const snapshot = await getDocs(ordersRef);

  const deletions: Promise<void>[] = [];

  snapshot.forEach((docSnap) => {
    const data = docSnap.data();
    const createdAt: Timestamp | undefined = data.createdAt;

    if (!createdAt) return;

    if (createdAt.toMillis() < twoDaysAgo) {
      deletions.push(deleteDoc(doc(db, "orders", docSnap.id)));
    }
  });

  if (deletions.length > 0) {
    await Promise.all(deletions);
    console.log(`🧹 Deleted ${deletions.length} old orders`);
  }
};
