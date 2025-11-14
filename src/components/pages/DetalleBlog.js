// src/components/pages/BlogDetalle.js
import React from "react";
import { useParams, Link } from "react-router-dom";

import Mas from '../../assets/img/Mas.jpg';
import Itadori from '../../assets/img/Itadori.jpg';

const BlogDetalle = () => {
  const { id } = useParams();

  // Contenido de los blogs
  const blogPosts = [
    {
      id: 1,
      title: "🔥 Los Mangas Más Vendidos del 2025",
      image: Mas,
      content: `
        El 2025 ha sido un año increíble para la industria del manga. 
        Entre los títulos más vendidos encontramos "One Piece", que sigue liderando las ventas, 
        seguido de "Jujutsu Kaisen" y "Chainsaw Man". 
        Nuevos lanzamientos como "Kaiju No.8" también han logrado captar la atención de los fans.
        <br /><br />
        El formato digital ha crecido un 30% en comparación con el año anterior, 
        y cada vez más editoriales apuestan por versiones coleccionables con portadas alternativas y arte exclusivo.
      `,
    },
    {
      id: 2,
      title: "⏰ Noticias Actuales",
      image: Itadori,
      content: `
        JUJUTSU KAISEN: Execution domina la taquilla japonesa tras su estreno
        El largometraje recopilatorio debutó en más de 330 cines y consolidó 17 fines de semana consecutivos con anime en la cima.
      `,
    },
  ];

  const blog = blogPosts.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="container text-center py-5">
        <h2>Blog no encontrado</h2>
        <Link to="/blogs" className="btn btn-secondary mt-3">
          Volver al blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <img
        src={blog.image}
        alt={blog.title}
        className="img-fluid rounded mb-4 shadow"
      />
      <h2 className="fw-bold text-primary mb-3">{blog.title}</h2>
      <p
        className="text-secondary fs-5"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></p>
      <Link to="/blogs" className="btn btn-outline-primary mt-4">
        ← Volver a Blogs
      </Link>
    </div>
  );
};

export default BlogDetalle;
