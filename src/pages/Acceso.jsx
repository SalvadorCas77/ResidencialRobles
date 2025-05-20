import React from 'react';
 import { useNavigate } from "react-router-dom";
 function Acceso() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Portada");
  };

  return (
    <div>
      <h4>Bienvenido ingrese sus credenciales</h4>
      <form onSubmit={handleSubmit}>
        <label>Correo:</label>
        <input type="email" />
        <br />
        <label>Contraseña:</label>
        <input type="password" />
        <br />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Acceso;