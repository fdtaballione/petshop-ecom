import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from 'react'
import Productos from "./Productos";
import Servicios from "./Servicios";
import Contacto from "./Contacto";
import Inicio from "./Inicio";
import HeaderSite from "./HeaderSite";
import FooterSite from "./FooterSite";

const Rutas = () => {
  return (
    <Router>
        <HeaderSite/>
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