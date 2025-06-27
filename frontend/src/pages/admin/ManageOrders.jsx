import { useState, useEffect } from "react";

export default function ManageOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const sampleOrders = [
      { id: "ORD123", user: "Raj", total: 499, status: "pending" },
      { id: "ORD124", user: "Priya", total: 299, status: "delivered" },
    ];
    setOrders(sampleOrders);
  }, []);

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900">
      <h1 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-6">
        Manage Orders
      </h1>

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <thead className="bg-orange-100 dark:bg-gray-700 text-left text-sm text-gray-700 dark:text-white uppercase">
            <tr>
              <th className="p-4">Order ID</th>
              <th className="p-4">User</th>
              <th className="p-4">Total</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={i} className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="p-4 text-gray-800 dark:text-white">{order.id}</td>
                <td className="p-4 text-gray-800 dark:text-white">{order.user}</td>
                <td className="p-4 text-gray-800 dark:text-white">₹{order.total}</td>
                <td className="p-4 capitalize">
                  <span
                    className={`px-3 py-1 text-sm font-semibold rounded-full ${
                      order.status === "delivered"
                        ? "bg-green-100 dark:bg-green-700 text-green-800 dark:text-white"
                        : order.status === "cancelled"
                        ? "bg-red-100 dark:bg-red-700 text-red-800 dark:text-white"
                        : "bg-yellow-100 dark:bg-yellow-700 text-yellow-800 dark:text-white"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
