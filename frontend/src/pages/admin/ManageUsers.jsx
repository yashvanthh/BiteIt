import { useEffect, useState } from "react";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const sampleUsers = [
      { name: "Sachin", email: "admin@biteit.in", role: "admin" },
      { name: "Raj", email: "raj@gmail.com", role: "user" },
      {name: "Priya", email: "pri@gmail.com", role: "user"},
      {name: "Thara", email: "thara@gmail.com", role: "user"},
   ];
    setUsers(sampleUsers);
  }, []);

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900">
      <h1 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-6">
        Manage Users
      </h1>

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <thead className="bg-orange-100 dark:bg-gray-700 text-left text-sm text-gray-700 dark:text-white uppercase">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i} className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="p-4 text-gray-800 dark:text-white">{u.name}</td>
                <td className="p-4 text-gray-800 dark:text-white">{u.email}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-sm font-semibold rounded-full ${
                      u.role === "admin"
                        ? "bg-green-100 dark:bg-green-800 dark:text-white text-green-800"
                        : "bg-blue-100 dark:bg-blue-800 dark:text-white text-blue-800"
                    }`}
                  >
                    {u.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
