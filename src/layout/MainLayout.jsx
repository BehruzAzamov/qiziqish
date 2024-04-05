import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="max-w-screen-lg w-full mx-auto flex justify-between items-centre">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;