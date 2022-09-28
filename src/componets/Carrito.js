import { useContext, useState } from "react";
import { React } from "react";
import { CarritoContext } from "./CarritoContextProvider";
import ProductoEnCarrito from "./ProductoEnCarrito";
import { TYPES, eliminaProductoEnCarrito } from "./funcionesCarrito";
import PagoCompra from "./PagoCompra";

const classContainer = "bg-amber-200 w-full min-h-screen flex flex-col ";

const estiloNavButton =
  " bg-amber-500 hover:bg-amber-300 w-28" +
  "font-bold text-center align-bottom border-2 " +
  " mx-1 my-1 rounded-xl p-2 ";

const Carrito = () => {
  const { state, dispatch } = useContext(CarritoContext);

  const [estadoModal, setEstadoModal] = useState(false);

  const abrirPago = () => {
    setEstadoModal(true);
  };

  const vaciarCarrito = () => {
    state.carrito.forEach((prod) => {
      eliminaProductoEnCarrito(prod.id);
    });
    dispatch({
      type: TYPES.CLEAR_CART,
    });
  };

  if (state.carrito.length > 0) {
    return (
      <>
        <div className={classContainer}>
          <button onClick={() => vaciarCarrito()} className={estiloNavButton}>
            Vaciar el Carrito
          </button>
          <button onClick={() => abrirPago()} className={estiloNavButton}>
            Pagar
          </button>
          {state.carrito.map((prod) => (
            <ProductoEnCarrito producto={prod} key={prod.id} />
          ))}
        </div>
        <PagoCompra estadoModal={estadoModal} setEstadoModal={setEstadoModal} />
      </>
    );
  } else {
    return (
      <>
        <div className={classContainer}>
          <button
            disabled
            onClick={() => vaciarCarrito()}
            className={estiloNavButton}
          >
            El carrito está vacío
          </button>
        </div>
      </>
    );
  }
};

export default Carrito;
