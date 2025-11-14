// src/components/pages/Registrarse.js
import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";

const Registrarse = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Leer los usuarios guardados
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Verificar si el correo ya existe
    const exists = users.find((u) => u.email === email);
    if (exists) {
      alert("⚠️ Este correo ya está registrado");
      return;
    }

    // Guardar nuevo usuario
    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("✅ Registro exitoso, ahora puedes iniciar sesión");
    navigate("/login");
  };

  return (
    <div className="container py-5 text-center">
      <h2 className="mb-4">Crear cuenta</h2>
      <form className="w-50 mx-auto text-start" onSubmit={handleRegister}>
        <Input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="Registrarse" color="success" type="submit" />
      </form>
      <p className="mt-3">
        ¿Ya tienes cuenta?{" "}
        <a href="/login" className="text-decoration-none text-warning">
          Inicia sesión
        </a>
      </p>
    </div>
  );
};

export default Registrarse;
