import React from "react";

const Contacto = () => {
  return (
    <div className="container py-5">
      {/* Encabezado */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Contáctanos</h1>
        <p className="text-muted">
          ¿Tienes dudas, sugerencias o quieres colaborar con nosotros?  
          ¡Envíanos un mensaje y te responderemos pronto!
        </p>




  {/* Información de contacto */}
        <div className="row justify-content-center align-items-center g-4">
          <div className="card bg-light border-0 shadow-sm w-100" style={{ maxWidth: "350px" }}>
            <div className="card-body text-center">
              <h4 className="fw-bold text-secondary mb-3">Información</h4>
              <p><i className="bi bi-geo-alt-fill text-danger"></i> Santiago, Chile</p>
              <p><i className="bi bi-envelope-fill text-primary"></i> contacto@crazydiamond.cl</p>
              <p><i className="bi bi-telephone-fill text-success"></i> +56 9 8765 4321</p>

              <hr />

              <h5 className="fw-bold mb-3">Síguenos</h5>
              <div className="d-flex justify-content-center flex-wrap">
                <a href="#" className="btn btn-outline-primary btn-sm m-1">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="btn btn-outline-danger btn-sm m-1">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="btn btn-outline-dark btn-sm m-1">
                  <i className="bi bi-tiktok"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mapa */}
      <div className="mt-5">
        <h4 className="text-center text-secondary mb-3">Nuestra ubicación</h4>
        <div className="ratio ratio-16x9 shadow mx-auto" style={{ maxWidth: "800px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.526628355458!2d-70.64827!3d-33.45694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c589b8c3f30b%3A0x808f31e79f92a6d3!2sSantiago%20de%20Chile!5e0!3m2!1ses!2scl!4v1696700000000!5m2!1ses!2scl"
            title="Mapa Santiago"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacto;