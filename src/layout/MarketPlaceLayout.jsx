import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const MarketPlaceLayout = () => {
  return (
    <div>
      <div className="flex gap-3">
        <NavLink to="/marketplace">Back to marketplace</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default MarketPlaceLayout;
