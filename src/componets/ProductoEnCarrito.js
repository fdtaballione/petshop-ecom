import { React } from "react";
import { useContext } from "react";
import { TYPES } from "./funcionesCarrito";
import { CarritoContext } from "./CarritoContextProvider";

const classContenedorTarjera =
  "w-full h-56 flex flex-row shadow-xl bg-white my-1 ";

const classBotonMasMenos =
  "bg-orange-800 rounded-full font-black  h-8 px-2 hover:bg-orange-700 text-lg";

const classBotonMasMenosDisablesd =
  "bg-orange-200 rounded-full font-black h-8 px-2 text-lg";

const ProductoEnCarrito = (props) => {
  const producto = props.producto;
  const { dispatch } = useContext(CarritoContext);

  const QuitarUnoDeCarrito = (id) => {
    dispatch({
      type: TYPES.REMOVE_ONE_PRODUCT,
      payload: { id: id },
    });
  };

  const QuitarTodosDeCarrito = (id) => {
    dispatch({
      type: TYPES.REMOVE_ALL_PRODUCTS,
      payload: { id: id },
    });
  };

  return (
    <>
      <div className={classContenedorTarjera} key={producto.id}>
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
            <div className="text-blue-600 font-bold">$ {producto.precio}</div>
          </div>
          <div className="w-full flex flex-col justify-center px-4  bg-white h-full w-full sm:w-2/6 ">
            <div className="flex flex-row items-center justify-center sm:flex-col  ">
              <div className="flex flex-row mr-6 sm:mr-0 sm:mb-2 w-full justify-center content-center ">
                <button
                  onClick={() => QuitarUnoDeCarrito(producto.id)}
                  className={
                    producto.cantidad <= 1
                      ? classBotonMasMenosDisablesd
                      : classBotonMasMenos
                  }
                  disabled={producto.cantidad <= 1}
                >
                  - 1
                </button>
                <div className="px-3">{producto.cantidad}</div>
                <button
                  className={classBotonMasMenos}
                  onClick={() => QuitarTodosDeCarrito(producto.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductoEnCarrito;
