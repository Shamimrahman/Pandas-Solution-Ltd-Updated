import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ServiceCard from "./ServiceCard.jsx";
import data from "./data";
const Servicetwo = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div data-aos="fade-up" className="text-center mt-24 md:-mt-24 lg:mt-24">
        <h1 className="sm:text-3xl  text-4xl font-medium text-center title-font text-gray-900 mb-4">
          OUR SERVICES
        </h1>
        <hr className="w-52 mx-auto mt-5 headline"></hr>
      </div>
      <div class="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 -space-y-20 md:-space-y-0 lg:-space-y-0 ">
        {data.map((val) => {
          return (
            <ServiceCard
              key={val.id}
              img={val.image}
              title={val.title}
            ></ServiceCard>
          );
        })}
      </div>
    </div>
  );
};

export default Servicetwo;
