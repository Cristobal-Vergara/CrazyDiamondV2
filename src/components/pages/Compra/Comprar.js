import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Comprar = () => {
  const [carrito, setCarrito] = useState([]);
  const [cliente, setCliente] = useState({
    nombre: "",
    email: "",
    direccion: "",
    ciudad: "",
    tipoEntrega: "domicilio",
  });
  const navigate = useNavigate();

  // 🛒 Cargar carrito guardado
  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoGuardado);
  }, []);

  // Calcular total
  const calcularTotal = () =>
    carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };

  // Confirmar compra
  const confirmarCompra = (e) => {
    e.preventDefault();

    if (
      !cliente.nombre ||
      !cliente.email ||
      !cliente.direccion ||
      !cliente.ciudad
    ) {
      alert("⚠️ Por favor, completa todos los campos antes de continuar.");
      return;
    }

    // Guardar resumen de compra
    const resumenCompra = {
      cliente,
      productos: carrito,
      total: calcularTotal(),
      fecha: new Date().toLocaleString(),
    };

    localStorage.setItem("ultimaCompra", JSON.stringify(resumenCompra));
    localStorage.removeItem("carrito"); // limpiar carrito

    navigate("/compra-exitosa");
  };

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-4">Finalizar Compra</h2>

      {carrito.length === 0 ? (
        <p className="text-center text-muted">Tu carrito está vacío.</p>
      ) : (
        <div className="row">
          {/* 🧺 Productos del carrito */}
          <div className="col-md-7">
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-dark text-white">
                <h5 className="mb-0">Resumen del Pedido</h5>
              </div>
              <div className="card-body">
                {carrito.map((p) => (
                  <div
                    key={p.id}
                    className="d-flex justify-content-between align-items-center border-bottom py-2"
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      width="60"
                      className="rounded"
                    />
                    <div className="flex-grow-1 ms-3 text-start">
                      <h6 className="mb-0">{p.title}</h6>
                      <small className="text-muted">
                        {p.cantidad} x ${p.precio.toLocaleString()}
                      </small>
                    </div>
                    <strong>
                      ${(p.precio * p.cantidad).toLocaleString()}
                    </strong>
                  </div>
                ))}
                <div className="text-end mt-3">
                  <h5>Total: ${calcularTotal().toLocaleString()}</h5>
                </div>
              </div>
            </div>
          </div>

          {/* 🧍 Datos del cliente */}
          <div className="col-md-5">
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">Datos de Envío</h5>
              </div>
              <div className="card-body">
                <form onSubmit={confirmarCompra}>
                  <div className="mb-3">
                    <label className="form-label">Nombre completo</label>
                    <input
                      type="text"
                      name="nombre"
                      className="form-control"
                      value={cliente.nombre}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Correo electrónico</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={cliente.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Dirección</label>
                    <input
                      type="text"
                      name="direccion"
                      className="form-control"
                      value={cliente.direccion}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Ciudad</label>
                    <input
                      type="text"
                      name="ciudad"
                      className="form-control"
                      value={cliente.ciudad}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Tipo de entrega</label>
                    <select
                      name="tipoEntrega"
                      className="form-select"
                      value={cliente.tipoEntrega}
                      onChange={handleChange}
                    >
                      <option value="domicilio">Envío a domicilio</option>
                      <option value="retiro">Retiro en tienda</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-success w-100">
                    Confirmar Compra ✅
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comprar;
