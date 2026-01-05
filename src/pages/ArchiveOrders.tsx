import React, { useEffect, useState } from "react";
import { getOrdersByStatus } from "../firebase/orders";
import OrderCard from "../Components/OrderCard";

const ArchiveOrders: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch completed orders on mount
  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      const data = await getOrdersByStatus("completed");
      setOrders(data);
      setLoading(false);
    };

    fetchOrders();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Completed Orders</h1>

      {loading ? (
        <div className="text-gray-500">Loading orders…</div>
      ) : orders.length === 0 ? (
        <div className="text-gray-500">No completed orders.</div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <OrderCard key={order.id} {...order} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ArchiveOrders;
