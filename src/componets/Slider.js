import React from "react";
import Slider from "react-slick";

import Img1 from "./../imagenes/slide1.png";
import Img2 from "./../imagenes/slide2.png";

const Slidera = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="slider" className="container">
      <Slider {...settings}>
        <div className="slick-list">
          <a href="Productos.js">
            <img src={Img1} alt="" id="imagen" />
          </a>
        </div>
        <div className="slick-list">
          <a href="Productos.js">
            <img src={Img2} alt="" id="imagen" />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default Slidera;
