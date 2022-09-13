import React from "react";
import Navbar from "./Navbar";
import logo from "../imagenes/logoppal.png";
import carrito from "../imagenes/carrito.png";
import usuario from "../imagenes/usuario.png";
import lupa from "../imagenes/lupa.png";

const HeaderSite = () => {
  return (
    <>
      <div className="container flex flex-col w-full ">
        <div className="flex justify-center h-8 w-full bg-red-200">
          <div>AQUI IRIA EL BANNER</div>
        </div>
        <div className="flex w-full ">
          <div className="w-2/5">
            <img src={logo} alt="logo Principal" width="200px" />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex w-full flex-col-reverse sm:flex-row">
              <form action="" className="w-4/5">
                <div className="flex">
                  <label htmlFor="busqueda">Buscar</label>
                  <input
                    id="busqueda"
                    type="text"
                    name="busqueda"
                    className="w-4/5"
                  />
                  <img src={lupa} alt="lupa" width="30px" />
                </div>
              </form>
              <div className="flex w-full justify-end">
                <div>
                  <img src={usuario} alt="usuario" width="50px" />
                </div>
                <div>
                  <img src={carrito} alt="carrito" width="30px" />
                </div>
              </div>
            </div>
            <div className="w-full">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSite;
