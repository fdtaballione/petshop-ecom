import { useContext } from "react";
import { React, useState } from "react";
import { CarritoContext } from "./CarritoContextProvider";
import {
  TYPES,
  nuevoProdACarrito,
  modificaProductoEnCarrito,
} from "./funcionesCarrito";

const classContenedorTarjera =
  "w-full h-56 flex flex-row shadow-xl bg-white my-1 ";

const classBotonMasMenos =
  "bg-amber-400 rounded-full font-black w-8 h-8 hover:bg-amber-200 text-lg";

const classBotonMasMenosDisablesd =
  "bg-amber-100 rounded-full font-black w-8 h-8 text-lg";
const TarjetaProducto = (props) => {
  const producto = props.producto;
  const [cantidad, setCantidad] = useState(1);
  const agregar = () => setCantidad(cantidad + 1);
  const disminuir = () => setCantidad(cantidad - 1);

  const { dispatch, state } = useContext(CarritoContext);
  const [msgAgregado, setMsgAgregado] = useState(false);

  const agregarACarrito = (id, cantidad) => {
    const activarMensaje = () => {
      setMsgAgregado(true);

      setTimeout(() => {
        setMsgAgregado(false);
      }, 2000);
    };

    let itemInCart = state.carrito.find((prod) => prod.id === id);
    try {
      if (itemInCart) {
        itemInCart.cantidad = itemInCart.cantidad + cantidad;
        modificaProductoEnCarrito(itemInCart);
        dispatch({
          type: TYPES.UPDATE_ITEM,
          payload: { id: id, newItem: itemInCart },
        });
      } else {
        let newItem = state.productos.find((producto) => producto.id === id);
        newItem = { ...newItem, cantidad: cantidad };
        nuevoProdACarrito(newItem);
        dispatch({
          type: TYPES.ADD_TO_CARD,
          payload: { newItem },
        });
      }
      activarMensaje();
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      <div className={classContenedorTarjera}>
        <div className="w-40 w-full flex items-center justify-center">
          <img
            src={process.env.PUBLIC_URL + "/imagenes/" + producto.imagen}
            alt="Producto01"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center h-full w-full">
          <div className="flex flex-col w-full px-2 sm:w-4/6">
            <div className="font-serif text-xl font-bold">
              {producto.nombre}
            </div>
            <p className="font-serif">{producto.descripcion}</p>
            <div className="flex w-full">
              <div className="text-blue-600 font-bold">$ {producto.precio}</div>
              <div>
                {msgAgregado ? (
                  <div className="px-5  text-green-700">
                    Producto agregado con éxito
                  </div>
                ) : (
                  <div className="w-12"></div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center px-4  bg-white h-full w-full sm:w-2/6 ">
            <div className="flex flex-row items-center justify-center sm:flex-col  ">
              <div className="flex flex-row mr-6 sm:mr-0 sm:mb-2 w-full justify-center content-center ">
                <button
                  className={
                    cantidad <= 1
                      ? classBotonMasMenosDisablesd
                      : classBotonMasMenos
                  }
                  onClick={() => disminuir()}
                  disabled={cantidad <= 1}
                >
                  -
                </button>

                <div className="px-3">{cantidad}</div>
                <button
                  className={classBotonMasMenos}
                  onClick={() => agregar()}
                >
                  +
                </button>
              </div>
              <div className=" flex w-full justify-center ">
                <button
                  className="shadow-xl border-2 border-orange-400 p-1 rounded bg-orange-500 hover:bg-orange-200"
                  onClick={() => agregarACarrito(producto.id, cantidad)}
                >
                  Agregar a carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TarjetaProducto;
