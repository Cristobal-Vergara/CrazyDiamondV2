import React, { useEffect, useState } from "react";
import DashboardLayout from "../../organisms/DashboardLayout"; // importa tu layout


const ReportesAdmin = () => {
  const [ordenes, setOrdenes] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const ord = JSON.parse(localStorage.getItem("ordenes")) || [];
    const usrs = JSON.parse(localStorage.getItem("users")) || [];
    setOrdenes(ord);
    setUsuarios(usrs);
  }, []);

  
  const totalVentas = ordenes.reduce((sum, o) => sum + o.total, 0);
  const totalOrdenes = ordenes.length;
  const totalUsuarios = usuarios.length;

  return (
    <DashboardLayout> {/* <-- Aquí envuelves tu contenido */}
      <div className="container py-5">
                <h2 className="mb-4 text-center fw-bold text-primary">
          Reportes del Sistema
        </h2>

        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card shadow p-3 text-center bg-light">
              <h5>Total Ventas</h5>
              <h3>${totalVentas.toLocaleString()}</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow p-3 text-center bg-light">
              <h5>Total Órdenes</h5>
              <h3>{totalOrdenes}</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow p-3 text-center bg-light">
              <h5>Total Usuarios</h5>
              <h3>{totalUsuarios}</h3>
            </div>
          </div>
        </div>

        <div className="card shadow p-3 bg-light">
          <h5 className="mb-3">Órdenes Recientes</h5>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Cliente</th>
                  <th>Total</th>
                  <th>Fecha</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {ordenes.slice(-5).reverse().map((o) => (
                  <tr key={o.id}>
                    <td>{o.id}</td>
                    <td>{o.cliente.nombre}</td>
                    <td>${o.total.toLocaleString()}</td>
                    <td>{o.fecha}</td>
                    <td>{o.estado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ReportesAdmin;
