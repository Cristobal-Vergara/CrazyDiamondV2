// src/components/atoms/Button.js
import React from "react";

const Button = ({ text, color = "primary", link, onClick, type = "button" }) => {
  // Si hay link → renderiza como <a>, si no → <button>
  if (link) {
    return (
      <a href={link} className={`btn btn-${color} m-1`}>
        {text}
      </a>
    );
  }

  return (
    <button
      type={type} // puede ser "button" o "submit"
      className={`btn btn-${color} m-1`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;