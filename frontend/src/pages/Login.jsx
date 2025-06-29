import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "" });
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setDarkMode(localStorage.getItem("theme") === "dark");
  }, []);

  const showToast = (msg, type = "error") => {
    setToast({ message: msg, type });
    setTimeout(() => setToast({ message: "", type: "" }), 2500);
  };

  const validateForm = () => {
    if (!email.includes("@") || !email.endsWith(".com")) {
      showToast("Enter a valid email (must include @ and end with .com)");
      return false;
    }
    if (password.length < 8 || !/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
      showToast("Password must be at least 8 characters and alphanumeric");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const role = user.email === "admin@gmail.com" ? "admin" : "user";

      login({
        email: user.email,
        username: user.displayName || "User",
        role,
      });

      showToast("Login successful!", "success");

      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      showToast("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 ${
        darkMode ? "bg-gray-900" : "bg-indigo-100"
      }`}
    >
      {toast.message && (
        <div
          className={`fixed top-6 z-50 px-6 py-2 rounded shadow-md transition-all duration-300 ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          } text-white`}
        >
          {toast.message}
        </div>
      )}

      <div
        className={`w-full max-w-md p-8 rounded-2xl shadow-lg ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign in to your account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1">Email address</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={`w-full p-2 rounded border text-sm ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-black"
              } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              disabled={loading}
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className={`w-full p-2 rounded border text-sm ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-black"
              } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              disabled={loading}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 bottom-2 text-gray-500 dark:text-gray-300"
              tabIndex={-1}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition disabled:opacity-50 flex items-center justify-center"
          >
            {loading ? (
              <span className="h-5 w-5 border-2 border-white border-t-transparent animate-spin rounded-full" />
            ) : (
              "Sign in"
            )}
          </button>

          <div className="text-right text-sm mt-1">
            <Link to="/forgot-password" className="text-indigo-600 hover:underline">
              Forgot password?
            </Link>
          </div>
        </form>

        <p
          className={`mt-6 text-center text-sm ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Not a user?{" "}
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
