import React, { useState } from 'react';

function CrearJugador() {
  const [jugadorInfo, setJugadorInfo] = useState({
    id: '',
    nombre: '',
    edad: '',
    cuadro: '',
    imagen: '', // Almacena la URL de la imagen
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJugadorInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setJugadorInfo((prevInfo) => ({
        ...prevInfo,
        imagen: reader.result, // Almacena la URL de la imagen
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const jugadoresGuardados = JSON.parse(localStorage.getItem('jugadores')) || [];
    const nuevoJugador = { ...jugadorInfo };
    jugadoresGuardados.push(nuevoJugador);
    localStorage.setItem('jugadores', JSON.stringify(jugadoresGuardados));

    
    setJugadorInfo({
      id: '',
      nombre: '',
      edad: '',
      cuadro: '',
      imagen: '',
    });
  };

  return (
    <div>
      <h1>Crear Jugador</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" name="id" value={jugadorInfo.id} onChange={handleChange} />
        </label>
        <br />
        <label>
          Nombre:
          <input type="text" name="nombre" value={jugadorInfo.nombre} onChange={handleChange} />
        </label>
        <br />
        <label>
          Edad:
          <input type="text" name="edad" value={jugadorInfo.edad} onChange={handleChange} />
        </label>
        <br />
        <label>
          Cuadro:
          <input type="text" name="cuadro" value={jugadorInfo.cuadro} onChange={handleChange} />
        </label>
        <br />
        <label>
          Subir Imagen:
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </label>
        <br />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default CrearJugador;
