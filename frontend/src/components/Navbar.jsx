import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo4.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { clearCart } = useCart();
  const { user, isLoggedIn, isAdmin, logout } = useAuth();

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hasPendingOrders, setHasPendingOrders] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    if (!user) return;
    const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const userOrders = allOrders.filter((order) => order.user === user.email);
    const pending = userOrders.some((order) => order.status === "Pending");
    setHasPendingOrders(pending);
  }, [user]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const handleLogout = () => {
    logout();
    clearCart();
    setMenuOpen(false);
    setDropdownOpen(false);
    navigate("/");
  };

  const handleLinkClick = () => setMenuOpen(false);

  const isActive = (path) => location.pathname === path;
  const activeClass = "text-orange-500 underline underline-offset-4";

  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between px-6 py-4 h-20 bg-white dark:bg-[#111827] text-black dark:text-white shadow-md">
      {/* Left side: Hamburger icon (mobile) + Logo (desktop) + Bitelt */}
      <div className="flex items-center gap-4">
        {/* Hamburger icon visible only on mobile */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Logo (hidden on mobile) + Bitelt */}
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <img src={logo} alt="Logo" className="h-8 w-8 object-contain" />
          </div>
          <span className="text-2xl font-bold select-none">Bitelt</span>
        </div>
      </div>

      {/* Desktop nav menu */}
      <ul className="hidden md:flex gap-8 text-lg font-medium">
        <li>
          <Link
            to="/"
            onClick={handleLinkClick}
            className={isActive("/") ? activeClass : "hover:text-orange-500"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/menu"
            onClick={handleLinkClick}
            className={isActive("/menu") ? activeClass : "hover:text-orange-500"}
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={handleLinkClick}
            className={isActive("/about") ? activeClass : "hover:text-orange-500"}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className={isActive("/contact") ? activeClass : "hover:text-orange-500"}
          >
            Contact Us
          </Link>
        </li>

        {isAdmin && (
          <li>
            <Link
              to="/admin/dashboard"
              onClick={handleLinkClick}
              className={
                location.pathname.startsWith("/admin")
                  ? activeClass
                  : "hover:text-orange-500"
              }
            >
              Admin Dashboard
            </Link>
          </li>
        )}
      </ul>

      {/* Right side: Theme + User/Login */}
      <div className="flex items-center gap-4 relative">
        <button
          onClick={toggleDarkMode}
          className="text-2xl hover:text-orange-500"
          aria-label="Toggle Theme"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>

        {isLoggedIn ? (
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-10 h-10 rounded-full bg-orange-600 text-white font-bold text-lg"
            >
              {user?.username?.[0]?.toUpperCase() || "U"}
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded py-2 z-50">
                <Link
                  to="/myorders"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 relative"
                >
                  My Orders
                  {hasPendingOrders && (
                    <span className="absolute top-2 right-3 bg-red-600 text-white text-xs px-1 rounded-full">
                      •
                    </span>
                  )}
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 text-sm"
          >
            Login / Signup
          </Link>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-[#111827] flex flex-col items-center justify-center gap-6 text-2xl z-40">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="hover:text-orange-500"
          >
            Home
          </Link>
          <Link
            to="/menu"
            onClick={handleLinkClick}
            className="hover:text-orange-500"
          >
            Menu
          </Link>
          <Link
            to="/about"
            onClick={handleLinkClick}
            className="hover:text-orange-500"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="hover:text-orange-500"
          >
            Contact Us
          </Link>

          {isAdmin && (
            <Link
              to="/admin/dashboard"
              onClick={handleLinkClick}
              className="hover:text-orange-500"
            >
              Admin Dashboard
            </Link>
          )}

          {isLoggedIn && (
            <Link
              to="/myorders"
              onClick={handleLinkClick}
              className="hover:text-orange-500"
            >
              My Orders
            </Link>
          )}
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="text-red-600 text-lg font-semibold hover:text-red-700"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
