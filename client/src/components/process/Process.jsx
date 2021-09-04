import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import "./Process.css";
import Roll from "react-reveal/Roll";
import Aos from "aos";
import "aos/dist/aos.css";

const Process = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="about">
      <div data-aos="fade-up" className="text-center mt-24">
        <h1 className="sm:text-3xl text-4xl font-medium text-center title-font text-gray-900 mb-4">
          OUR DEVELOPMENT PROCESS
        </h1>
        <hr className="w-52 mx-auto mt-5 headline"></hr>
      </div>
      <section class="text-gray-600 body-font -mt-10">
        <div class="container mx-auto sm:grid-cols-2 flex px-5 py-24 md:flex-row flex-col items-center">
          <div
            data-aos="fade-right"
            class=" md:items-start md:text-left justify-center  mb-16 md:mb-0 items-center text-center"
          >
            <p class=" process-text mb-4 font-medium  text-gray-900 -mt-10 text-justify ">
              Growing user expectations propel ongoing changes to technology,
              and have forced brands to deliver digital experiences that are not
              only fun, and intuitive but engaging as well; making it more
              important than ever for brands to be accessible everywhere, in
              real-time and on both desktop and mobile devices.
            </p>
          </div>

          <div data-aos="flip-up" className=" process-img ">
            <img
              class="object-cover object-center rounded"
              alt="process"
              src="img/process.gif"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
