import { useContext } from "react";
import { React } from "react";
import { CarritoContext } from "./CarritoContextProvider";
import ProductoEnCarrito from "./ProductoEnCarrito";

const classContainer =
  "bg-amber-200 w-full h-screen flex flex-col items-center justify-center";

const producto = [
  {
    nombre: "Alimento Balanceado Vital Balance",
    descripcion:
      "Bolsa de 20 kg para razas medianas con alto contenido proteico",
    precio: 7800,
    imagen: "Prod01.jpg",
    cantidad: 5,
  },
  {
    nombre: "Alimento Balanceado Royal Canin",
    descripcion:
      "Bolsa de 10 kg para razas Pequeñas con alto contenido proteico",
    precio: 4500,
    imagen: "Prod02.jpg",
    cantidad: 4,
  },
];

const Carrito = () => {
  const { state } = useContext(CarritoContext);
  return (
    <>
      <div className={classContainer}>
        {state.map((prod) => (
          <ProductoEnCarrito producto={prod} key={prod.id} />
        ))}
      </div>
    </>
  );
};

export default Carrito;
