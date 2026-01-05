import React, { useEffect, useState } from "react";
import { getOrdersByStatus, markOrderCompleted } from "../firebase/orders";
import OrderCard from "../Components/OrderCard"; // ⬅ make sure casing matches your file system

const ActiveOrders: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch active orders on mount
  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      const data = await getOrdersByStatus("active");
      setOrders(data);
      setLoading(false);
    };

    fetchOrders();
  }, []);

  // Handle completing an order
  const handleComplete = async (orderId: string) => {
    await markOrderCompleted(orderId);

    // Remove the order from local state
    setOrders((prev) => prev.filter((order) => order.id !== orderId));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Active Orders</h1>

      {loading ? (
        <div className="text-gray-500">Loading orders…</div>
      ) : orders.length === 0 ? (
        <div className="text-gray-500">No active orders.</div>
      ) : (
        <div className="flex flex-wrap gap-4 justify-center">
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
