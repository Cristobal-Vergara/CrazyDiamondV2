import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Carrito = () => {
  const [carrito, setCarrito] = useState([]);
  const navigate = useNavigate();

  // Cargar carrito desde localStorage
  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoGuardado);
  }, []);

  // Calcular total
  const calcularTotal = () =>
    carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);

  // Eliminar un producto
  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter((p) => p.id !== id);
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };

  // Ir al checkout
  const irAComprar = () => navigate("/comprar");

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-4">🛒 Carrito de Compras</h2>

      {carrito.length === 0 ? (
        <p className="text-center text-muted">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table table-striped align-middle text-center">
              <thead className="table-dark">
                <tr>
                  <th>Imagen</th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {carrito.map((p) => (
                  <tr key={p.id}>
                    <td>
                      <img
                        src={p.image}
                        alt={p.title}
                        width="80"
                        className="rounded"
                      />
                    </td>
                    <td>{p.title}</td>
                    <td>${p.precio.toLocaleString()}</td>
                    <td>{p.cantidad}</td>
                    <td>${(p.precio * p.cantidad).toLocaleString()}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => eliminarProducto(p.id)}
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-end mt-4">
            <h4>Total: ${calcularTotal().toLocaleString()}</h4>
            <button className="btn btn-success mt-3" onClick={irAComprar}>
              Proceder a la compra
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Carrito;
