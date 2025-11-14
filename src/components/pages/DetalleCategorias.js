import React from "react";
import { useParams, Link } from "react-router-dom";

const categoriasData = {
  mishilos: {
    nombre: "Shoasdas",
    descripcion:
      "Historias llenas de acción, aventura y amistad. Es el género más popular del manga japonés.",
    ejemplos: ["Naruto", "One Piece", "Dragon Ball", "My Hero Academia"],
    imagen: "https://i.imgur.com/COzO0p1.jpg",
    color: "danger",
  },
  seinen: {
    nombre: "Seinen",
    descripcion:
      "Dirigido a un público adulto, con temas más psicológicos y filosóficos. Ejemplo: Berserk, Tokyo Ghoul. Aborda sin censura temas más serios, complejos y a menudo oscuros de la vida real. Esto incluye la guerra, la política, el sexo, la violencia extrema, la corrupción y la moralidad ambigua. Se profundiza en la mente de los personajes. Los conflictos internos, dilemas éticos, traumas y la filosofía de vida son tan importantes como la acción. Tiende a explorar la naturaleza humana en sus facetas más complejas.      .",
    ejemplos: ["Berserk", "Tokyo Ghoul", "Vagabond", "Monster"],
    imagen: "https://m.media-amazon.com/images/M/MV5BYTQ2MDkzMzYtNTlkNi00OTY3LWE1YjAtZDBjN2Y3ZmE3ZmVhXkEyXkFqcGc@._V1_.jpg",
    color: "dark",
  },
  shojo: {
    nombre: "Shojo",
    descripcion:
      "Centrado en emociones, romance y crecimiento personal. Ejemplo: Fruits Basket, Sailor Moon.",
    ejemplos: ["Fruits Basket", "Sailor Moon", "Kimi ni Todoke", "Nana"],
    imagen: "https://i.imgur.com/HmW8eVP.jpg",
    color: "info",
  },
    shojo: {
    nombre: "Mishito",
    descripcion:
      "Centrado en emociones, romance y crecimiento personal. Ejemplo: Fruits Basket, Sailor Moon.",
    ejemplos: ["Fruits Basket", "Sailor Moon", "Kimi ni Todoke", "Nana"],
    imagen: "https://i.imgur.com/HmW8eVP.jpg",
    color: "info",
  },
  
};

const DetalleCategorias = () => {
  const { id } = useParams();
  const categoria = categoriasData[id?.toLowerCase()];

  if (!categoria) {
    return (
      <div className="container text-center py-5">
        <h2 className="text-danger">Categoría no encontrada 😢</h2>
        <Link to="/Categorias" className="btn btn-secondary mt-3">
          Volver a Categorías
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5 text-center">
      <div className="card border-0 shadow-sm mx-auto" style={{ maxWidth: "800px" }}>
        <img
          src={categoria.imagen}
          alt={categoria.nombre}
          className="card-img-top rounded-top"
          style={{ height: "350px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h2 className={`text-${categoria.color} fw-bold`}>
            {categoria.nombre}
          </h2>
          <p className="mt-3 text-muted">{categoria.descripcion}</p>

          <div className="mt-4">
            <h5 className="fw-bold">Ejemplos populares:</h5>
            <ul className="list-unstyled">
              {categoria.ejemplos.map((ej, i) => (
                <li key={i} className="my-1">
                  <span className={`badge bg-${categoria.color}`}>{ej}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link to="/Categorias" className="btn btn-outline-primary mt-4">
            ← Volver a Categorías
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetalleCategorias; // 👈 Este export es CLAVE
