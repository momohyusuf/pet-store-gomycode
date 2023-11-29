import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { Avatar } from "antd";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const logOutUser = () => {
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
            srcet=""
            className="w-16"
          />
          <p className="font-bold text-orange-600">My pet shop</p>
        </div>

        <div className="flex gap-4 capitalize font-semibold text-gray-700">
          <NavLink to="/">home</NavLink>
          <NavLink to="/marketplace">marketplace</NavLink>
          <NavLink to="/about">about</NavLink>
          <NavLink to="/login">login</NavLink>

          <Button type="primary" onClick={logOutUser}>
            Logout
          </Button>
        </div>
        <div className="flex items-center gap-2 justify-end">
          <Avatar>{user[0]}</Avatar>
          <p className="text-red-500 font-medium capitalize">{user}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
