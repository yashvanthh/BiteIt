import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize user state from localStorage (try-catch for safety)
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    try {
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const isLoggedIn = !!user;
  const isAdmin = user?.role === "admin";

  const login = (userData) => {
    // Normalize user object with role
    const userObj = {
      email: userData.email || "",
      username: userData.username || "",
      role: userData.role || "user", // default role = "user"
    };
    setUser(userObj);
    localStorage.setItem("user", JSON.stringify(userObj));
    localStorage.setItem("loggedInUser", userObj.email);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("loggedInUser");
  };

  // Sync user state across tabs/windows
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === "user") {
        try {
          const newUser = JSON.parse(e.newValue);
          setUser(newUser || null);
        } catch {
          setUser(null);
        }
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
