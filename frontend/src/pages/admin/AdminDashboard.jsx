import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaUsers,
  FaUtensils,
  FaShoppingCart,
  FaBoxOpen,
  FaUserCog,
} from "react-icons/fa";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    users: [],
    products: [],
    orders: [],
  });

  useEffect(() => {
    const isAdmin = localStorage.getItem("adminLoggedIn");
    if (!isAdmin) navigate("/admin/login");

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

    setStats({
      users: storedUsers,
      orders: storedOrders,
      products: storedProducts,
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/"); // Redirect to home
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-100 to-white dark:from-black dark:via-red-950 dark:to-black dark:text-white p-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 dark:text-orange-400">
              Welcome, Admin
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Monitor and manage your BiteIt platform efficiently.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="mt-4 md:mt-0 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition"
          >
            Logout
          </button>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard
            icon={<FaUtensils size={28} />}
            label="Total Products"
            value={stats.products.length}
            color="from-orange-400 to-orange-600"
          />
          <StatCard
            icon={<FaShoppingCart size={28} />}
            label="Total Orders"
            value={stats.orders.length}
            color="from-blue-400 to-blue-600"
          />
          <StatCard
            icon={<FaUsers size={28} />}
            label="Total Users"
            value={stats.users.length}
            color="from-green-400 to-green-600"
          />
        </div>

        {/* Admin Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <NavCard
            to="/admin/products"
            title="Manage Products"
            icon={<FaBoxOpen />}
          />
          <NavCard
            to="/admin/orders"
            title="Manage Orders"
            icon={<FaShoppingCart />}
          />
          <NavCard
            to="/admin/users"
            title="Manage Users"
            icon={<FaUserCog />}
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon, color }) {
  return (
    <div
      className={`bg-gradient-to-br ${color} text-white p-6 rounded-xl shadow-md hover:shadow-xl transition`}
    >
      <div className="flex items-center gap-4">
        <div className="bg-white text-black p-3 rounded-full shadow">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{label}</h3>
          <p className="text-3xl font-bold mt-1">{value}</p>
        </div>
      </div>
    </div>
  );
}

function NavCard({ to, title, icon }) {
  return (
    <Link
      to={to}
      className="bg-white dark:bg-gray-800 text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-gray-700 transition p-6 rounded-xl text-center font-semibold text-lg shadow hover:scale-105 flex flex-col items-center gap-2"
    >
      <div className="text-3xl">{icon}</div>
      {title}
    </Link>
  );
}
