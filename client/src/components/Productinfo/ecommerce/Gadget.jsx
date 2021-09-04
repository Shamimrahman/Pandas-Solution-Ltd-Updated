import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Gadgetweb from "./ecommerceweb/Gadgetweb";
import "./Gadget.css";
const Gadget = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div class="container px-6 py-16 mx-auto md:-mt-20 lg:-mt-20 -mt-10">
        <div class="items-center lg:flex">
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg" data-aos="fade-left">
              <h1 class="xs:text-4xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">
                <span class="text-gray-800"> Gadget Ecommerce</span>
              </h1>

              <h1 class="xs:text-xl font-semibold text-gray-800 uppercase dark:text-white lg:text-xl">
                <span class="text-gray-700">
                  {" "}
                  Grow your business with pandas
                </span>
              </h1>
              <p class="mt-2 text-gray-600 dark:text-gray-400">
                Our experts developers have been developing amazing gadget
                ecommerce website along with app (Android and iOS). We provide
                online gadgets ordering solutions that help online gadget
                shopping businesses take full advantage of automation and be
                efficient in their day-to-day activities.
              </p>
              <div class="flex justify-center space-x-7 mt-10">
                <a href="#message">
                  <button className=" btn  hover:bg-red-500  transition duration-500 ease-in-out transform border-red-500 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-1 ring-offset-current ring-offset-2">
                    Full Demo
                  </button>
                </a>

                <button className=" btn  hover:bg-red-500  transition duration-500 ease-in-out transform  border-red-500 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-1 ring-offset-current ring-offset-2">
                  App
                </button>
              </div>
            </div>
          </div>

          <div
            class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
            data-aos="fade-right"
          >
            <img
              class="w-full h-full lg:max-w-2xl"
              src="/info/gadget.gif"
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>

        <div class="text-blueGray-700 mt-2 bg-gray-50 shadow-xl ">
          <div class="container flex flex-col items-start px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
            <div
              class="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/3 lg-mt-72"
              data-aos="zoom-out-down"
            >
              <img
                class="object-cover object-center rounded shadow-lg lg:-mt-28 "
                alt="hero"
                src="./info/gadget2.jpg"
              />
            </div>
            <div class=" flex flex-col pl:2 ml-2 ">
              <section class=" text-blueGray-700 ">
                <div class="container items-center px-5 py-12 lg:px-20">
                  <div class=" flex items-center justify-center">
                    <div
                      class=" w-full lg:w-10/6 md:w-10/6"
                      data-aos="zoom-out-down"
                    >
                      <div
                        class="relative text-white flex flex-col h-full p-8 transition duration-500 ease-in-out transform bg-gray-800 border rounded-lg shadow-2xl"
                        data-aos="flip-right"
                      >
                        <h2 class="mb-4 text-2xl font-medium tracking-widest text-white uppercase title-font">
                          Features
                        </h2>
                        <p class="flex items-center mb-8 text-base font-medium leading-relaxed text-blueGray-700">
                          {" "}
                          All the basics for starting a new biz..{" "}
                        </p>
                        <strong class="flex text-white items-end xs:text-2xl  font-black leading-none md:text-2xl ">
                          <span>From $358 / 30,000৳ - </span>
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
                          Gadget Ordering.
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
      </div>

      {/**Product Demo */}
      <div data-aos="fade-up" className="text-center mt-5">
        <h1 className="sm:text-3xl text-4xl font-medium text-center title-font text-gray-900 mb-4">
          Product Demo Card
        </h1>
        <hr className="w-52 mx-auto mt-5 headline"></hr>
      </div>

      <div className="flex  items-center justify-center w-screen min-h-screen p-10 xl:-mt-28  md:-mt-28  ">
        <div class="grid xl:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-2 max-w-6xl  space-x-6 xl:space-y-0 md:space-y-0   space-y-10">
          {/**Start Col */}
          <div
            class="flex Card poster-hover flex-col items-center justify-center  max-w-sm mx-auto  "
            data-aos="flip-right"
          >
            <div
              class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl "
              style={{
                backgroundImage:
                  "url(https://s.yimg.com/uu/api/res/1.2/DW7TTQGUmMkl7IKXSBUVDQ--~B/aD0xMDExO3c9MTgwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-03/1149db30-7c21-11eb-bc55-ccb54cb6691b.cf.jpg)",
              }}
            ></div>

            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
              <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                Canon R5
              </h3>

              <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span class="font-bold text-gray-800 dark:text-gray-200">
                  $3299
                </span>
                <Link to={"/gadgetcart"}>
                  <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                    Add to cart
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/**End  Col */}

          {/**Start Col */}
          <div
            class="flex Card flex-col items-center justify-center  max-w-sm mx-auto"
            data-aos="flip-right"
          >
            <div
              class="w-full ml-30 h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-2x"
              style={{
                backgroundImage:
                  "url(https://www.gizmochina.com/wp-content/uploads/2020/10/6249.jpg)",
              }}
            ></div>

            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
              <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                Asus Rog
              </h3>

              <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span class="font-bold text-gray-800 dark:text-gray-200">
                  $1229
                </span>
                <Link to={"/gadgetcart"}>
                  <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                    Add to cart
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/**End Col */}

          {/**Start Col */}
          <div
            class="flex Card flex-col items-center justify-center max-w-sm mx-auto"
            data-aos="flip-right"
          >
            <div
              class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-2x"
              style={{
                backgroundImage:
                  "url(https://www.apple.com/v/iphone-12-pro/f/images/meta/iphone-12-pro_overview__d5t6ow03nkmu_og.png)",
              }}
            ></div>

            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
              <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                Iphone 12 Pro Max
              </h3>

              <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span class="font-bold text-gray-800 dark:text-gray-200">
                  $1299
                </span>
                <Link to={"/gadgetcart"}>
                  <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                    Add to cart
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/**End Col */}

          {/**Start Col */}

          <div
            class="flex  Card flex-col items-center justify-center max-w-sm mx-auto"
            data-aos="flip-right"
          >
            <div
              class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-2x"
              style={{
                backgroundImage:
                  "url(https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2010/11/Razer-TRON-Gaming-Mouse-img1-544px.jpg)",
              }}
            ></div>

            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
              <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                Gaming Mouse
              </h3>

              <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span class="font-bold text-gray-800 dark:text-gray-200">
                  $229
                </span>
                <Link to={"/gadgetcart"}>
                  <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                    Add to cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**End Col */}
    </div>
  );
};

export default Gadget;
