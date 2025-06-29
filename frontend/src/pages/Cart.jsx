import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    // Get user email from localStorage string 'loggedInUser'
    const email = localStorage.getItem("loggedInUser");
    setUserEmail(email);

    if (email) {
      const storedCart =
        JSON.parse(localStorage.getItem(`cart_${email}`)) || [];
      setCart(storedCart);
    }

    setDarkMode(localStorage.getItem("theme") === "dark");
  }, []);

  useEffect(() => {
    if (userEmail) {
      localStorage.setItem(`cart_${userEmail}`, JSON.stringify(cart));
    }
  }, [cart, userEmail]);

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handlePay = () => {
    if (cart.length === 0 || !userEmail) return;

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const newOrder = {
      id: Date.now(),
      user: userEmail,
      items: cart,
      total,
      status: "Pending",
      date: new Date().toISOString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    setCart([]);
    localStorage.removeItem(`cart_${userEmail}`);
    setShowSuccessModal(true);
  };

  if (!userEmail) {
    return (
      <p className="text-center mt-20 text-xl text-gray-700 dark:text-gray-300">
        Please log in to view your cart.
      </p>
    );
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const containerClasses = `p-6 max-w-3xl mx-auto min-h-[60vh] ${
    darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
  } rounded-lg shadow-md`;

  return (
    <div className={containerClasses}>
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className={`flex justify-between items-center mb-4 p-4 border rounded-lg ${
                darkMode ? "border-gray-700" : "border-gray-300"
              }`}
            >
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p>
                  ₹{item.price} x {item.quantity}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className={`px-3 py-1 rounded ${
                    darkMode
                      ? "bg-gray-700 text-white hover:bg-gray-600"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  −
                </button>
                <span className="w-6 text-center">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className={`px-3 py-1 rounded ${
                    darkMode
                      ? "bg-gray-700 text-white hover:bg-gray-600"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  +
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="ml-4 px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h3 className="text-xl font-bold mt-8 text-right">Total: ₹{total}</h3>
          <button
            onClick={handlePay}
            className="mt-6 w-full py-3 rounded bg-green-600 text-white font-semibold hover:bg-green-700"
          >
            Place Order
          </button>
        </>
      )}

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg text-center w-80">
            <h2 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-4">
              Order Placed Successfully!
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Your order has been saved and is pending admin confirmation.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
