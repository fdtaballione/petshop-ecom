import React from "react";


const classContenedorTarjera =
  "w-full h-56 flex flex-row shadow-xl bg-white my-1 ";

  const classBotonMasMenos =
  "bg-orange-800 rounded-full font-black w-8 h-8 hover:bg-orange-700 text-lg"

const TarjetaProducto = (props) => {
  const producto = props.producto;

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
                <div className="text-blue-600 font-bold">$ {producto.precio}</div>
          </div>
          <div className="w-full flex flex-col justify-center px-4  bg-white h-full w-full sm:w-2/6 ">
                <div className="flex flex-row items-center justify-center sm:flex-col  ">
                    <div className="flex flex-row mr-6 sm:mr-0 sm:mb-2 w-full justify-center content-center ">
                       <button className={classBotonMasMenos}>+</button>
                       <div className="px-3">1</div>
                       <button className={classBotonMasMenos}>-</button>
                    </div>
                    <div className=" flex w-full justify-center ">
                        <button className="shadow-xl border-2 border-orange-400 p-1 rounded bg-orange-500 hover:bg-orange-200">
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
