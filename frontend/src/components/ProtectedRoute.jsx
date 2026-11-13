import React, { children, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

function ProtectedRoute({ children }) {
  const { isAuth, setIsAuth } = useAuth();

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await instance.get("/auth/me");
        if (response.status === 200) {
          setIsAuth(true);
        }
      } catch (error) {
        setIsAuth(false);
      }
    }
    checkAuth();
  }, []);
  if (isAuth === null) {
    return <p>Loading .....</p>;
  }
  return isAuth ? (
    children ? (
      children
    ) : (
      <Outlet />
    )
  ) : (
    <navigate to="/login" replace />
  );
}

export default ProtectedRoute;
