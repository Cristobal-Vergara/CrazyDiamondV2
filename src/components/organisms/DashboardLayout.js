// src/components/organisms/DashboardLayout.js
import React from "react";
import Sidebar from "../molecules/Sidebar";
import Navbar from "./Navbar"; // ✅ ruta corregida


const DashboardLayout = ({ children }) => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Navbar />
        <div className="container mt-4">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
