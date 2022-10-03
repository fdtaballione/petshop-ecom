import { useContext, useState } from "react";
import { React } from "react";
import { CarritoContext } from "./CarritoContextProvider";
import ProductoEnCarrito from "./ProductoEnCarrito";
import {
  TYPES,
  eliminaProductoEnCarrito,
  actualizarCompra,
} from "./funcionesCarrito";
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

  const [msgPagado, setMsgPagado] = useState(false);

  const confirmarPago = (e) => {
    let compra = state.compra.find((ele) => ele.id === 1);

    compra = { ...compra, numero: compra.numero + 1 };
    vaciarCarrito();
    actualizarCompra(compra);
    setMsgPagado(true);
    setEstadoModal(false);
    setTimeout(() => {
      setMsgPagado(false);
      window.location = "/Productos";
    }, 3000);
  };

  const vaciarCarrito = () => {
    state.carrito.forEach((prod) => {
      eliminaProductoEnCarrito(prod.id);
    });
    dispatch({
      type: TYPES.CLEAR_CART,
    });
  };

  const sumarCompra = () => {
    let suma = 0;
    state.carrito.forEach((producto) => {
      suma = suma + producto.cantidad * producto.precio;
    });
    return suma;
  };

  if (state.carrito.length > 0) {
    return (
      <>
        <div className={classContainer}>
          <div className="flex">
            <div className="flex flex-col sm:flex-row w-full">
              <div className="text-yellow-800 my-2 mx-2 text-lg">
                Nº Carrito: {state.compra[0].numero}
              </div>
              <div className="text-green-800 my-2 mx-2 text-lg">
                Total de compra {sumarCompra()}
              </div>
            </div>
            <div className="flex flex-col justify-between w-full sm:flex-row sm:justify-start">
              <button
                onClick={() => vaciarCarrito()}
                className={estiloNavButton}
              >
                Vaciar el Carrito
              </button>
              <button onClick={() => abrirPago()} className={estiloNavButton}>
                Pagar
              </button>
            </div>
          </div>
          {state.carrito.map((prod) => (
            <ProductoEnCarrito producto={prod} key={prod.id} />
          ))}
        </div>
        <PagoCompra
          estadoModal={estadoModal}
          setEstadoModal={setEstadoModal}
          total={sumarCompra()}
          confirmarPago={confirmarPago}
        />
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
          <div>
            {msgPagado ? (
              <div className="px-5  text-green-700">
                El pago se realizó correctamente
              </div>
            ) : (
              <div className="w-12"></div>
            )}
          </div>
        </div>
      </>
    );
  }
};

export default Carrito;
