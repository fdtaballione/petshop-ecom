import React from "react";
import Slider from "./Slider.js";
import CarrousellProd from "./CarrousellProd.js";

const classContainer =
  "bg-orange-300 w-full h-screen flex items-center justify-center ";

const Inicio = () => {
  return (
    <div className={classContainer}>
      <div className="Slideshow">
        <Slider />
      </div>
      <div className="Carousel">
        <CarrousellProd />
      </div>
    </div>
  );
};

export default Inicio;
