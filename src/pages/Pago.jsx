import React from 'react';
import { useNavigate } from 'react-router-dom';

function Pago() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // evitar recarga de página
    navigate('/Portada'); // redirigir a portada
  };

  return (
    <div>
      <h4>Página de Pagos</h4>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" />
        <br />
        <label>Fecha:</label>
        <input type="date" />
        <br />
        <label>Cantidad:</label>
        <input type="number" />
        <br />
        <label>Mes a pagar:</label>
        <input type="text" />
        <br />
        <button type="submit">Forma de pago</button>
      </form>
    </div>
  );
}

export default Pago;