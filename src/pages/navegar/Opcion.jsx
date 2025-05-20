import React from 'react';
import { Link } from 'react-router-dom';

function Opcion() {
  return (
    <nav className="menu-nav">
      <ul>
        <li><Link to="/Portada">Portada</Link></li>
        <li><Link to="/Pago">Pago</Link></li>
        <li><Link to="/Aviso">Aviso</Link></li>
        <li><Link to="/Contactar">Contactar</Link></li>
        <li><Link to="/">Cerrar sesión</Link></li>
      </ul>
    </nav>
  );
}

export default Opcion;