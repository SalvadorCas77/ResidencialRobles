import React from 'react';
import { useNavigate } from 'react-router-dom';

function Contactar() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // evita recarga
    navigate('/Portada'); // redirige a portada
  };

  return (
    <div>
      <h4>Contactar</h4>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" />
        <br />
        <label>Teléfono:</label>
        <input type="tel" />
        <br />
        <label>Duda o comentario:</label>
        <textarea></textarea>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contactar;