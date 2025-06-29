import React, { useEffect, useState } from "react";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [orderToDelete, setOrderToDelete] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("loggedInUser");
    setUserEmail(email);

    if (email) {
      const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
      const filteredOrders = allOrders.filter((order) => order.user === email);
      setOrders(filteredOrders);
    } else {
      setOrders([]);
    }
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp) return "—";
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const confirmDelete = (orderId) => {
    setOrderToDelete(orderId);
    setShowDeleteModal(true);
  };

  const handleDelete = () => {
    const updatedOrders = orders.filter((order) => order.id !== orderToDelete);
    const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const newAllOrders = allOrders.filter(
      (order) => order.id !== orderToDelete
    );
    localStorage.setItem("orders", JSON.stringify(newAllOrders));
    setOrders(updatedOrders);
    setShowDeleteModal(false);
  };

  if (!userEmail) {
    return (
      <p className="text-center mt-20 text-xl text-gray-700 dark:text-gray-300">
        Please log in to view your orders.
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-[#0F172A] p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        My Orders
      </h2>

      {orders.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">
          You haven't placed any orders yet.
        </p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white dark:bg-[#1E293B] rounded-lg shadow-lg p-5 border border-gray-300 dark:border-gray-700"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                  Order #{order.id}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === "Confirmed"
                      ? "bg-green-100 text-green-700"
                      : order.status === "Preparing"
                      ? "bg-yellow-100 text-yellow-800"
                      : order.status === "Delivered"
                      ? "bg-blue-100 text-blue-700"
                      : order.status === "Cancelled"
                      ? "bg-red-100 text-red-700"
                      : order.status === "Pending"
                      ? "bg-gray-300 text-gray-800 dark:bg-gray-600 dark:text-white"
                      : "bg-purple-100 text-purple-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Placed on: {formatDate(order.date)}
              </p>

              <ul className="text-sm text-gray-700 dark:text-gray-200 list-disc pl-5 mb-3">
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.name} x {item.quantity}
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center">
                <p className="font-medium text-gray-900 dark:text-white">
                  Total: ₹{order.total}
                </p>
                <button
                  onClick={() => confirmDelete(order.id)}
                  className="px-4 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-[90%] max-w-md text-center">
            <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">
              Confirm Deletion
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Are you sure you want to delete this order? This action cannot be
              undone.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
