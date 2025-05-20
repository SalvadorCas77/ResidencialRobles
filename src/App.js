import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Opcion from './pages/navegar/Opcion';
import Acceso from './pages/Acceso';
import Portada from './pages/Portada';
import Aviso from './pages/Aviso';
import Contactar from './pages/Contactar';
import Pago from './pages/Pago';
import './App.css' 


import logoResidencial from './imagen/Logo_residencial.png';

function App() {
  const location = useLocation();
  
  return (
        <div className="App">
          {location.pathname !== '/' && (
        <>
          <div className="logo-fixed">
            <img src={logoResidencial} alt="Logo Residencial" />
          </div>

          <div className="menu-container">
            <Opcion />
          </div>
        </>
      )}
          <Routes>
            <Route path="/" element={<Acceso />} />
            <Route path="/Portada" element={<Portada />} />
            <Route path="/Pago" element={<Pago />} />
            <Route path="/Aviso" element={<Aviso />} />
            <Route path="/Contactar" element={<Contactar />} />
          </Routes>
        </div>
  );
}


export default App;
