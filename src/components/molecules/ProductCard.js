// src/components/molecules/ProductCard.js
import React from "react";

const ProductCard = ({ image, title, text, link }) => (
  <div className="col-md-4 mb-4">
    <div className="card h-100 shadow-sm border-0">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={link} className="btn btn-primary">Ver más</a>
      </div>
    </div>
  </div>
);

export default ProductCard; // 👈 También "export default"
