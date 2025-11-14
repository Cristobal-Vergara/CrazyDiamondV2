// src/components/pages/Admin/Perfil.js
import React, { useEffect, useState } from "react";
import DashboardLayout from "../../organisms/DashboardLayout";

const Perfil = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const usuarioActivo = JSON.parse(localStorage.getItem("user")); // usuario logueado
    setUser(usuarioActivo);
  }, []);

  if (!user) {
    return (
      <DashboardLayout>
        <div className="container py-5 text-center">
          <h3 className="text-danger">❌ No hay usuario logueado</h3>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="container py-5">
        <h2 className="mb-4 text-primary">👤 Perfil de Usuario</h2>

        <div className="card shadow p-4 bg-light">
          <h5 className="fw-bold mb-3 text-primary">Datos Personales</h5>
          <p><strong>Nombre:</strong> {user.nombre}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Dirección:</strong> {user.direccion}</p>
          <p><strong>Ciudad:</strong> {user.ciudad}</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Perfil;
