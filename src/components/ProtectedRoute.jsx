import React from "react";

import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const {
    profile: { name },
  } = useSelector((state) => state.user);

  return !name ? <Navigate to={"/login"} /> : <Outlet />;
};

export default ProtectedRoute;
