import React, { useState, useEffect } from "react";
import DashboardLayout from "../../organisms/DashboardLayout";

// Datos simulados en localStorage
const LOCAL_KEY = "usuariosData";

// Funciones CRUD básicas simuladas
const getUsuarios = () => {
  const data = localStorage.getItem(LOCAL_KEY);
  return data ? JSON.parse(data) : [];
};

const saveUsuarios = (usuarios) => {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(usuarios));
};

const addUsuario = (usuario) => {
  const usuarios = getUsuarios();
  const nuevoUsuario = { id: Date.now(), ...usuario };
  usuarios.push(nuevoUsuario);
  saveUsuarios(usuarios);
};

const updateUsuario = (id, updatedData) => {
  const usuarios = getUsuarios().map((u) =>
    u.id === id ? { ...u, ...updatedData } : u
  );
  saveUsuarios(usuarios);
};

const deleteUsuario = (id) => {
  const usuarios = getUsuarios().filter((u) => u.id !== id);
  saveUsuarios(usuarios);
};

const UsuarioAdmin = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState("");
  const [editId, setEditId] = useState(null);

  // Cargar usuarios
  useEffect(() => {
    setUsuarios(getUsuarios());
  }, []);

  // Guardar cambios (crear o editar)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      updateUsuario(editId, { nombre, email, rol });
    } else {
      addUsuario({ nombre, email, rol });
    }
    setUsuarios(getUsuarios());
    setEditId(null);
    setNombre("");
    setEmail("");
    setRol("");
  };

  // Eliminar usuario
  const handleDelete = (id) => {
    deleteUsuario(id);
    setUsuarios(getUsuarios());
  };

  // Editar usuario
  const handleEdit = (usuario) => {
    setEditId(usuario.id);
    setNombre(usuario.nombre);
    setEmail(usuario.email);
    setRol(usuario.rol);
  };

  return (
    <DashboardLayout>
      <div className="container mt-4">
                <h2 className="mb-4 text-center fw-bold text-primary">
          Gestion de Usuarios
        </h2>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="card p-3 shadow-sm mb-4">
          <div className="row g-3">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre del usuario"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>

            <div className="col-md-4">
              <input
                type="email"
                className="form-control"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Rol (Admin, Vendedor, Cliente)"
                value={rol}
                onChange={(e) => setRol(e.target.value)}
                required
              />
            </div>

            <div className="col-md-1 d-grid">
              <button type="submit" className="btn btn-success">
                {editId ? "💾" : "➕"}
              </button>
            </div>
          </div>
        </form>

        {/* Tabla */}
        <table className="table table-striped table-hover align-middle">
          <thead className="table-primary">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.length > 0 ? (
              usuarios.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.nombre}</td>
                  <td>{u.email}</td>
                  <td>{u.rol}</td>
                  <td className="text-center">
                    <button
                      onClick={() => handleEdit(u)}
                      className="btn btn-warning btn-sm me-2"
                    >
                      ✏️ Editar
                    </button>
                    <button
                      onClick={() => handleDelete(u.id)}
                      className="btn btn-danger btn-sm"
                    >
                      🗑️ Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  No hay usuarios registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default UsuarioAdmin;
