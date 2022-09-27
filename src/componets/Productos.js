import { React } from "react";
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
  " invisible sm:visible sm:mx-1 md:mx-3 lg:mx-5  h-12 rounded-xl pt-2 ";

let verMensaje = false;

const activarMensajeDeAgregado = () => {
  console.log("enciende");
  verMensaje = true;

  setTimeout(() => {
    verMensaje = false;
    console.log("apaga");
  }, 1500);
};

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
      {verMensaje ? <p>El producto fue agregado al carrito con éxito</p> : null}
      <NavLink
        to="/Carrito"
        className={({ isActive }) =>
          estiloNavButton + (isActive ? "navbar-option-active" : "")
        }
      >
        Carrito
      </NavLink>
      <div className={classContainer}>
        {state.productos.map((prod) => (
          <TarjetaProducto
            key={prod.id}
            producto={prod}
            activarMensaje={activarMensajeDeAgregado}
          />
        ))}
      </div>
    </>
  );
};

export default Productos;
