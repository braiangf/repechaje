import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CrearJugador from "./pages/CrearJugador.jsx";
import Jugador from "./pages/JugadorId.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/CrearJugador",
    element: <CrearJugador />,
  },
  {
    path: "/JugadorId",                                            
    element: <Jugador />,                                          
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);