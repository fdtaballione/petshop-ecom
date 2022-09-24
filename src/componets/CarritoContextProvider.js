import { useReducer } from "react";
import { createContext } from "react";
import { carritoReducer } from "./funcionesCarrito";

export const CarritoContext = createContext();

const carritoEstadoInicial = {
  productos: [],
  carrito: [],
};

const CarritoContextProvider = (props) => {
  const [state, dispatch] = useReducer(carritoReducer, carritoEstadoInicial);

  const data = { state, dispatch };

  return (
    <CarritoContext.Provider value={data}>
      {props.children}
    </CarritoContext.Provider>
  );
};

export default CarritoContextProvider;
