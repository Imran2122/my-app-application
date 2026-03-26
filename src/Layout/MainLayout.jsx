import React from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar></Navbar>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
