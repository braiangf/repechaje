import React, { useState } from "react";
import Jugadores from "./Xjugador";

const Home = () => {
  const [jugadores, setJugadores] = useState(Jugadores);

  const handleEliminarJugador = (id) => {
    const jugadoresActualizados = jugadores.filter((jugador) => jugador.id !== id);
    setJugadores(jugadoresActualizados);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Lista jugadores de Uruguay</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {jugadores.map((jugador) => (
          <div key={jugador.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', margin: '10px', textAlign: 'center' }}>
            <h2>{jugador.nombre}</h2>
            <img src={jugador.image} alt={jugador.nombre} style={{ maxWidth: '200px' }} />
            <p>Edad: {jugador.edad}</p>
            <p>Cuadro: {jugador.cuadro}</p>
            <button onClick={() => handleEliminarJugador(jugador.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
