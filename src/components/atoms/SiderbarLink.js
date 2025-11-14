// src/components/atoms/SidebarLink.js
import React from "react";
import { NavLink } from "react-router-dom";

const SidebarLink = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `d-flex align-items-center p-2 text-decoration-none ${
        isActive ? "bg-primary text-white rounded" : "text-dark"
      }`
    }
  >
    <i className={`me-2 ${icon}`}></i>
    {label}
  </NavLink>
);

export default SidebarLink;
