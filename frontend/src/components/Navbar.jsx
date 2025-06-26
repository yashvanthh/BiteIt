import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext'; 
import logo from '../assets/logo1.jpg';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const { isLoggedIn, logout } = useAuth(); 

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const handleLogout = () => {
    logout();                      
    clearCart();                  
    localStorage.removeItem('loggedInUser'); 
    navigate('/login');      
  };

  return (
    <nav className="relative flex items-center justify-between px-6 py-4 shadow-md h-20 bg-white text-black dark:bg-[#111827] dark:text-white">

      {/* Logo */}
      <div className="flex items-center gap-2 z-10">
        <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
        <span className="text-2xl font-bold ml-2">Bitelt</span>
      </div>

      {/* Center Navigation */}
      <ul className=" hidden md:flex absolute left-1/2 transform -translate-x-1/2 md:flex gap-[2rem] font-medium text-lg">
        <li><Link to="/" className="hover:text-orange-500 transition">Home</Link></li>
        <li><Link to="/menu" className="hover:text-orange-500 transition">Menu</Link></li>
        <li><Link to="/about" className="hover:text-orange-500 transition">About Us</Link></li>
        <li><Link to="/contact" className="hover:text-orange-500 transition">Contact Us</Link></li>
      </ul>
      

      {/* Right Side */}
      <div className="flex items-center gap-4 z-10">
        {/* Theme toggle */}
        <button onClick={toggleDarkMode} className="text-2xl hover:text-orange-500 transition" aria-label="Toggle Dark Mode">
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>

        {/* Login / Logout */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
            aria-label="Logout"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
            aria-label="Login or Signup"
          >
            Login / Signup
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
