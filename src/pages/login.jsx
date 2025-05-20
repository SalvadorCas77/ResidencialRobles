 import React from 'react';
 import { useNavigate } from "react-router-dom";
 function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/inicio");
  };

  return (
    <div>
      <h2>Login</h2>
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

export default Login;