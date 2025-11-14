import React from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ useNavigate en lugar de useHistory

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate(); // ✅ hook correcto en React Router v6

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login"); // ✅ reemplaza history.push("/login")
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          CRAZY DIAMOND
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/nosotros">Sobre Nosotros</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/productos">Productos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/ofertas">Ofertas</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/categorias">Categorías</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/blogs">Blogs</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/comprar">Comprar</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/carrito">Carrito</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/home">Admin</Link></li>
          </ul>

          <div className="d-flex align-items-center">
            {user ? (
              <>
                <span className="text-white me-3">👋 {user.email}</span>
                <button
                  onClick={handleLogout}
                  className="btn btn-outline-light btn-sm"
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <>
                <Link className="btn btn-outline-light btn-sm me-2" to="/login">
                  Iniciar sesión
                </Link>
                <Link className="btn btn-warning btn-sm" to="/registrarse">
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
