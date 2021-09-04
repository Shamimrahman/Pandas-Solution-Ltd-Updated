import React, { useEffect } from "react";
import WebIcon from "@material-ui/icons/Web";
import { FaBeer } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { GiNothingToSay } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";
import { SiMaterialdesign } from "react-icons/si";
import { GiLightBulb } from "react-icons/gi";
import Aos from "aos";
import "aos/dist/aos.css";

const Motive = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="text-gray-600 body-font ">
      <div className="container px-5 py-24 mx-auto -mt-8 md:-mt-4">
        <div data-aos="fade-up" className="text-center mb-20">
          <h1 className="sm:text-3xl  text-4xl font-medium text-center title-font text-gray-900 mb-4">
            THE VALUES THAT DRIVE US
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            To know about us, have a look at the values that we live by
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5  sm:grid-cols-2 sm:mx-auto sm:mb-2 -mx-2 -mt-5">
          <div className="p-2 sm:w-1/2 w-full " data-aos="flip-down">
            <div className="bg-orange-100 rounded flex p-4 h-full items-center">
              <IoIosPeople className="w-16 h-16 flex-shrink-0 mr-4 text-black"></IoIosPeople>
              <span className="title-font font-medium text-2xl">
                WE <span className="text-black"> ARE ETHICAL</span>
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full" data-aos="flip-down">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <GiNothingToSay className="w-16 h-16 flex-shrink-0 mr-4 text-green-500"></GiNothingToSay>
              <span className="title-font font-medium text-2xl">
                WE <span className="text-black"> NEVER SAY NO</span>
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full" data-aos="flip-down ">
            <div className="bg-orange-100 rounded flex p-4 h-full items-center">
              <FaTrophy className="w-16 h-16 flex-shrink-0 mr-4 text-red-500"></FaTrophy>
              <span className="title-font font-medium text-2xl ">
                WE <span className="text-black"> ENJOY WHAT WE DO</span>
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full" data-aos="flip-down">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <SiMaterialdesign className="w-16 h-16 flex-shrink-0 mr-4 text-blue-500"></SiMaterialdesign>
              <span className="title-font font-medium text-2xl">
                WE <span className="text-black"> ARE CREATIVE</span>
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full" data-aos="flip-down">
            <div className="bg-orange-100 rounded flex p-4 h-full items-center">
              <GiLightBulb className="w-16 h-16 flex-shrink-0 mr-4 text-red-400"></GiLightBulb>
              <span className="title-font font-medium text-2xl">
                WE <span className="text-black"> LEARN & INNOVATE</span>
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full" data-aos="flip-down">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <FaHandshake className="w-16 h-16 flex-shrink-0 mr-4 text-black"></FaHandshake>

              <span className="title-font font-medium text-2xl">
                WE <span className="text-black">DELIVER WHAT WE PROMISE</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motive;
