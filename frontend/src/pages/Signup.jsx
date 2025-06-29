import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "" });
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setDarkMode(localStorage.getItem("theme") === "dark");
  }, []);

  const isValidEmail = (email) => email.includes("@") && email.endsWith(".com");
  const isValidPassword = (password) =>
    password.length >= 8 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password);

  const showToast = (msg, type = "error") => {
    setToast({ message: msg, type });
    setTimeout(() => setToast({ message: "", type: "" }), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!isValidEmail(email)) {
      showToast("Invalid email format");
      setLoading(false);
      return;
    }

    if (!username.trim()) {
      showToast("Username is required");
      setLoading(false);
      return;
    }

    if (!isValidPassword(password)) {
      showToast("Password must be 8+ characters and alphanumeric");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: username,
      });

      // Save to Firestore
      await addDoc(collection(db, "users"), {
        email,
        username,
        createdAt: serverTimestamp(),
      });

      showToast("Account created successfully!", "success");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      showToast(
        err.message.includes("email-already-in-use")
          ? "Email already in use"
          : "Signup failed. Try again."
      );
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
        <h2 className="text-2xl font-bold mb-4 text-center">
          Create your account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
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

          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your username"
            className={`w-full p-2 rounded border text-sm ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-white border-gray-300 text-black"
            } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            disabled={loading}
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className={`w-full p-2 rounded border text-sm ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-black"
              } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              disabled={loading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
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
              "Create Account"
            )}
          </button>
        </form>

        <p
          className={`mt-6 text-center text-sm ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
