import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { user } = useSelector((state) => state.user);

  return !user ? <Navigate to={"/login"} /> : <Outlet />;
};

export default ProtectedRoute;
