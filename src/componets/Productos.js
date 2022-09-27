import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import TarjetaProducto from "./TarjetaProducto";
import { TYPES } from "./funcionesCarrito";
import { CarritoContext } from "./CarritoContextProvider";
import { useContext } from "react";

const classContainer =
  "bg-amber-200 w-full h-screen flex flex-col items-center justify-center";

const estiloNavButton =
  " bg-yellow-500 hover:bg-yellow-100 " +
  "font-bold text-center inline-block align-bottom border-2 " +
  " basis-1/4" +
  " sm:mx-1 md:mx-3 lg:mx-5 w-96 h-12 rounded-xl pt-2 ";

let verMensaje = false;

const Productos = () => {
  const { state, dispatch } = useContext(CarritoContext);

  const updateState = async () => {
    const PROD_URL = "http://localhost:5000/productos",
      CARRITO_URL = "http://localhost:5000/carrito";

    const resProd = await axios.get(PROD_URL),
      resCarr = await axios.get(CARRITO_URL);

    const listaProd = await resProd.data,
      listaCarrito = await resCarr.data;

    dispatch({ type: TYPES.READ_STATE, payload: [listaProd, listaCarrito] });
  };

  useEffect(() => {
    updateState();
  }, []);

  return (
    <>
      <div className={classContainer}>
        <div className="flex justify-between w-full">
          <NavLink
            to="/Carrito"
            className={({ isActive }) =>
              estiloNavButton + (isActive ? "navbar-option-active" : "")
            }
          >
            Ir a Carrito
          </NavLink>
        </div>

        {state.productos.map((prod) => (
          <TarjetaProducto key={prod.id} producto={prod} />
        ))}
      </div>
    </>
  );
};

export default Productos;
