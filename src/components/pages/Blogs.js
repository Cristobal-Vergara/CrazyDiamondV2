// src/components/pages/Blogs.js
import React, { useState } from "react";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";

import MasVendido from '../../assets/img/MasVendido.jpg';
import NoticiasActuales from '../../assets/img/NoticiasActuales.png';

const Blogs = () => {
  const [likedPosts, setLikedPosts] = useState([]);

  const toggleLike = (id) => {
    setLikedPosts((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const blogPosts = [
    {
      id: 1,
      title: "🔥 Los Mangas Más Vendidos del 2025",
      image: MasVendido,
      summary:
        "Descubre cuáles son los mangas más populares del año, desde clásicos hasta nuevas joyas del manga moderno.",
    },
    {
      id: 2,
      title: "🎌 Noticias Actuales",
      image: NoticiasActuales,
      summary:
        "Conoce las ultimas noticias de tus animes favoritos. Informacion relevante, No te las pierdas.",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="fw-bold text-primary">Blog</h1>
      <p className="text-center text-muted mb-5">
        Noticias, reseñas y artículos del mundo del manga y el coleccionismo.
      </p>

      <div className="row justify-content-center">
        {blogPosts.map((post) => (
          <div className="col-md-6 mb-4" key={post.id}>
            <div className="card shadow border-0">
              <img
                src={post.image}
                alt={post.title}
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{post.title}</h5>
                <p className="card-text text-secondary">{post.summary}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <Link to={`/blogs/${post.id}`} className="btn btn-warning">
                    Leer más
                  </Link>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
