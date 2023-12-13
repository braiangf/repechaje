import React from "react";
import Jugador from "../Jugador";
import Jugadores from "./Xjugador";

function Home() {
  return (
    <div>
      {Jugadores.map((jugador) => (
        <Jugador key={jugador.id} Jugador={jugador} />
      ))}
    </div>
  );
}

export default Home;
