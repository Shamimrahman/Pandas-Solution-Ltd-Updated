import React, { useEffect } from "react";
import Message from "../MessageForm/Message";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "./Fashion.css";
const Restaurant = () => {
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
            <h2 className="mb-4 text-4xl font-semibold tracking-widest text-red-500 uppercase title-font text-center">
              Online food ordering System
            </h2>
            <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-black sm:text-5xl title-font text-center">
              Grow Your Bussiness with Pandas
            </h1>
            <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-2/3">
              Our experts developers have been developing amazing restaurant
              website along with app (Android and iOS). We provide online food
              ordering solutions that help restaurant businesses take full
              advantage of automation and be efficient in their day-to-day
              activities.
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
            src="./info/reslandin.png"
          />
        </div>
      </section>

      {/**Feature Section */}

      <div class="text-blueGray-700 mt-20 bg-gray-50 ">
        <div class="container flex flex-col items-start px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
          <div class=" w-10/12 ml-6  -mt-32" data-aos="zoom-out-down">
            <img
              class="object-cover w-full object-center rounded shadow-lg lg:-mt-28 "
              alt="hero"
              src="./info/res2.jpg"
            />
          </div>
          <div class=" flex flex-col pl:2 ml-2 ">
            <section class=" text-blueGray-700 ">
              <div class="container items-center px-5 py-12 lg:px-20">
                <div class=" flex items-center justify-center ">
                  <div
                    className="w-full lg:w-10/6 md:w-10/6"
                    data-aos="flip-down"
                  >
                    <div
                      class=" p-8 w-10/6  bg-orange-100 border rounded-lg shadow-xl"
                      data-aos="flip-down"
                    >
                      <h2 class="mb-4 text-2xl font-medium tracking-widest text-black uppercase title-font">
                        Features
                      </h2>
                      <p class="flex items-center mb-8 text-base font-medium leading-relaxed text-blueGray-700">
                        {" "}
                        All the basics for starting a new biz..{" "}
                      </p>
                      <strong class="font-bold text-xl  font-sans text-black ">
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
                        Food Ordering.
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
                        Build Customized Food.
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
                        Easily Customisable Elements.
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

      {/**Food Section */}
      <div data-aos="fade-up" className="text-center mt-20">
        <h1 className="sm:text-3xl text-4xl font-medium text-center title-font text-red-500 mb-4">
          Restaurant Food Card Demo
        </h1>
        <hr className="w-52 mx-auto mt-5 headline"></hr>
      </div>

      {/**Food Card */}

      <div className=" grid m-7  sm:grid-cols-4 justify-center mt-12 -gap-12 space-y-1 gap-4 md:space-y-2">
        {/**Col start */}
        <div
          className="flex Card flex-col items-center justify-center  max-w-sm mx-auto  "
          data-aos="flip-right"
        >
          <div
            class="w-full h-72 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl "
            style={{
              backgroundImage:
                "url(https://media3.giphy.com/media/NcFQYJ7Q312BhP30MM/giphy.gif)",
            }}
          ></div>

          <div class="w-56 -mt-10 overflow-hidden bg-orange-100 rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
              Pizza
            </h3>

            <div class="flex items-center justify-between px-3 py-2 bg-orange-200 dark:bg-gray-700">
              <span class="font-bold text-gray-800 dark:text-gray-200">
                $29
              </span>

              <Link to="/restaurantcart">
                <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-red-700 rounded hover:bg-orange-200 dark:hover:bg-gray-600 focus:bg-red-400 dark:focus:bg-gray-600 focus:outline-none">
                  Add to cart
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/**Col end */}

        {/**Col start */}
        <div
          class="flex Card flex-col items-center justify-center  max-w-sm mx-auto  "
          data-aos="flip-right"
        >
          <div
            class="w-full h-72 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl "
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/originals/61/49/d3/6149d3b9fc86710a5220b90b1bda7599.gif)",
            }}
          ></div>

          <div class="w-56 -mt-10 overflow-hidden bg-orange-100 rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
              Steak
            </h3>

            <div class="flex items-center justify-between px-3 py-2 bg-orange-200 dark:bg-gray-700">
              <span class="font-bold text-gray-800 dark:text-gray-200">
                $150
              </span>

              <Link to="/restaurantcart">
                <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-red-700 rounded hover:bg-orange-200 dark:hover:bg-gray-600 focus:bg-red-400 dark:focus:bg-gray-600 focus:outline-none">
                  Add to cart
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/**Col end */}

        {/**Col start */}
        <div
          class="flex Card flex-col items-center justify-center  max-w-sm mx-auto  "
          data-aos="flip-right"
        >
          <div
            class="w-full h-72 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl "
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/originals/50/c3/46/50c346e2c432bf945471e978ee6429a4.gif)",
            }}
          ></div>

          <div class="w-56 -mt-10 overflow-hidden bg-orange-100 rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
              Pasta
            </h3>

            <div class="flex items-center justify-between px-3 py-2 bg-orange-200 dark:bg-gray-700">
              <span class="font-bold text-gray-800 dark:text-gray-200">
                $59
              </span>

              <Link to="/restaurantcart">
                <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-red-700 rounded hover:bg-orange-200 dark:hover:bg-gray-600 focus:bg-red-400 dark:focus:bg-gray-600 focus:outline-none">
                  Add to cart
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/**Col end */}

        {/**Col start */}
        <div
          class="flex Card flex-col items-center justify-center  max-w-sm mx-auto  "
          data-aos="flip-right"
        >
          <div
            class="w-full h-72 bg-gray-300 bg-center bg-cover rounded-lg shadow-2xl "
            style={{
              backgroundImage:
                "url(https://media3.giphy.com/media/xT39D2A6TB8D1Ce79C/giphy.gif?cid=e1bb72ff5b0c445633644e4f51096b67)",
            }}
          ></div>

          <div class="w-56 -mt-10 overflow-hidden bg-orange-100 rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
              Chicken Grill
            </h3>

            <div class="flex items-center justify-between px-3 py-2 bg-orange-200 dark:bg-gray-700">
              <span class="font-bold text-gray-800 dark:text-gray-200">
                $32
              </span>

              <Link to="/restaurantcart">
                <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-red-700 rounded hover:bg-orange-200 dark:hover:bg-gray-600 focus:bg-red-400 dark:focus:bg-gray-600 focus:outline-none">
                  Add to cart
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/**Col end */}
      </div>
    </div>
  );
};

export default Restaurant;
