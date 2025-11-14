import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CompraExitosa = () => {
  const [compra, setCompra] = useState(null);

  useEffect(() => {
    const ultima = JSON.parse(localStorage.getItem("ultimaCompra"));
    setCompra(ultima);

    // ===== INTEGRAR LOCALSTORAGE PARA ÓRDENES =====
    if (ultima) {
      const ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];
      // Crear nueva orden con ID único
      const nuevaOrden = {
        id: ordenes.length > 0 ? Math.max(...ordenes.map(o => o.id)) + 1 : 1,
        fecha: ultima.fecha,
        cliente: ultima.cliente,
        productos: ultima.productos,
        total: ultima.total,
        estado: "Pendiente",
      };
      ordenes.push(nuevaOrden);
      localStorage.setItem("ordenes", JSON.stringify(ordenes));
    }
  }, []);

  if (!compra) {
    return (
      <div className="container text-center py-5">
        <h3 className="text-danger">❌ No hay información de compra</h3>
        <Link to="/" className="btn btn-primary mt-3">
          Volver al inicio
        </Link>
      </div>
    );
  }

  const { cliente, productos, total, fecha } = compra;

  return (
    <div className="container py-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-success text-center mb-4 fw-bold">
          🎉 ¡Compra Exitosa!
        </h2>
        <p className="text-center text-muted">
          Tu pedido fue registrado el <strong>{fecha}</strong>
        </p>

        {/* 🧍 Información del cliente */}
        <div className="border rounded p-3 mb-4 bg-light">
          <h5 className="fw-bold mb-3 text-primary">👤 Datos del Cliente</h5>
          <p><strong>Nombre:</strong> {cliente.nombre}</p>
          <p><strong>Email:</strong> {cliente.email}</p>
          <p><strong>Dirección:</strong> {cliente.direccion}</p>
          <p><strong>Ciudad:</strong> {cliente.ciudad}</p>
          <p>
            <strong>Tipo de entrega:</strong>{" "}
            {cliente.tipoEntrega === "domicilio"
              ? "Envío a domicilio"
              : "Retiro en tienda"}
          </p>
        </div>

        {/* 🧺 Detalle de productos */}
        <div className="border rounded p-3 mb-4">
          <h5 className="fw-bold mb-3 text-primary">📦 Productos Comprados</h5>
          <div className="table-responsive">
            <table className="table table-striped text-center align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Imagen</th>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((p) => (
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
                    <td>{p.cantidad}</td>
                    <td>${p.precio.toLocaleString()}</td>
                    <td>${(p.precio * p.cantidad).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-end mt-3">
            <h4 className="fw-bold">
              💰 Total Pagado: ${total.toLocaleString()}
            </h4>
          </div>
        </div>

        {/* 🔙 Botones de navegación */}
        <div className="text-center">
          <Link to="/productos" className="btn btn-outline-primary me-2">
            🛍️ Seguir Comprando
          </Link>
          <Link to="/" className="btn btn-success">
            🏠 Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompraExitosa;
