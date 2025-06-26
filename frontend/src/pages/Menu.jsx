import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import menuItems from '../data/menuItems';

const Menu = () => {
  const [filter, setFilter] = useState('All');
  const { addToCart, cartItemCount } = useCart();
  const { isLoggedIn } = useAuth();
  const [addingId, setAddingId] = useState(null);

  const filteredItems =
    filter === 'All' ? menuItems : menuItems.filter(item => item.category === filter);

  const handleAddToCart = (item) => {
    setAddingId(item.id);
    addToCart(item);
    setTimeout(() => setAddingId(null), 500);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-4 py-10 transition-colors duration-300">
      {/* Cart Icon: only visible after login */}
      {isLoggedIn && (
        <div className="flex justify-end max-w-6xl mx-auto mb-6 px-4">
          <Link
            to="/cart"
            className="relative text-2xl hover:text-orange-500 transition"
            aria-label="View Cart"
          >
            <FaShoppingCart />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      )}

      {/* Page Title */}
      <h1 className="text-4xl text-center font-bold text-orange-500 mb-6">Our Menu</h1>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {['All', 'Veg', 'Non-Veg'].map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-full font-semibold transition
              ${filter === type
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-gray-300 dark:bg-gray-700 text-black dark:text-white hover:bg-indigo-500 hover:text-white'}
            `}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {filteredItems.map(item => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-t-xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
              }}
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold dark:text-white">{item.name}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-lg font-bold text-orange-500">₹{item.price}</span>
                <button
                  onClick={() => handleAddToCart(item)}
                  className={`px-4 py-1 rounded-full text-sm font-semibold transition
                    ${addingId === item.id
                      ? 'bg-green-600 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-500 text-white'}
                  `}
                  disabled={addingId === item.id}
                >
                  {addingId === item.id ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
