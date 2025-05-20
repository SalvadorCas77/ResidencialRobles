 import React from 'react';
 function pagos() {
  return (
    <div>
      <h2>Página de Pagos</h2>
      <form>
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
        <button>Forma de pago</button>
      </form>
    </div>
  );
}

export default pagos;