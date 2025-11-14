// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../molecules/ProductCard';
import Button from '../atoms/Button';

import Kakashi from '../../assets/img/Kakashi.jpg';
import Nosotros from '../../assets/img/Nosotros.jpg';
import Ofertas from '../../assets/img/Ofertas.jpg';
const Home = () => {
  return (
   <div className="home-page bg-light">
      {/* Organismo: Banner */}
      <section className="text-center hero-section">
        <div className="container">
          <h1 className="display-4 fw-bold">Bienvenido a CRAZY DIAMOND</h1>
          <p className="lead">Tu tienda online de mangas ✨</p>
          <Button text="Ver productos" color="warning" link="/productos" />
        </div>
      </section>

      {/* Organismo: Sección de Categorías */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Categorías Destacadas</h2>
        <div className="row text-center">
          <ProductCard
            image={Kakashi}
            title="Blogs"
            text="Descubre las últimas ultimas acerca de tus mangas favoritos."
            link="/Blogs"
          />
          <ProductCard
            image={Nosotros}
            title="Nosotros"
            text="Si quieres saber un poco mas acerca de Nosotros."
            link="/Nosotros"
          />
          <ProductCard
            image={Ofertas}
            title="Ofertas"
            text="Los precios mas economicos por tiempo limitado, compra ya tu manga favorito."
            link="/Ofertas"
          />
        </div>
      </section>

      {/* Organismo: Testimonios */}
      <section className="bg-white py-5 border-top border-bottom">
        <div className="container">
          <h2 className="text-center mb-4">Lo que dicen nuestros clientes</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p>"Excelente servicio y mangas originales y de muy buena calidad❤️"</p>
              </blockquote>
              <footer className="blockquote-footer">María P.</footer>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p>"Compré un volumen de One Piece y llego impecable!"</p>
              </blockquote>
              <footer className="blockquote-footer">Carlos V.</footer>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p>"Buena atención y envíos rápidos. 100% recomendado."</p>
              </blockquote>
              <footer className="blockquote-footer">Ana L.</footer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
