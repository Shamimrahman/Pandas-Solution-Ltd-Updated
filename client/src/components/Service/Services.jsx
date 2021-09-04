import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="services">
      <div data-aos="fade-up" className="text-center mt-24 md:-mt-24 lg:mt-32">
        <h1 className="sm:text-3xl  text-4xl font-medium text-center title-font text-gray-900 mb-4">
          SNAPSHOTS OF OUR PRODUCTS
        </h1>
        <hr className="w-52 mx-auto mt-5 headline"></hr>
      </div>

      <div class="max-w-screen-xl p-4 bg-white dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20">
        <div class="relative">
          <div class="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
            <div class="relative space-y-4 lg:flex lg:justify-center lg:items-center">
              <div
                class="flex -mt-2 lg:-mt-32 items-end justify-center lg:justify-start space-x-4"
                data-aos="zoom-in"
              >
                <img
                  class="rounded-lg shadow-lg w-36 md:w-72 "
                  width="200"
                  src="./img/appshop.png"
                  alt="1"
                />
                <img
                  class="rounded-lg shadow-lg w-52 md:w-80"
                  width="260"
                  src="./img/graph.gif"
                  alt="2"
                />
              </div>
              <div
                class="flex items-start justify-center lg:justify-start space-x-4 ml-12"
                data-aos="zoom-in-up"
              >
                <img
                  class="rounded-lg shadow-lg  w-32 md:w-72"
                  width="170"
                  src="./img/appfood.png"
                  alt="3"
                />
                <img
                  class="rounded-lg shadow-lg mr-2  w-48 object-contain md:w-72 lg:w-72"
                  width="200"
                  src="./img/fashion.gif"
                  alt="4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="zoom-in ">
        <img
          class="lg:w-10/12 md:w-10/12 w:10/18 md:ml-20 lg:ml-20 ml-2 "
          alt="process"
          src="https://images.squarespace-cdn.com/content/v1/5d48ece5c9b54700015ba784/1603676341616-8KFT7L4Y1KVA867JW5OK/Boston+Grocery+Delivery+App+UI+Kit-web-15.gif"
        />
      </div>
    </div>
  );
};

export default Services;
