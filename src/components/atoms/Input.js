import React from "react";

const Input = ({ type = "text", placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      className="form-control mb-3"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;