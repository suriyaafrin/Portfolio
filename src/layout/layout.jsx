import React from "react";


import { Outlet } from "react-router-dom";
import PortfolioFooter from "../component/footer";
import Navbar from "../component/navbar/navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <PortfolioFooter />
    </>
  );
}

export default Layout;