// src/components/molecules/ProductosCard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";

const ProductosCard = ({ producto, agregarAlCarrito }) => {
  const navigate = useNavigate();

  return (
    <div className="card shadow-sm h-100 text-center">
      <img
        src={producto.image}
        className="card-img-top"
        alt={producto.title}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title fw-bold">{producto.title}</h5>
        <p className="card-text text-muted">{producto.text}</p>
        <p className="fw-bold text-success mb-3">
          ${producto.precio.toLocaleString()}
        </p>

        {/* Botón Agregar al carrito */}
        <Button
          text="Agregar al carrito"
          color="primary"
          onClick={() => agregarAlCarrito(producto)}
        />

        {/* Botón Ver más */}
        <Button
          text="Ver más"
          color="info"
          onClick={() =>
            navigate("/detalle-producto", { state: { producto } })
          }
        />
      </div>
    </div>
  );
};

export default ProductosCard;
