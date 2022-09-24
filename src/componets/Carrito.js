import { useContext } from "react";
import { React } from "react";
import { CarritoContext } from "./CarritoContextProvider";
import ProductoEnCarrito from "./ProductoEnCarrito";
import { TYPES, eliminaProductoEnCarrito } from "./funcionesCarrito";

const classContainer =
  "bg-amber-200 w-full  flex flex-col items-center justify-center";

const estiloNavButton =
  " bg-yellow-600 hover:bg-yellow-200 w-96 " +
  "font-bold text-center inline-block align-bottom border-2 " +
  " basis-1/4" +
  " invisible sm:visible sm:mx-1 md:mx-3 lg:mx-5  h-12 rounded-xl pt-2 ";

const Carrito = () => {
  const { state, dispatch } = useContext(CarritoContext);

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
          {state.carrito.map((prod) => (
            <ProductoEnCarrito producto={prod} key={prod.id} />
          ))}
        </div>
      </>
    );
  } else {
    return <h2>El carrito está vacío</h2>;
  }
};

export default Carrito;
