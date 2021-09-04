import React, { useEffect } from "react";
import "./ProductCard.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const ProductCard = ({ image, name, description, price, plink }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      class="  font-sans  w-full min-h-screen flex flex-wrap justify-center items-center gap-3 py-5"
      data-aos="flip-right"
    >
      <div class=" -mt-28  blur-lg    w-10/12   rounded-3xl p-3 text-gray-200 border  border-gray-300 shadow-2xl">
        <div class="w-full  h-full mb-3 pb-3 border-b border-1 border-white">
          <h3 class="text-xl text-center ">{name}</h3>
        </div>
        <div>
          <img src={image} alt="image" class="w-full h-48 object-cover mb-2" />
          <p class="mb-3 tracking-wide text-base text-shadow">{description}</p>
          <div className="flex justify-center items-center">
            <Link to={plink}>
              <button class="backdrop  bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
                Request For Demo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
