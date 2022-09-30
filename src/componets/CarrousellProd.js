import React, { useRef } from "react";
import Marca1 from "./../imagenes/marcas1.png";
import Marca2 from "./../imagenes/marcas2.png";
import Marca3 from "./../imagenes/marcas3.png";
import Marca4 from "./../imagenes/marcas4.png";
import Marca5 from "./../imagenes/marcas5.png";
import Marca6 from "./../imagenes/marcas6.png";
import Marca7 from "./../imagenes/marcas7.png";
import Marca8 from "./../imagenes/marcas8.png";
import Marca9 from "./../imagenes/marcas9.png";

const CarrousellProd = () => {
  const slider = useRef();
  const images = [...Array(25).keys()];

  return (
    <div className="mx-24">
      <div className="flex items-center justify-center w-full h-full ">
        <button
          className="bg-gray-500 mx-2"
          onClick={() => (slider.current.scrollLeft -= 200)}
        >
          <svg
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fillRule="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              style={{
                strokeWidth: "2",
                strokeLinejoin: "round",
                strokeLinecap: "round",
              }}
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <div
          ref={slider}
          className="snap-x overflow-x-auto scroll-smooth  flex items-center justify-start"
        >
          <div
            className="marcasLogos"
            class="snap-start flex flex-shrink-0 w-auto h-56 mx-4 "
          >
            <img
              src={Marca1}
              alt=""
              class="object-cover object-center w-full"
            />
            <img
              src={Marca2}
              alt=""
              class="object-cover object-center w-full"
            />
            <img
              src={Marca3}
              alt=""
              class="object-cover object-center w-full"
            />
            <img
              src={Marca4}
              alt=""
              class="object-cover object-center w-full"
            />
            <img
              src={Marca5}
              alt=""
              class="object-cover object-center w-full"
            />
            <img
              src={Marca6}
              alt=""
              class="object-cover object-center w-full"
            />
            <img
              src={Marca7}
              alt=""
              class="object-cover object-center w-full"
            />
            <img
              src={Marca8}
              alt=""
              class="object-cover object-center w-full"
            />
            <img
              src={Marca9}
              alt=""
              class="object-cover object-center w-full"
            />
          </div>
        </div>

        <button
          className="bg-gray-500 mx-2"
          onClick={() => (slider.current.scrollLeft += 200)}
        >
          <svg
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fillRule="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              style={{
                strokeWidth: "2",
                strokeLinejoin: "round",
                strokeLinecap: "round",
              }}
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CarrousellProd;
