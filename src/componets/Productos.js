 
 import React from 'react'
 import TarjetaProducto from './TarjetaProducto'
 import CarrousellProd from "./CarrousellProd.js"
 
 const classContainer = "bg-amber-200 w-full h-screen flex flex-col items-center justify-center"

 const producto = [ {
  nombre: "Alimento Balanceado Vital Balance",
  descripcion: "Bolsa de 20 kg para razas medianas con alto contenido proteico",
  precio: 7800,
  imagen: 'Prod01.jpg'
},
{
  nombre: "Alimento Balanceado Royal Canin",
  descripcion: "Bolsa de 10 kg para razas Pequeñas con alto contenido proteico",
  precio: 4500,
  imagen: 'Prod02.jpg'
}
]


 const Productos = () => {
  return (
    <>
    <div className={classContainer}>
          <TarjetaProducto producto={producto[0]}/>
          <TarjetaProducto producto={producto[1]}/>
    </div>
    <CarrousellProd/>
    </>
  )
 }
 
 export default Productos
