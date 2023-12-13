import React from 'react';

function Jugador({ Jugador }) {
  return (
    <div>
      <p>ID: {Jugador.id}</p>
      <p>Nombre: {Jugador.nombre}</p>
      <p>Edad: {Jugador.edad}</p>
      <p>Cuadro: {Jugador.cuadro}</p>
      {Jugador.imagen && (
        <img src={Jugador.imagen} alt={`Imagen de ${Jugador.nombre}`} style={{ maxWidth: '200px' }} />
      )}
    </div>
  );
}

export default Jugador;
