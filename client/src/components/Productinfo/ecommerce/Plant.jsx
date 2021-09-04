import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Plantweb from "./ecommerceweb/Plantweb";
import { Link } from "react-router-dom";
const Plant = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="text-blueGray-700 ">
        <div className="container flex flex-col px-5 py-24 mx-auto lg:items-center">
          <div
            className="flex flex-col lg:w-full mb-12 text-left lg:text-center "
            data-aos="flip-down"
          >
            <h2 className="mb-4 text-4xl font-semibold tracking-widest text-green-500 uppercase title-font text-center">
              PLANTS E-COMMERCE
            </h2>
            <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-black sm:text-5xl title-font text-center">
              Grow Your Bussiness with Pandas
            </h1>
            <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-2/3">
              A plant buying website that gives you the feeling as clean and
              fresh as plants are!!! Its free product from Pandas.
            </p>
          </div>
          <div className="flex justify-left justify-center space-x-6 ">
            <a href="#message">
              <button className=" btn  hover:bg-red-500  transition duration-500 ease-in-out transform  border-red-500 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-1 ring-offset-current ring-offset-2">
                For Demo
              </button>
            </a>

            <button className=" btn  hover:bg-red-500  transition duration-500 ease-in-out transform border-red-500 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-1 ring-offset-current ring-offset-2">
              App
            </button>
          </div>
        </div>
      </div>
      <section>
        <div
          className=" container flex flex-col items-center justify-center px-10 mx-auto rounded-lg lg:-mt-12 lg:px-40 "
          data-aos="zoom-in-right"
        >
          <img
            className="object-cover object-center  shadow-xl rounded-xl sm:mt-5  "
            alt="fashion"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/540a1969142365.5b77206c7491b.gif"
          />
        </div>
      </section>
      <div class="text-blueGray-700 mt-20 bg-gray-50 shadow-xl ">
        <div class="container flex flex-col items-start px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
          <div
            class="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/3 lg-mt-72"
            data-aos="zoom-out-down"
          >
            <img
              class="object-cover object-center rounded shadow-lg lg:-mt-28 "
              alt="hero"
              src="https://cdn.dribbble.com/users/2638573/screenshots/11467098/mockup_-_dribbble_-_4_4x.jpg"
            />
          </div>
          <div class=" flex flex-col pl:2 ml-2">
            <section class=" text-blueGray-700 ">
              <div class="container items-center px-5 py-12 lg:px-20">
                <div class=" flex items-center justify-center">
                  <div class="w-full lg:w-10/6 md:w-10/6">
                    <div
                      class="relative text-black flex flex-col h-full p-8 transition duration-500 ease-in-out transform bg-green-200 border rounded-lg shadow-2xl"
                      data-aos="flip-right"
                    >
                      <h2 class="mb-4 text-2xl font-medium tracking-widest text-black uppercase title-font">
                        Features
                      </h2>
                      <p class="flex items-center mb-8 text-base font-medium leading-relaxed text-blueGray-700">
                        {" "}
                        All the basics for starting a new biz..{" "}
                      </p>
                      <strong class="flex items-end text-black xs:text-2xl  font-black leading-none md:text-2xl ">
                        <span>Free</span>
                      </strong>
                      <p class="flex items-center mt-8 mb-2 text-base font-medium leading-relaxed text-blueGray-700">
                        <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-black">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2.5"
                            class="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Plant Ordering.
                      </p>

                      <p class="flex items-center mb-2 text-base font-medium leading-relaxed text-blueGray-700">
                        <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-black">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2.5"
                            class="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Order Tracking.
                      </p>

                      <p class="flex items-center mb-2 text-base font-medium leading-relaxed text-blueGray-700">
                        <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-black">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2.5"
                            class="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Automated Marketing.
                      </p>

                      <p class="flex items-center mb-2 text-base font-medium leading-relaxed text-blueGray-700">
                        <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-black">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2.5"
                            class="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Social Monitoring.
                      </p>

                      <p class="flex items-center mb-2 text-base font-medium leading-relaxed text-blueGray-700">
                        <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-black">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2.5"
                            class="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Social Media Integration.
                      </p>

                      <p class="flex items-center mb-2 text-base font-medium leading-relaxed text-blueGray-700">
                        <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-black">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2.5"
                            class="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        Free Maintenance Cost
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div class="flex flex-wrap w-full mt-2 -mx-4 text-center ">
              <div class="w-1/4 p-4 mt-4 md:w-1/4" data-aos="flip-left">
                <img
                  className="w-28 h-28 contain img-logo"
                  src="./tech/react.png"
                ></img>
              </div>
              <div class="w-1/4 p-4 mt-4 md:w-1/4" data-aos="flip-left">
                <img
                  className="w-28 h-28 contain img-logo"
                  src="./tech/nextjs.png"
                ></img>
              </div>
              <div class="w-1/4 p-4 mt-4 md:w-1/4" data-aos="flip-left">
                <img
                  className="w-28 h-28 contain img-logo"
                  src="./tech/nodejs.png"
                ></img>
              </div>
              <div class="w-1/4 p-4 mt-4 md:w-1/4" data-aos="flip-left">
                <img
                  className="w-28 h-28 contain img-logo"
                  src="./tech/mongodb.png"
                ></img>
              </div>

              <div
                class="w-1/4 p-4 md:w-1/4 -mt-8 md:-mt-2"
                data-aos="flip-left"
              >
                <img
                  className="w-28 h-28 contain img-logo"
                  src="./info/laravel.png"
                ></img>
              </div>

              <div
                class="w-1/4 p-4 md:w-1/4 -mt-8 md:-mt-2"
                data-aos="flip-left"
              >
                <img
                  className="w-28 h-28 contain img-logo"
                  src="./tech/mysql.png"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** Product card */}
      <div data-aos="fade-up" className="text-center mt-20">
        <h1 className="sm:text-3xl text-4xl font-medium text-center title-font text-gray-900 mb-4">
          Plant Demo Card
        </h1>
        <hr className="w-52 mx-auto mt-5 headline"></hr>
      </div>

      <div className=" grid m-7  sm:grid-cols-3 justify-center mt-12 space-y-2 md:space-y-2">
        {/**Card */}
        <div
          class="flex max-w-md mx-auto overflow-hidden bg-green-50 rounded-lg shadow-lg dark:bg-gray-800"
          data-aos="flip-left"
        >
          <div
            class="w-1/3 bg-cover"
            style={{
              backgroundImage:
                "url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/540a1969142365.5b77206c7491b.gif)",
            }}
          ></div>

          <div class="w-2/3 p-4 md:p-4">
            <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
              Tree
            </h1>

            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
            </p>

            <div class="flex mt-2 item-center">
              <svg
                class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                class="w-5 h-5 text-gray-500 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                class="w-5 h-5 text-gray-500 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            </div>

            <div class="flex justify-between mt-3 item-center">
              <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                $200
              </h1>
              <Link to="/plantcart">
                <button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-green-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div
          class="flex max-w-md mx-auto overflow-hidden bg-green-50 rounded-lg shadow-lg dark:bg-gray-800"
          data-aos="flip-left"
        >
          <div
            class="w-1/3 bg-cover"
            style={{
              backgroundImage:
                "url(https://images.pond5.com/camelia-blossom-full-bloom1-4k-footage-105878480_iconl.jpeg)",
            }}
          ></div>

          <div class="w-2/3 p-4 md:p-4">
            <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
              Camelia
            </h1>

            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
            </p>

            <div class="flex mt-2 item-center">
              <svg
                class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                class="w-5 h-5 text-gray-500 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                class="w-5 h-5 text-gray-500 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            </div>

            <div class="flex justify-between mt-3 item-center">
              <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                $20
              </h1>
              <Link to="/plantcart">
                <button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-green-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div
          class="flex max-w-md mx-auto overflow-hidden bg-green-50 rounded-lg shadow-lg dark:bg-gray-800"
          data-aos="flip-left"
        >
          <div
            class="w-1/3 bg-cover"
            style={{
              backgroundImage:
                "url(https://images.news18.com/ibnlive/uploads/2021/02/1612620860_roses.jpg)",
            }}
          ></div>

          <div class="w-2/3 p-4 md:p-4">
            <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
              Roses
            </h1>

            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
            </p>

            <div class="flex mt-2 item-center">
              <svg
                class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                class="w-5 h-5 text-gray-500 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                class="w-5 h-5 text-gray-500 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            </div>

            <div class="flex justify-between mt-3 item-center">
              <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                $220
              </h1>
              <Link to="/plantcart">
                <button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-green-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plant;
