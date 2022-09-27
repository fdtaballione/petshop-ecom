import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarritoContextProvider from "./CarritoContextProvider";

import React from "react";
import Productos from "./Productos";
import Servicios from "./Servicios";
import Contacto from "./Contacto";
import Inicio from "./Inicio";

import FooterSite from "./FooterSite";

import Navbar from "./Navbar";

import Carrito from "./Carrito";


const Rutas = () => {
  return (
    <Router>

       

      <CarritoContextProvider>
      <Navbar/>

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
