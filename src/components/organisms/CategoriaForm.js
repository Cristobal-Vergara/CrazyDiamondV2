import React, { useState, useEffect } from "react";

const CategoriaForm = ({ categoriaInicial, onGuardar }) => {
  // Estado local del formulario inicializado con la prop
  const [nombre, setNombre] = useState(categoriaInicial.nombre);
  const [descripcion, setDescripcion] = useState(categoriaInicial.descripcion);
  const [color, setColor] = useState(categoriaInicial.color);

  // ✅ SOLUCIÓN DE ROBUSTEZ:
  // Sincronizar el estado interno cuando la prop 'categoriaInicial' cambie.
  // Esto es necesario para que al hacer clic en "Editar" de otra categoría, 
  // el formulario muestre los datos correctos.
  useEffect(() => {
    setNombre(categoriaInicial.nombre);
    setDescripcion(categoriaInicial.descripcion);
    setColor(categoriaInicial.color);
  }, [categoriaInicial]); 

  const handleSubmit = (e) => {
    e.preventDefault();
    onGuardar({
      ...categoriaInicial,
      nombre,
      descripcion,
      color,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="border p-3 shadow-sm bg-light">
      <div className="mb-3">
        <label className="form-label">Nombre de la Categoría</label>
        <input
          type="text"
          className="form-control"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Descripción</label>
        <textarea
          className="form-control"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          rows="3"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Color</label>
        <select
          className="form-select"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="primary">Azul</option>
          <option value="danger">Rojo</option>
          <option value="warning">Amarillo</option>
          <option value="success">Verde</option>
          <option value="info">Celeste</option>
          <option value="dark">Oscuro</option>
        </select>
      </div>

      <button type="submit" className="btn btn-success w-100">
        Guardar Cambios
      </button>
    </form>
  );
};

export default CategoriaForm;