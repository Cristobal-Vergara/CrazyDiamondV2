import React from "react";
import Input from "../atoms/Input";

const ContactForm = () => {
  return (
    <form className="w-50 mx-auto text-start">
      <Input placeholder="Tu nombre" />
      <Input type="email" placeholder="Tu correo" />
      <textarea
        className="form-control mb-3"
        rows="4"
        placeholder="Escribe tu mensaje..."
      ></textarea>
      <button className="btn btn-primary w-100">Enviar mensaje</button>
    </form>
  );
};

export default ContactForm;
