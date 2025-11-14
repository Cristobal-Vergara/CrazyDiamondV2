import React from "react";
import OfferBanner from "../molecules/OfferBanner";
import ProductCard from "../molecules/ProductCard";

import Naruto1 from '../../assets/img/Naruto1.jpg';

const Ofertas = () => {
  return (
    <div className="container py-5 text-center">
      <h1 className="fw-bold text-primary">Ofertas Especiales</h1>
      <OfferBanner text="🔥 Descuento del 30% en todos los mangas hasta el domingo 🔥" />
      <div className="row">
        <ProductCard
          image={Naruto1}
          title="Naruto Vol. 1"
          text="Antes $10.000 - Ahora $7.000"
          link="/comprar"
        />
      </div>
    </div>
  );
};

export default Ofertas;