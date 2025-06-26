import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // ✅ Import useAuth

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ Destructure login from context

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sync dark mode from localStorage
  useEffect(() => {
    setDarkMode(localStorage.getItem('theme') === 'dark');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Match user
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      setError('Invalid email or password.');
      setLoading(false);
      return;
    }

    // ✅ Save login state properly
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('loggedInUser', user.email); // ONLY store email
    login(user.email); // ✅ Pass email to AuthContext login

    setLoading(false);
    alert('Login successful!');
    navigate('/');
  };

  const baseInputClasses = "w-full border rounded p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm";
  const darkInputClasses = "bg-gray-700 border-gray-600 text-white";
  const lightInputClasses = "bg-white border-gray-300 text-gray-900";

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 ${darkMode ? 'bg-gray-900' : 'bg-indigo-100'}`}>
      <div className={`w-full max-w-md shadow-lg rounded-2xl p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Sign in to your account
        </h2>

        {error && (
          <div className="mb-4 text-red-600 text-center" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4" aria-label="Login form">
          <div>
            <label htmlFor="email" className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email address</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={`${baseInputClasses} ${darkMode ? darkInputClasses : lightInputClasses}`}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="password" className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Password</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              className={`${baseInputClasses} ${darkMode ? darkInputClasses : lightInputClasses}`}
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <p className={`mt-6 text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Not a user?{' '}
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
