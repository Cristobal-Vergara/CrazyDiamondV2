// src/components/pages/DetalleProducto.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DetalleProducto = () => {
  const navigate = useNavigate();
  const { state } = useLocation(); // Recibe el producto desde navigate
  const producto = state?.producto;

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="container py-5">
      <button className="btn btn-secondary mb-4" onClick={() => navigate(-1)}>
        ← Volver
      </button>

      <div className="row">
        <div className="col-md-6">
          <img
            src={producto.image}
            alt={producto.title}
            className="img-fluid rounded"
            style={{ objectFit: "cover", width: "100%", height: "400px" }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold">{producto.title}</h2>
          <p className="text-muted">{producto.text}</p>
          <p className="fw-bold text-success" style={{ fontSize: "1.5rem" }}>
            ${producto.precio.toLocaleString()}
          </p>

          {/* Aquí puedes agregar más características del producto */}
          <ul>
            <li>Páginas: 200</li>
            <li>Editorial: Shueisha</li>
            <li>Idioma: Español</li>
            <li>Encuadernación: Rústica</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
