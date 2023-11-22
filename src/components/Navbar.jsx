import React from "react";

import { Input } from "antd";

const Navbar = () => {
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

        <Input.Search
          placeholder="input search text"
          //   onSearch={onSearch}
          status="warning"
          style={{
            width: 300,
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
