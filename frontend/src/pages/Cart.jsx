import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, setCart } = useCart();
  const [darkMode, setDarkMode] = useState(false);

  // Sync dark mode from localStorage
  useEffect(() => {
    setDarkMode(localStorage.getItem('theme') === 'dark');
  }, []);

  const handleRemove = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, delta) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePay = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert('Order placed successfully!');
    setCart([]); // Clear cart after successful order
  };

  // Base styles
  const containerClasses = `p-6 max-w-3xl mx-auto min-h-[60vh] ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} rounded-lg shadow-md`;
  const itemClasses = `flex justify-between items-center mb-4 p-4 border rounded-lg ${
    darkMode ? 'border-gray-700' : 'border-gray-300'
  }`;
  const buttonClasses = `px-3 py-1 rounded transition ${
    darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
  }`;
  const removeButtonClasses = `ml-4 px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700 transition`;
  const payButtonClasses = `mt-6 w-full py-3 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition`;

  return (
    <div className={containerClasses}>
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className={itemClasses}>
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p>
                  ₹{item.price} x {item.quantity}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className={buttonClasses}
                  aria-label={`Decrease quantity of ${item.name}`}
                >
                  −
                </button>
                <span className="w-6 text-center">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className={buttonClasses}
                  aria-label={`Increase quantity of ${item.name}`}
                >
                  +
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className={removeButtonClasses}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h3 className="text-xl font-bold mt-8 text-right">Total: ₹{total}</h3>
          <button
            onClick={handlePay}
            className={payButtonClasses}
            aria-label="Pay and place order"
            type="button"
          >
            Pay
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
