// src/components/pages/Admin/ProductoAdmin.jsx
import React, { useState, useEffect } from "react";
import DashboardLayout from "../../organisms/DashboardLayout";
import { obtenerProductos, agregarProducto, actualizarProducto, eliminarProducto } from "../../../data/adminData";

const ProductoAdmin = () => {
  const [productos, setProductos] = useState([]);
  const [form, setForm] = useState({ nombre: "", precio: "", descripcion: "", imagen: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    setProductos(obtenerProductos());
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (editId) {
      actualizarProducto(editId, { ...form, precio: parseFloat(form.precio) });
      setEditId(null);
    } else {
      agregarProducto({ ...form, precio: parseFloat(form.precio) });
    }
    setProductos(obtenerProductos());
    setForm({ nombre: "", precio: "", descripcion: "", imagen: "" });
  };

  const handleEdit = producto => {
    setEditId(producto.id);
    setForm({ nombre: producto.nombre, precio: producto.precio, descripcion: producto.descripcion, imagen: producto.imagen });
  };

  const handleDelete = id => {
    if(window.confirm("¿Deseas eliminar este producto?")) {
      eliminarProducto(id);
      setProductos(obtenerProductos());
    }
  };

  return (
    <DashboardLayout>
      <div className="container mt-4">
               <h2 className="mb-4 text-center fw-bold text-primary">
                  Gestion de Productos
                 </h2>

        {/* ===== FORMULARIO ===== */}
        <div className="card mb-4 shadow-sm">
          <div className="card-header bg-primary text-white">
            {editId ? "Editar Producto" : "Agregar Producto"}
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-md-6">
                <input type="text" name="nombre" className="form-control" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
              </div>
              <div className="col-md-3">
                <input type="number" name="precio" className="form-control" placeholder="Precio" value={form.precio} onChange={handleChange} required />
              </div>
              <div className="col-md-3">
                <input type="text" name="imagen" className="form-control" placeholder="URL Imagen" value={form.imagen} onChange={handleChange} />
              </div>
              <div className="col-12">
                <textarea name="descripcion" className="form-control" placeholder="Descripción" value={form.descripcion} onChange={handleChange}></textarea>
              </div>
              <div className="col-12 text-end">
                <button type="submit" className={`btn ${editId ? "btn-warning" : "btn-success"}`}>
                  {editId ? "Actualizar" : "Agregar"}
                </button>
                {editId && (
                  <button type="button" className="btn btn-secondary ms-2" onClick={() => { setEditId(null); setForm({ nombre: "", precio: "", descripcion: "", imagen: "" }); }}>
                    Cancelar
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* ===== TABLA DE PRODUCTOS ===== */}
        <div className="card shadow-sm">
          <div className="card-header bg-secondary text-white">Productos Existentes</div>
          <div className="card-body p-0">
            <table className="table table-striped table-hover mb-0">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Descripción</th>
                  <th>Imagen</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productos.map(p => (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.nombre}</td>
                    <td>${p.precio.toFixed(2)}</td>
                    <td>{p.descripcion}</td>
                    <td>{p.imagen && <img src={p.imagen} alt={p.nombre} style={{ width: "50px" }} />}</td>
                    <td>
                      <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(p)}>Editar</button>
                      <button className="btn btn-sm btn-danger" onClick={() => handleDelete(p.id)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
                {productos.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center text-muted">No hay productos agregados</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProductoAdmin;
