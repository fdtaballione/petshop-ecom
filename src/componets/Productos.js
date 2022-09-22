import { React } from "react";
import { NavLink } from "react-router-dom";
import TarjetaProducto from "./TarjetaProducto";
import CarrousellProd from "./CarrousellProd.js";
import { productos } from "./funcionesCarrito";
const classContainer =
  "bg-amber-200 w-full h-screen flex flex-col items-center justify-center";

const estiloNavButton =
  " bg-yellow-500 hover:bg-yellow-100 " +
  "font-bold text-center inline-block align-bottom border-2 " +
  " basis-1/4" +
  " invisible sm:visible sm:mx-1 md:mx-3 lg:mx-5  h-12 rounded-xl pt-2 ";

const Productos = () => {
  return (
    <>
      <NavLink
        to="/Carrito"
        className={({ isActive }) =>
          estiloNavButton + (isActive ? "navbar-option-active" : "")
        }
      >
        Carrito
      </NavLink>
      <div className={classContainer}>
        {productos.map((prod) => (
          <TarjetaProducto key={prod.id} producto={prod} />
        ))}
      </div>
      <CarrousellProd />
    </>
  );
};

export default Productos;
