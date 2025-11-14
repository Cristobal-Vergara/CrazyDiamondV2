// src/components/pages/Admin/CategoriaAdmin.js
import React, { useState, useEffect } from "react";
import DashboardLayout from "../../organisms/DashboardLayout";

const CategoriaAdmin = () => {
  const [categorias, setCategorias] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const cats = JSON.parse(localStorage.getItem("categorias")) || [
      { id: 1, nombre: "Shonen", descripcion: "Historias llenas de acción, amistad y aventuras.", color: "danger" },
      { id: 2, nombre: "Seinen", descripcion: "Dirigido a un público adulto, con temas psicológicos y filosóficos.", color: "dark" },
      { id: 3, nombre: "Shojo", descripcion: "Romance y emociones, con historias tiernas.", color: "info" },
    ];
    setCategorias(cats);
  }, []);

  const handleEliminar = (id) => {
    if (window.confirm("¿Estás seguro de eliminar esta categoría?")) {
      const nuevasCategorias = categorias.filter((cat) => cat.id !== id);
      setCategorias(nuevasCategorias);
      localStorage.setItem("categorias", JSON.stringify(nuevasCategorias));
    }
  };

  const categoriasFiltradas = categorias.filter((cat) =>
    cat.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="container py-5">
        <h2 className="mb-4 text-center fw-bold text-primary">
          Administrar Categorias
        </h2>


        {/* Buscador */}
        <div className="mb-4 d-flex justify-content-center">
          <input
            type="text"
            className="form-control w-50 shadow-sm"
            placeholder="🔍 Buscar categoría..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <div className="row g-4">
          {categoriasFiltradas.length === 0 && (
            <p className="text-center text-muted">No se encontraron categorías.</p>
          )}

          {categoriasFiltradas.map((cat) => (
            <div key={cat.id} className="col-md-6 col-lg-4">
              <div
                className={`card shadow-sm border-0 h-100 hover-shadow`}
                style={{ borderLeft: `5px solid var(--bs-${cat.color})`, transition: "transform 0.2s" }}
              >
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center fw-bold">{cat.nombre}</h5>
                  <p className="card-text text-muted text-center flex-grow-1">{cat.descripcion}</p>
                  {/* Botón uniforme */}
                  <button
                    className="btn btn-danger mt-3 w-100"
                    onClick={() => handleEliminar(cat.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .hover-shadow:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.12);
          }
        `}
      </style>
    </DashboardLayout>
  );
};

export default CategoriaAdmin;
