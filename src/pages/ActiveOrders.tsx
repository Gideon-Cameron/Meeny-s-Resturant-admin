import React, { useEffect, useState } from "react";
import {
  getOrdersByStatus,
  markOrderCompleted,
  deleteOldOrders,
} from "../firebase/orders";
import OrderCard from "../Components/OrderCard";

const ActiveOrders: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);

      // 🧹 Delete orders older than 48 hours
      await deleteOldOrders();

      const data = await getOrdersByStatus("active");
      setOrders(data);
      setLoading(false);
    };

    fetchOrders();
  }, []);

  const handleComplete = async (orderId: string) => {
    await markOrderCompleted(orderId);
    setOrders((prev) => prev.filter((order) => order.id !== orderId));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Active Orders</h1>

      {loading ? (
        <div className="text-gray-500">Loading orders…</div>
      ) : orders.length === 0 ? (
        <div className="text-gray-500">No active orders.</div>
      ) : (
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
            items-start
          "
        >
          {orders.map((order) => (
            <OrderCard
              key={order.id}
              {...order}
              onComplete={() => handleComplete(order.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ActiveOrders;
