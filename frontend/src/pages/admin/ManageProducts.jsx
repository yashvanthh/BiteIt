import { useState, useEffect } from "react";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const sampleProducts = [
      { name: "Cheese Burger", price: 199, category: "Burger" },
      { name: "Paneer Pizza", price: 299, category: "Pizza" },
      { name: "Veg Momos", price: 149, category: "Snacks" },
    ];
    setProducts(sampleProducts);
  }, []);

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900">
      <h1 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-6">
        Manage Products
      </h1>

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <thead className="bg-orange-100 dark:bg-gray-700 text-left text-sm text-gray-700 dark:text-white uppercase">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Price</th>
              <th className="p-4">Category</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={i} className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="p-4 text-gray-800 dark:text-white">{p.name}</td>
                <td className="p-4 text-gray-800 dark:text-white">₹{p.price}</td>
                <td className="p-4 text-gray-800 dark:text-white">{p.category}</td>
                <td className="p-4">
                  <button className="text-blue-600 dark:text-blue-400 hover:underline mr-3">Edit</button>
                  <button className="text-red-600 dark:text-red-400 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
