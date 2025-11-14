// src/components/organisms/AdminLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../molecules/Sidebar";

const AdminLayout = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
