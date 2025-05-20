import React from 'react';
 function Pago() {
  return (
    <div>
      <h4>Página de Pagos</h4>
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

export default Pago;