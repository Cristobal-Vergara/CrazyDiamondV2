// src/components/organisms/DashboardWidgets.js
import React from "react";

const DashboardWidgets = () => {
  return (
    <div className="row">
      <div className="col-md-3 mb-3">
        <div className="card text-center shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-primary">Ventas</h5>
            <p className="card-text fs-4 fw-bold">$45,200</p>
          </div>
        </div>
      </div>

      <div className="col-md-3 mb-3">
        <div className="card text-center shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-success">Usuarios</h5>
            <p className="card-text fs-4 fw-bold">320</p>
          </div>
        </div>
      </div>

      <div className="col-md-3 mb-3">
        <div className="card text-center shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-warning">Pedidos</h5>
            <p className="card-text fs-4 fw-bold">58</p>
          </div>
        </div>
      </div>

      <div className="col-md-3 mb-3">
        <div className="card text-center shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-danger">Productos</h5>
            <p className="card-text fs-4 fw-bold">112</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWidgets;
