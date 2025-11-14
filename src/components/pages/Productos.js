import React, { useState } from "react";
import ProductCard from "../molecules/ProductCard";
import { useNavigate } from "react-router-dom";

import onepiece from '../../assets/img/OnePiece.jpg';
import chainsaw from '../../assets/img/ChainsawMan.jpg';
import dragonballz from '../../assets/img/DragonBallZ.jpg';
import jujutsu from '../../assets/img/Jujutsu.jpg';
import myheroacademia from '../../assets/img/MyHeroAcademia.jpg';
import shingeki from '../../assets/img/Shingeki.jpg';

const Productos = () => {
  const navigate = useNavigate();

  // 🧾 Catálogo de mangas
  const productos = [
    
    {
      id: 1,
      image: onepiece,
      title: "One Piece Vol. 22",
      text: "Nueva edición especial con portada exclusiva.",
      precio: 12990,
    },
    {
      id: 2,
      image: shingeki,
      title: "Attack on Titan Vol. 34",
      text: "El épico cierre de una de las mejores sagas.",
      precio: 11990,
    },
    {
      id: 3,
      image: chainsaw,
      title: "Chainsaw Man Vol. 12",
      text: "La historia más sangrienta y divertida del momento.",
      precio: 10990,
    },
    {
      id: 4,
      image: jujutsu,
      title: "Jujutsu Kaisen Vol. 20",
      text: "Nuevos poderes y batallas intensas.",
      precio: 12490,
    },
    {
      id: 5,
      image: dragonballz,
      title: "Dragon Ball Z Vol.1",
      text: "Una de las historicas mas iconicas del anime.",
      precio: 34990,
    },
    {
      id: 6,
      image: myheroacademia,
      title: "My Hero Academia Vol. 40",
      text: "Nuevas aventuras de Deku y compañía.",
      precio: 11990,
    },
  ];

  // 🛒 Estado del carrito
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito")) || []
  );

  // 🧠 Agregar al carrito
  const agregarAlCarrito = (producto) => {
    const existe = carrito.find((item) => item.id === producto.id);
    let nuevoCarrito;

    if (existe) {
      nuevoCarrito = carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
    } else {
      nuevoCarrito = [...carrito, { ...producto, cantidad: 1 }];
    }

    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    alert(`${producto.title} agregado al carrito 🛒`);
  };

  const irAlCarrito = () => {
    navigate("/carrito", { state: { carrito } });
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary fw-bold">Nuestros Productos</h2>
        <button className="btn btn-warning" onClick={irAlCarrito}>
          Ver Carrito ({carrito.length})
        </button>
      </div>

      <div className="row">
        {productos.map((p) => (
          <div className="col-md-4 mb-4" key={p.id}>
            <div className="card shadow-sm h-100 text-center">
              <img
                src={p.image}
                className="card-img-top"
                alt={p.title}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title fw-bold">{p.title}</h5>
                <p className="card-text text-muted">{p.text}</p>
                <p className="fw-bold text-success mb-3">
                  ${p.precio.toLocaleString()}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => agregarAlCarrito(p)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
