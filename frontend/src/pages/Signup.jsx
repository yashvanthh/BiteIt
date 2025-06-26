import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  // Read dark mode state from localStorage on mount
  useEffect(() => {
    setDarkMode(localStorage.getItem('theme') === 'dark');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(user => user.email === email)) {
      setError('Email already registered.');
      setLoading(false);
      return;
    }

    users.push({ email, username, password });
    localStorage.setItem('users', JSON.stringify(users));

    setLoading(false);
    alert('Account created successfully!');
    navigate('/login');
  };

  const baseInputClasses = "w-full border rounded p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm";
  const darkInputClasses = "bg-gray-700 border-gray-600 text-white";
  const lightInputClasses = "bg-white border-gray-300 text-gray-900";

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 ${darkMode ? 'bg-gray-900' : 'bg-indigo-100'}`}>
      <div className={`w-full max-w-md shadow-lg rounded-2xl p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Create your account
        </h2>

        {error && (
          <div className="mb-4 text-red-600 text-center" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4" aria-label="Signup form">
          <div>
            <label htmlFor="email" className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email address</label>
            <input
              id="email"
              type="email"
              aria-label="Email address"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={`${baseInputClasses} ${darkMode ? darkInputClasses : lightInputClasses}`}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="username" className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Username</label>
            <input
              id="username"
              type="text"
              aria-label="Username"
              required
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Your username"
              className={`${baseInputClasses} ${darkMode ? darkInputClasses : lightInputClasses}`}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="password" className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Password</label>
            <input
              id="password"
              type="password"
              aria-label="Password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Create a password"
              className={`${baseInputClasses} ${darkMode ? darkInputClasses : lightInputClasses}`}
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <p className={`mt-6 text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Already have an account?{' '}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
