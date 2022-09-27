import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from 'react'
import Productos from "./Productos";
import Servicios from "./Servicios";
import Contacto from "./Contacto";
import Inicio from "./Inicio";

import FooterSite from "./FooterSite";
import Navbar from "./Navbar";

const Rutas = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/Productos" element={<Productos />} />
            <Route path="/Servicios" element={<Servicios /> }/>
            <Route path="/Contacto" element={<Contacto />}/>
        </Routes>
        <FooterSite/>
    </Router>
  )
}

export default Rutas