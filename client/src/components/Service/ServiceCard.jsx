import React, { useEffect } from "react";
import "./Servicecard.css";
import Aos from "aos";
import "aos/dist/aos.css";

const ServiceCard = ({ img, title }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div class="container items-center px-5 py-12 lg:px-20">
      <div class="flex flex-wrap ">
        <div
          class="w-full mx-auto Card  my-4 bg-gray-50 hover:bg-white border rounded-lg shadow-xl "
          data-aos="flip-right"
        >
          <div class="p-6 text-center">
            <img
              alt="team"
              class="flex-shrink-0 object-cover object-center w-16 h-16 mx-auto -mt-12 rounded-full shadow-xl aboslute"
              src={img}
            />
            <h2 class="pt-4 mt-4  mb-8 text-lg h-full font-semibold tracking-widest text-black uppercase title-font">
              {" "}
              {title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
