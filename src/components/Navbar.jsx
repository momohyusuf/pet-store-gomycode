import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "antd";

const Navbar = () => {
  const navigate = useNavigate();

  const logOutUser = () => {
    localStorage.clear("user");

    navigate("/login");
  };

  return (
    <nav className="shadow py-1 ">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {" "}
          <img
            src="https://th.bing.com/th/id/OIP.TPa_HpG2EtaDfZbSPI9A9AHaHa?rs=1&pid=ImgDetMain"
            alt=" barnd logo"
            srcset=""
            className="w-16"
          />
          <p className="font-bold text-orange-600">My pet shop</p>
        </div>

        <div className="flex gap-4">
          <NavLink to="/">home</NavLink>
          <NavLink to="/marketplace">marketplace</NavLink>
          <NavLink to="/about">about</NavLink>
          <NavLink to="/login">login</NavLink>

          <Button type="primary" onClick={logOutUser}>
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
