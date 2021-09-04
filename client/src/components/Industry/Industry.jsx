import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Industrycard from "./Industrycard";
import data from "./data";

const Industry = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div data-aos="fade-up" className="text-center mt-24">
        <h1 className="sm:text-3xl  text-4xl font-medium text-center title-font text-gray-900 mb-4">
          INDUSTRIES WE SERVE
        </h1>
        <hr className="w-52 mx-auto mt-5 headline"></hr>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-2 mt-10">
        {data.map((val, id) => {
          return (
            <Industrycard
              name={val.name}
              logo={val.logo}
              id={KeyboardEvent.val}
              data-aos="flip-right"
            ></Industrycard>
          );
        })}
      </div>
    </div>
  );
};

export default Industry;
