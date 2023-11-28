import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  //   const user = true;

  return !localStorage.getItem("user") ? (
    <Navigate to={"/login"} />
  ) : (
    <Outlet />
  );
};

export default ProtectedRoute;
