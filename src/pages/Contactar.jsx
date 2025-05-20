import React from 'react';
 function Contactar() {
  return (
    <div>
      <h4>Contactar</h4>
      <form>
        <label>Nombre:</label>
        <input type="text" />
        <br />
        <label>Teléfono:</label>
        <input type="tel" />
        <br />
        <label>Duda o comentario:</label>
        <textarea></textarea>
        <br />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Contactar;