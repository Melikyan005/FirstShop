import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

const Layout = ({cartData}) => {
  return (
    <div>
      <Nav cartData={cartData} />
      <Outlet />
    </div>
  );
};

export default Layout;
