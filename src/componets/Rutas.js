import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarritoContextProvider from "./CarritoContextProvider";

import React from "react";
import Productos from "./Productos";
import Servicios from "./Servicios";
import Contacto from "./Contacto";
import Inicio from "./Inicio";
import HeaderSite from "./HeaderSite";
import FooterSite from "./FooterSite";
import Carrito from "./Carrito";

const Rutas = () => {
  return (
    <Router>
      <CarritoContextProvider>
        <HeaderSite />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Carrito" element={<Carrito />} />
        </Routes>
        <FooterSite />
      </CarritoContextProvider>
    </Router>
  );
};

export default Rutas;
