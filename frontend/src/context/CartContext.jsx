import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const [cart, setCart] = useState([]);
  const [userEmail, setUserEmail] = useState(null);

  // ✅ Load cart from localStorage when user logs in
  useEffect(() => {
    const email = localStorage.getItem('loggedInUser'); // was JSON.parse before (incorrect)
    if (email) {
      setUserEmail(email);
      const savedCart = localStorage.getItem(`cart_${email}`);
      setCart(savedCart ? JSON.parse(savedCart) : []);
    } else {
      setCart([]);
      setUserEmail(null);
    }
  }, [isLoggedIn]);

  // ✅ Save cart to localStorage when cart or user changes
  useEffect(() => {
    if (userEmail) {
      localStorage.setItem(`cart_${userEmail}`, JSON.stringify(cart));
    }
  }, [cart, userEmail]);

  // ✅ Add item to cart (increment quantity if already exists)
  const addToCart = (item) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // ✅ Get total item count
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Optional: Remove item from cart
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // Optional: Clear the cart
  const clearCart = () => {
    setCart([]);
    if (userEmail) {
      localStorage.removeItem(`cart_${userEmail}`);
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, clearCart, cartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};
