// src/data/adminData.js

let usuarios = [
  { id: 1, nombre: "Luis Narváez", rol: "Admin" },
  { id: 2, nombre: "Marta Gálvez", rol: "Vendedor" },
  { id: 3, nombre: "Jorge Canales", rol: "Cliente" },
];

// ---- CRUD USUARIOS ----
export const getUsuarios = () => usuarios;

export const addUsuario = (nuevoUsuario) => {
  const id = usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1;
  usuarios.push({ id, ...nuevoUsuario });
};

export const updateUsuario = (id, datosActualizados) => {
  usuarios = usuarios.map((u) =>
    u.id === id ? { ...u, ...datosActualizados } : u
  );
};

export const deleteUsuario = (id) => {
  usuarios = usuarios.filter((u) => u.id !== id);
};


// src/data/adminData.js

// Cargar productos desde LocalStorage
export let productos = JSON.parse(localStorage.getItem('productos')) || [];

// Guardar productos en LocalStorage
export function guardarProductos() {
  localStorage.setItem('productos', JSON.stringify(productos));
}

// Generar ID único
export function generarId() {
  return productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1 : 1;
}

// CRUD
export function agregarProducto(producto) {
  producto.id = generarId();
  productos.push(producto);
  guardarProductos();
}

export function eliminarProducto(id) {
  productos = productos.filter(p => p.id !== id);
  guardarProductos();
}

export function obtenerProducto(id) {
  return productos.find(p => p.id === id);
}

export function actualizarProducto(id, datos) {
  const prod = obtenerProducto(id);
  if (prod) {
    Object.assign(prod, datos);
    guardarProductos();
  }
}

// Exportar también para React
export function obtenerProductos() {
  return productos;
}
