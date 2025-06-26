import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const [user, setUser] = useState(() => {
    return localStorage.getItem('loggedInUser') || null;
  });

  const login = (username) => {
    setIsLoggedIn(true);
    setUser(username);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('loggedInUser', username);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInUser');
  };

  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === 'isLoggedIn') {
        setIsLoggedIn(e.newValue === 'true');
        setUser(localStorage.getItem('loggedInUser') || null);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
