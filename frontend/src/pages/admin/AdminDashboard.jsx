import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaUsers, FaUtensils, FaShoppingCart } from "react-icons/fa";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    users: [],
    products: [],
    orders: [],
  });

  // ⛽ Sample Data
  useEffect(() => {
    const sampleUsers = [
      { name: "Sachin", email: "admin@biteit.in", role: "admin" },
      { name: "Raj", email: "raj@gmail.com", role: "user" },
      { name: "Priya", email: "priya@yahoo.com", role: "user" },
      {name: "Thara", email: "thara@gmail.com", role: "user"},
    ];

    const sampleProducts = [
      { name: "Cheese Burger", price: 199, category: "Burger" },
      { name: "Paneer Pizza", price: 299, category: "Pizza" },
      { name: "Veg Momos", price: 149, category: "Snacks" },
      { name: "chicken nooddles", price: 149, category: "nooddles" },
    ];

    const sampleOrders = [
      { id: "ORD123", user: "Raj", total: 499, status: "pending" },
      { id: "ORD124", user: "Priya", total: 299, status: "delivered" },
    ];

    setStats({
      users: sampleUsers,
      products: sampleProducts,
      orders: sampleOrders,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-950 to-black  dark:text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-400">
            Welcome to BiteIt Admin
          </h1>
          <p className="text-gray-300 mt-2">
            Monitor and manage your food delivery system.
          </p>
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

        {/* Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <NavCard to="/admin/products" title="Manage Products" />
          <NavCard to="/admin/orders" title="Manage Orders" />
          <NavCard to="/admin/users" title="Manage Users" />
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
        <div className="bg-white text-black p-3 rounded-full shadow">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold">{label}</h3>
          <p className="text-3xl font-bold mt-1">{value}</p>
        </div>
      </div>
    </div>
  );
}

function NavCard({ to, title }) {
  return (
    <Link
      to={to}
      className="bg-white text-orange-600 hover:bg-orange-100 transition p-6 rounded-xl text-center font-semibold text-lg shadow hover:scale-105"
    >
      {title}
    </Link>
  );
}
