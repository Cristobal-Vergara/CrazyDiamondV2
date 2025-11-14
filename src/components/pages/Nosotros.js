// src/pages/Profile.js
import React from 'react';

import Manga from '../../assets/img/Manga.jpg';

const Nosotros = () => {
  return (
    <div className="container-fluid py-5" style={{ minHeight: '80vh', backgroundColor: '#f8f9fa' }}>
      {/* Título principal */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Sobre Nosotros</h1>
        <p className="lead mx-auto" style={{ maxWidth: "800px", fontSize: "1.2rem", lineHeight: "1.8" }}>
          En <strong>CRAZY DIAMOND</strong>, no solo vendemos manga; vivimos y respiramos la pasión por el arte, la narrativa y la inmersión cultural de Japón. 
          Nacimos de la profunda admiración por la creatividad sin límites que emana del mangaka y del animador, y nuestro objetivo es compartir esa chispa contigo.
        </p>
      </div>

      {/* Contenedor principal */}
      <div className="row g-4 align-items-center justify-content-center">
        {/* Imagen */}
        <div className="col-md-5">
          <div className="card shadow-sm border-0">
            <img
              src={Manga}
              alt="Tienda"
              className="img-fluid rounded"
            />
          </div>
        </div>

        {/* Texto */}
        <div className="col-md-6">
          <div className="card shadow-sm border-0 p-5 h-100 d-flex flex-column justify-content-center" style={{ backgroundColor: '#ffffff' }}>
            <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
              Fundada por fans para fans, buscamos crear una comunidad donde cada
              lector pueda descubrir nuevas historias y compartir su pasión. 💜
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
              Nuestro compromiso es ofrecer un espacio seguro y divertido, lleno de
              recomendaciones, novedades y colecciones únicas que todo amante del
              manga apreciará.
            </p>
          </div>
        </div>
      </div>

      {/* Separador elegante */}
      <div className="text-center mt-5">
        <hr className="w-50 mx-auto border-primary opacity-50" />
      </div>
    </div>
  );
};

export default Nosotros;
