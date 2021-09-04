import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Grocery = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div class="text-center a w-full ">
            <h1
              class="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-500"
              data-aos="flip-down"
            >
              ONLINE GROCERY ORDERING SYSTEM
            </h1>
            <h1
              class="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-800"
              data-aos="flip-down"
            >
              Grow Your Bussiness with Pandas
            </h1>
            <p class="mb-8 leading-relaxed justify-center text-justify">
              Our experts developers have been developing amazing grocery
              delivery website along with app (Android and iOS). We provide
              online grocery products ordering solutions that help online
              grocery shopping businesses take full advantage of automation and
              be efficient in their day-to-day activities.
            </p>
            <div class="flex justify-center space-x-7">
              <a href="#message">
                <button className=" btn  hover:bg-red-500  transition duration-500 ease-in-out transform  border-red-500 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-1 ring-offset-current ring-offset-2">
                  For Demo
                </button>
              </a>

              <button className=" btn  hover:bg-red-500  transition duration-500 ease-in-out transform  border-red-500 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-1 ring-offset-current ring-offset-2">
                App
              </button>
            </div>
          </div>

          <div data-aos="zoom-in-right">
            <img
              class="  mt-20 lg:mt-32 lg:w-full md:w-full w-full object-contain mb-10  object-center rounded"
              data-aos="flip-right"
              alt="hero"
              src="./info/grocery.png"
            />
          </div>
        </div>
      </section>

      <div class="text-blueGray-700 mt-2 bg-gray-100 ">
        <div class="container flex flex-col items-start px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
          <div
            class="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/3 lg-mt-72"
            data-aos="zoom-out-down"
          >
            <img
              class="object-cover object-center rounded shadow-lg lg:-mt-28 "
              alt="hero"
              src="http://groceryee.initstore.net/apps/media/web.gif"
            />
          </div>
          <div class="  flex flex-col pl:2 ml-2 " data-aos="flip-down ">
            <section class=" text-blueGray-700 ">
              <div class="container items-center px-5 py-12 lg:px-20">
                <div class=" flex items-center justify-center">
                  <div class="w-full lg:w-10/6 md:w-10/6">
                    <div
                      class="relative flex flex-col h-full p-8 transition duration-500 ease-in-out transform bg-green-200 border rounded-lg shadow-2xl"
                      data-aos="flip-left"
                    >
                      <h2 class="mb-4 text-2xl font-medium tracking-widest text-black uppercase title-font">
                        Features
                      </h2>
                      <p class="flex items-center mb-8 text-base font-medium leading-relaxed text-blueGray-700">
                        {" "}
                        All the basics for starting a new biz..{" "}
                      </p>
                      <strong class="flex items-end xs:text-2xl  font-black leading-none text-black md:text-2xl ">
                        <span>From $416.66 / 35,000৳ - </span>
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
                        Groceries Items Ordering.
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

      {/** Product Card */}

      <div data-aos="fade-up" className="text-center mt-20">
        <h1 className="sm:text-3xl text-4xl font-medium text-center title-font text-gray-900 mb-4">
          Grocery Demo Card
        </h1>
        <hr className="w-52 mx-auto mt-5 headline"></hr>
      </div>

      <div className=" grid m-7 gap-4 sm:grid-cols-3 justify-center mt-12 space-y-2 md:space-y-2">
        {/**Card col start */}
        <div
          class="flex Card max-w-md mx-auto overflow-hidden bg-green-50 rounded-lg shadow-lg dark:bg-gray-800"
          data-aos="flip-left"
        >
          <div
            class="w-1/3 bg-cover"
            style={{
              backgroundImage:
                "url(https://img.lovepik.com/photo/50108/5937.jpg_wh300.jpg)",
            }}
          ></div>

          <div class="w-2/3 p-4 md:p-4">
            <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
              Chilli Sauce 🍅
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
              <Link to="/grocerycart">
                <button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-green-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/**Card col end */}

        <div
          class="flex  Card max-w-md mx-auto overflow-hidden bg-green-50 rounded-lg shadow-lg dark:bg-gray-800"
          data-aos="flip-left"
        >
          <div
            class="w-1/3 bg-cover"
            style={{
              backgroundImage:
                "url(https://challengedairy.com/themes/custom/challenge/images/coupons/product_coupon_butter_cream_cheese_combo.png)",
            }}
          ></div>

          <div class="w-2/3 p-4 md:p-4">
            <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
              Butter Cheese 🧈
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
              <Link to="/grocerycart">
                <button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-green-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/**Col end */}
        <div
          class="flex Card max-w-md mx-auto overflow-hidden bg-green-50 rounded-lg shadow-lg dark:bg-gray-800"
          data-aos="flip-left"
        >
          <div
            class="w-1/3 bg-cover"
            style={{
              backgroundImage:
                "url(https://www.jiomart.com/images/product/420x420/490503478/nescafe-classic-instant-coffee-100-g-jar-5-20200723.jpg)",
            }}
          ></div>

          <div class="w-2/3 p-4 md:p-4">
            <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
              Nescafe Coffee ☕
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
                $30
              </h1>
              <Link to="/grocerycart">
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

export default Grocery;
