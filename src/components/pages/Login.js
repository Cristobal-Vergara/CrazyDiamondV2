// src/components/pages/Login.js
import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Leer usuarios registrados
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Buscar si existe el usuario con ese email y password
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("user", JSON.stringify(user)); // guarda sesión activa
      alert("✅ Inicio de sesión exitoso");
      navigate("/"); // redirige al Home
    } else {
      alert("❌ Credenciales incorrectas o usuario no registrado");
    }
  };

  return (
    <div className="container py-5 text-center">
      <h2 className="mb-4">Iniciar Sesión</h2>
      <form className="w-50 mx-auto text-start" onSubmit={handleLogin}>
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
        <Button text="Ingresar" color="primary" type="submit" />
      </form>
      <p className="mt-3">
        ¿No tienes cuenta?{" "}
        <a href="/registrarse" className="text-decoration-none text-warning">
          Regístrate aquí
        </a>
      </p>
    </div>
  );
};

export default Login;
