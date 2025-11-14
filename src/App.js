// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';

// import Profile from './components/pages/Profile';
import Nosotros from './components/pages/Nosotros';
import Registrarse from './components/pages/Registrarse';
import Productos from './components/pages/Productos';
import Blogs from './components/pages/Blogs';
import Contacto from './components/pages/Contacto';
import Ofertas from './components/pages/Ofertas';
import Categorias from './components/pages/Categorias';
import Comprar from './components/pages/Compra/Comprar';
import Login from './components/pages/Login';
import DetalleBlog from "./components/pages/DetalleBlog";
import DetalleCategorias from "./components/pages/DetalleCategorias";
import CompraExitosa from "./components/pages/Compra/CompraExitosa";
import CompraError from "./components/pages/Compra/CompraError";
import Carrito from "./components/pages/Carrito/Carrito";
import './App.css';

//Admin;
import HomeAdmin from "./components/pages/Admin/HomeAdmin";
import OrdenesAdmin from "./components/pages/Admin/OrdenesAdmin";
import PerfilAdmin from "./components/pages/Admin/PerfilAdmin";
import ProductoAdmin from "./components/pages/Admin/ProductoAdmin";
import ReportesAdmin from "./components/pages/Admin/ReportesAdmin";
import UsuarioAdmin from "./components/pages/Admin/UsuarioAdmin";
import CategoriaAdmin from "./components/pages/Admin/CategoriaAdmin";

// 🧩 Organismos
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";

function App() {
  return (
    <Router>
      <div className="App">

      <header>
    {/* 🔝 Header visible en todas las páginas */}
      <Header />
        </header>

        <Routes> {/* Contiene todas las rutas disponibles */}
          {/* Cada Route dice qué componente mostrar según la URL */}
          <Route path="/" element={<Home />} />
          <Route path="/Nosotros" element={<Nosotros/>} />
          <Route path="/Productos" element={<Productos/>} />
          <Route path="/Registrarse" element={<Registrarse/>} />
          <Route path="/Blogs" element={<Blogs/>} />
          <Route path="/Contacto" element={<Contacto/>} />
          <Route path="/Comprar" element={<Comprar/>} />
          <Route path="/Ofertas" element={<Ofertas/>} />
          <Route path="/Categorias" element={<Categorias/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/blogs/:id" element={<DetalleBlog />} />
          <Route path="/Categorias/:id" element={<DetalleCategorias />} />
          <Route path="/compra-exitosa" element={<CompraExitosa />} />
          <Route path="/compra-error" element={<CompraError />} />
          <Route path="/carrito" element={<Carrito />} />

          <Route path="/home" element={<HomeAdmin />} />
          <Route path="/ordenes" element={<OrdenesAdmin />} />
          <Route path="/perfil" element={<PerfilAdmin />} />
          <Route path="/productoadmin" element={<ProductoAdmin />} />
          <Route path="/reportes" element={<ReportesAdmin />} />
          <Route path="/usuario" element={<UsuarioAdmin />} />
          <Route path="/categoriaadmin" element={<CategoriaAdmin />} />

        </Routes>
          <div>
            {/* 🔚 Footer global */}
            <Footer />
          </div>

      </div>

    </Router>

    




  );
}

export default App;