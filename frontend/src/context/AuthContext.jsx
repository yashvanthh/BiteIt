import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase"; // adjust if needed

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const isLoggedIn = !!user;
  const isAdmin = user?.role === "admin";

  const login = (userData) => {
    const userObj = {
      email: userData.email || "",
      username: userData.username || "",
      role: userData.role || "user",
    };
    setUser(userObj);
    localStorage.setItem("user", JSON.stringify(userObj));
    localStorage.setItem("loggedInUser", userObj.email);
  };

  const logout = async () => {
    try {
      await signOut(auth); // optional if using Firebase Auth
    } catch (err) {
      console.error("Firebase signOut error:", err.message);
    }
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("loggedInUser");
  };

  // Sync user state with Firebase auth status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const stored = localStorage.getItem("user");
        if (stored) {
          try {
            const parsed = JSON.parse(stored);
            setUser(parsed);
          } catch {
            setUser({
              email: firebaseUser.email,
              username: firebaseUser.displayName || "",
              role: "user",
            });
          }
        } else {
          setUser({
            email: firebaseUser.email,
            username: firebaseUser.displayName || "",
            role: "user",
          });
        }
      } else {
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("loggedInUser");
      }
    });

    return () => unsubscribe();
  }, []);

  // Sync across tabs
  useEffect(() => {
    const syncUser = (e) => {
      if (e.key === "user") {
        try {
          const newUser = JSON.parse(e.newValue);
          setUser(newUser || null);
        } catch {
          setUser(null);
        }
      }
    };
    window.addEventListener("storage", syncUser);
    return () => window.removeEventListener("storage", syncUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
