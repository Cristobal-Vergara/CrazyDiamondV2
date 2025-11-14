// src/components/molecules/Sidebar.js
import React from "react";
import SidebarLink from "../atoms/SiderbarLink";

const Sidebar = () => {
  return (
    <div className="bg-light p-3 vh-100 border-end">
      <h4 className="fw-bold mb-4 text-primary">Admin Panel</h4>
      <SidebarLink to="/home" icon="bi bi-house" label="Home" />
      <SidebarLink to="/ordenes" icon="bi bi-receipt" label="Ordenes" />
      <SidebarLink to="/productoadmin" icon="bi bi-box" label="Productos" />
      <SidebarLink to="/usuario" icon="bi bi-people" label="Usuarios" />
      <SidebarLink to="/reportes" icon="bi bi-bar-chart" label="Reportes" />
      <SidebarLink to="/perfil" icon="bi bi-person" label="Perfil" />
      <SidebarLink to="/categoriaadmin" icon="bi bi-person" label="Categoria" />
    </div>
  );
};

export default Sidebar;
