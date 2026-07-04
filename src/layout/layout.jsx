import React from "react";


import { Outlet } from "react-router-dom";
import Footer from "../component/footer";
import Navbar from "../component/navbar/navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;