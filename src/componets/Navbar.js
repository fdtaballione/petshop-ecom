import {  NavLink } from 'react-router-dom';
import React from 'react'

const estiloNavButton = " bg-yellow-500 hover:bg-yellow-100 "+
  "font-bold text-center inline-block align-bottom border-2 " +
  " basis-1/4" + 
  " invisible sm:visible sm:mx-1 md:mx-3 lg:mx-5  h-12 rounded-xl pt-2 "


const Navbar = () => {
  return (
    <>
        <nav className="flex flex-row">
          <NavLink to="/" className={({isActive}) => estiloNavButton + (isActive ? "navbar-option-active" : "")} >Inicio</NavLink>
          <NavLink to="/Productos" className={({isActive}) => estiloNavButton + (isActive ? "navbar-option-active" : "")} >Productos</NavLink>
          <NavLink to="/Servicios" className={({isActive}) => estiloNavButton + (isActive ? "navbar-option-active" : "")} >Servicios</NavLink>
          <NavLink to="/Contacto" className={({isActive}) => estiloNavButton + (isActive ? "navbar-option-active" : "")} >Contacto</NavLink>
        </nav>
      
    </>
  )
}

export default Navbar