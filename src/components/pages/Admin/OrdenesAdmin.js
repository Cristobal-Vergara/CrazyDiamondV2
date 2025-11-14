// src/components/pages/Admin/OrdenesAdmin.js
import React, { useEffect, useState } from "react";
import DashboardLayout from "../../organisms/DashboardLayout";

const OrdenesAdmin = () => {
  const [ordenes, setOrdenes] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("ordenes")) || [];
    setOrdenes(data);
  }, []);

  const cambiarEstado = (id, estado) => {
    const nuevasOrdenes = ordenes.map(o =>
      o.id === id ? { ...o, estado } : o
    );
    setOrdenes(nuevasOrdenes);
    localStorage.setItem("ordenes", JSON.stringify(nuevasOrdenes));
  };

  return (
    <DashboardLayout>
      <div className="container py-5">
                <h2 className="mb-4 text-center fw-bold text-primary">
          Ordenes
        </h2>
        <div className="table-responsive">
          <table className="table table-striped align-middle text-center">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>Total</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {ordenes.map(o => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.fecha}</td>
                  <td>{o.cliente.nombre}</td>
                  <td>${o.total.toLocaleString()}</td>
                  <td>{o.estado}</td>
                  <td>
                    {o.estado !== "Completada" && (
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => cambiarEstado(o.id, "Completada")}
                      >
                        Completar
                      </button>
                    )}
                    {o.estado !== "Cancelada" && (
                      <button
                        className="btn btn-danger btn-sm ms-2"
                        onClick={() => cambiarEstado(o.id, "Cancelada")}
                      >
                        Cancelar
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OrdenesAdmin;
