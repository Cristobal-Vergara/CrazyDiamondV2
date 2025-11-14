let productos = [
  {
    id: 1,
    image: "onepiece.jpg",
    title: "One Piece Vol. 22",
    text: "Nueva edición especial con portada exclusiva.",
    precio: 12990,
  },
  {
    id: 2,
    image: "shingeki.jpg",
    title: "Attack on Titan Vol. 34",
    text: "El épico cierre de una de las mejores sagas.",
    precio: 11990,
  },
  {
    id: 3,
    image: "chainsaw.jpg",
    title: "Chainsaw Man Vol. 12",
    text: "La historia más sangrienta y divertida del momento.",
    precio: 10990,
  },
];

export const getProductos = () => productos;

export const addProducto = (nuevoProducto) => {
  const id = productos.length ? productos[productos.length - 1].id + 1 : 1;
  productos.push({ id, ...nuevoProducto });
};

export const updateProducto = (id, productoEditado) => {
  productos = productos.map((p) => (p.id === id ? { ...p, ...productoEditado } : p));
};

export const deleteProducto = (id) => {
  productos = productos.filter((p) => p.id !== id);
};
