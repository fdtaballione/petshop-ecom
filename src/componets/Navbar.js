import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

import logo from "../imagenes/logo.png";
import carrito from "../imagenes/carrito.png";
import usuario from "../imagenes/usuario.png";
import lupa from "../imagenes/lupa.png";

const estiloNavButton =
  " bg-orange-200 hover:bg-orange-400 " +
  "font-bold text-center capitalize inline-block align-bottom" +
  " basis-1/4" +
  " invisible sm:visible sm:mx-1 md:mx-3 lg:mx-5  h-12 rounded-xl pt-2 ";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-900 to to-blue-200 text-center font-bold italic">
        Envios gratis en compras mayores a $4000
      </div>
      <nav className="bg-orange-200">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex w-full justify-between h-16">
            <div className="flex w-full justify-between">
              <div className="flex-shrink-0">
                <img className="h-16 w-16" src={logo} alt="logo" />
              </div>
              <div className="hidden md:block md:w-10/12">
                <div className="flex items-end space-x-4 mt-2 ">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      estiloNavButton + (isActive ? "navbar-option-active" : "")
                    }
                  >
                    Inicio
                  </NavLink>
                  <NavLink
                    to="/Productos"
                    className={({ isActive }) =>
                      estiloNavButton + (isActive ? "navbar-option-active" : "")
                    }
                  >
                    Productos
                  </NavLink>
                  <NavLink
                    to="/Servicios"
                    className={({ isActive }) =>
                      estiloNavButton + (isActive ? "navbar-option-active" : "")
                    }
                  >
                    Servicios
                  </NavLink>
                  <NavLink
                    to="/Contacto"
                    className={({ isActive }) =>
                      estiloNavButton + (isActive ? "navbar-option-active" : "")
                    }
                  >
                    Contacto
                  </NavLink>

                  <div className="hidden md:flex md:w-2/3 w-auto mb-2 justify-items-end">
                    <div className="flex border-2 border-orange-300 rounded-xl ">
                      <form className="flex" action="?aaa=bbb" method="POST">
                        <input
                          className="rounded-lg"
                          type="text"
                          placeholder="Buscar"
                        ></input>

                        <button type="submit">
                          <img
                            className="rounded-lg"
                            src={lupa}
                            alt="buscar"
                            width="20"
                          />
                        </button>
                      </form>
                    </div>
                    <div className="flex mx-2">
                      <NavLink
                        to="/Carrito"
                        className={({ isActive }) =>
                          estiloNavButton +
                          (isActive ? "navbar-option-active" : "")
                        }
                      >
                        <img
                          className="rounded-full w-8"
                          src={carrito}
                          alt="carrito"
                        />
                      </NavLink>

                      <NavLink
                        to="/Contacto"
                        className={({ isActive }) =>
                          estiloNavButton +
                          (isActive ? "navbar-option-active" : "")
                        }
                      >
                        <img
                          className="rounded-full w-16"
                          src={usuario}
                          alt="usuario"
                        />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 mt-1 mb-1 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-orange-400 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-400 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/"
                  className="hover:bg-orange-400 text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Inicio
                </a>

                <a
                  href="/Productos"
                  className="text-gray-600 hover:bg-orange-400 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Productos
                </a>

                <a
                  href="/Servicios"
                  className="text-gray-600 hover:bg-orange-400 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Servicios
                </a>

                <a
                  href="/Contacto"
                  className="text-gray-500 hover:bg-orange-400 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contacto
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
