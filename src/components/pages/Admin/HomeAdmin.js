import React from "react";
import DashboardLayout from "../../organisms/DashboardLayout";
import { Link } from "react-router-dom";

const HomeAdmin = () => {
  const stats = {
    compras: 1020,
    productos: 480,
    usuarios: 320,
    ordenes: 145,
    reportes: 25,
  };

  return (
    <DashboardLayout>
      <div className="container mt-4">
        <h2 className="mb-4 text-center fw-bold text-primary">
          Panel de Administración
        </h2>

        {/* ===== SECCIÓN DE MÉTRICAS ===== */}
        <div className="row text-center mb-5 g-4">
          <div className="col-md-2">
            <div className="card shadow border-0 bg-light h-100">
              <div className="card-body">
                <i className="bi bi-cart4 display-6 text-success"></i>
                <h6 className="card-title mt-2 text-uppercase fw-bold">Compras</h6>
                <h4 className="fw-bold text-dark">{stats.compras}</h4>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card shadow border-0 bg-light h-100">
              <div className="card-body">
                <i className="bi bi-box-seam display-6 text-primary"></i>
                <h6 className="card-title mt-2 text-uppercase fw-bold">Productos</h6>
                <h4 className="fw-bold text-dark">{stats.productos}</h4>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card shadow border-0 bg-light h-100">
              <div className="card-body">
                <i className="bi bi-people-fill display-6 text-secondary"></i>
                <h6 className="card-title mt-2 text-uppercase fw-bold">Usuarios</h6>
                <h4 className="fw-bold text-dark">{stats.usuarios}</h4>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card shadow border-0 bg-light h-100">
              <div className="card-body">
                <i className="bi bi-receipt display-6 text-info"></i>
                <h6 className="card-title mt-2 text-uppercase fw-bold">Órdenes</h6>
                <h4 className="fw-bold text-dark">{stats.ordenes}</h4>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card shadow border-0 bg-light h-100">
              <div className="card-body">
                <i className="bi bi-bar-chart-line display-6 text-warning"></i>
                <h6 className="card-title mt-2 text-uppercase fw-bold">Reportes</h6>
                <h4 className="fw-bold text-dark">{stats.reportes}</h4>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SECCIÓN DE ACCESOS RÁPIDOS ===== */}
        <h4 className="text-secondary mb-3 text-center">Accesos Rápidos</h4>

        <div className="row g-4">
          {/* 🏠 Home */}
          <div className="col-md-4 col-lg-4">
            <div className="card shadow-sm border-0 text-center h-100 bg-light">
              <div className="card-body">
                <i className="bi bi-house display-5 text-primary"></i>
                <h5 className="mt-3">Inicio</h5>
                <p>Resumen general del sistema.</p>
                <Link to="/home" className="btn btn-outline-primary">
                  Ir al Inicio
                </Link>
              </div>
            </div>
          </div>

          {/* 📦 Productos */}
          <div className="col-md-4 col-lg-4">
            <div className="card shadow-sm border-0 text-center h-100 bg-light">
              <div className="card-body">
                <i className="bi bi-box display-5 text-success"></i>
                <h5 className="mt-3">Productos</h5>
                <p>Administra los productos del catálogo.</p>
                <Link to="/productoadmin" className="btn btn-success">
                  Ver Productos
                </Link>
              </div>
            </div>
          </div>

          {/* 👥 Usuarios */}
          <div className="col-md-4 col-lg-4">
            <div className="card shadow-sm border-0 text-center h-100 bg-light">
              <div className="card-body">
                <i className="bi bi-people display-5 text-secondary"></i>
                <h5 className="mt-3">Usuarios</h5>
                <p>Gestiona los usuarios registrados.</p>
                <Link to="/usuario" className="btn btn-secondary">
                  Ver Usuarios
                </Link>
              </div>
            </div>
          </div>

          {/* 📑 Órdenes */}
          <div className="col-md-4 col-lg-4">
            <div className="card shadow-sm border-0 text-center h-100 bg-light">
              <div className="card-body">
                <i className="bi bi-receipt display-5 text-info"></i>
                <h5 className="mt-3">Órdenes</h5>
                <p>Gestiona las órdenes y pedidos.</p>
                <Link to="/ordenes" className="btn btn-info text-white">
                  Ver Órdenes
                </Link>
              </div>
            </div>
          </div>

          {/* 📊 Reportes */}
          <div className="col-md-4 col-lg-4">
            <div className="card shadow-sm border-0 text-center h-100 bg-light">
              <div className="card-body">
                <i className="bi bi-bar-chart display-5 text-warning"></i>
                <h5 className="mt-3">Reportes</h5>
                <p>Visualiza reportes y estadísticas.</p>
                <Link to="/reportes" className="btn btn-warning text-white">
                  Ver Reportes
                </Link>
              </div>
            </div>
          </div>

          {/* 👤 Perfil */}
          <div className="col-md-4 col-lg-4">
            <div className="card shadow-sm border-0 text-center h-100 bg-light">
              <div className="card-body">
                <i className="bi bi-person-circle display-5 text-danger"></i>
                <h5 className="mt-3">Perfil</h5>
                <p>Actualiza tu información personal.</p>
                <Link to="/perfil" className="btn btn-danger">
                  Ir al Perfil
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HomeAdmin;
