import { useParams } from "react-router-dom";
import Jugadores from "./Xjugador";
import Jugador from "../Jugador"

function JugadorId() {
  const { id } = useParams();
  const infoJugador = Jugadores.find((jugador) => jugador.id === id);

  return <Jugador Jugador={infoJugador} />;
}

export default JugadorId;

