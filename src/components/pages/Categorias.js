import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const storedCategorias = JSON.parse(localStorage.getItem("categorias")) || [];
    setCategorias(storedCategorias);
  }, []);

  return (
    <div className="container py-5 text-center">
      {/* Título principal */}
      <div className="mb-5">
        <h1 className="fw-bold text-primary">Categorías de Manga</h1>
        <p className="text-muted">
          Explora nuestras colecciones por género y encuentra tu próxima historia favorita.
        </p>
      </div>

      {/* Renderizar cada categoría */}
      <div className="row justify-content-center">
        {categorias.map((categoria) => (
          <div key={categoria.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm text-center p-4">
              <h3 className={`fw-bold text-${categoria.color} mb-3`}>{categoria.nombre}</h3>
              <p className="text-muted small mb-3">{categoria.descripcion}</p>
              <Link
                to={`/categorias/${categoria.nombre.toLowerCase()}`}
                className={`btn btn-${categoria.color}`}
              >
                Ver más
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorias;
