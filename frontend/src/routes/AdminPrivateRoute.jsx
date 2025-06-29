import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const AdminPrivateRoute = ({ children }) => {
  const isAdminLoggedIn = localStorage.getItem("adminLoggedIn") === "true";
  const location = useLocation();

  if (!isAdminLoggedIn) {
    // Redirect to login and preserve attempted path
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  // Render the protected component
  return children ? children : <Navigate to="/" replace />;
};

export default AdminPrivateRoute;
