// src/components/pages/DetalleProducto.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DetalleProducto = () => {
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    // Obtener ID del producto desde localStorage
    const idDetalle = parseInt(localStorage.getItem("detalleProductoId"));
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    const prod = productos.find((p) => p.id === idDetalle);

    if (!prod) {
      alert("Producto no encontrado");
      navigate("/Productos"); // redirige a la lista de productos
      return;
    }

    setProducto(prod);

    // Cargar contador del carrito
    const count = parseInt(localStorage.getItem("cartCount")) || 0;
    setCartCount(count);
  }, [navigate]);

  const agregarAlCarrito = () => {
    let count = cartCount + 1;
    setCartCount(count);
    localStorage.setItem("cartCount", count);

    // Guardar producto en carrito
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Feedback visual
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  if (!producto) return null;

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={producto.imagen || "/assets/img/default.jpg"}
            alt={producto.nombre}
            className="img-fluid"
            style={{ objectFit: "cover", maxHeight: "400px", width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold">{producto.nombre}</h2>
          <p className="text-success fw-bold">${producto.precio}</p>
          <p>{producto.descripcion || "Sin descripción"}</p>
          <button
            className={`btn ${added ? "btn-success" : "btn-primary"}`}
            onClick={agregarAlCarrito}
          >
            {added ? "✓ Añadido" : "Agregar al carrito"}
          </button>
          <p className="mt-3">Items en carrito: {cartCount}</p>
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
