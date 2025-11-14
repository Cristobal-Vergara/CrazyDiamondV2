import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark px-4"
      style={{
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="navbar-brand fw-bold text-light">
        🧭 Admin Dashboard
      </div>

      <div className="d-flex align-items-center">
        {/* Notificación */}
        <button className="btn btn-outline-light btn-sm mx-2">
          <i className="bi bi-bell"></i>
        </button>

        {/* Perfil */}
        <div className="dropdown">
          <button
            className="btn btn-outline-light btn-sm dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-person-circle me-1"></i> Admin
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="dropdownMenuButton"
          >
            <li>
              <a className="dropdown-item" href="#perfil">
                Perfil
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#config">
                Configuración
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item text-danger" href="#logout">
                Cerrar sesión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
