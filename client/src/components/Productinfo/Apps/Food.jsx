import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
const Food = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <section class="text-gray-600 body-font ml-9" data-aos="flip-left">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center md:-mt-40">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Food Ordering APP
            </h1>
            <p class="mb-8 leading-relaxed text-justify">
              Our experts developers have been developing amazing restaurant
              website along with app (Android and iOS). We provide online food
              ordering solutions that help restaurant businesses take full
              advantage of automation and be efficient in their day-to-day
              activities.
            </p>
            <div class="flex items-center justify-center mt-4">
              <Link to="/contact">
                {" "}
                <button className=" btn  hover:bg-red-500  transition duration-500 ease-in-out transform border-red-500 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-1 ring-offset-current ring-offset-2">
                  Get Demo
                </button>
              </Link>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="./app/food1.gif"
            />
          </div>
        </div>
      </section>

      {/**Second Section */}

      <div
        class=" flex justify-center items-center md:-mt-32"
        data-aos="flip-down"
      >
        <div class="max-w-md py-4 px-8 bg-white shadow-xl rounded-lg my-20">
          <div class="flex justify-center md:justify-end -mt-16">
            <img
              class="w-20 h-20 object-cover rounded-full border-2 border-blue-300"
              src="./app/react.png"
            />
          </div>
          <div>
            <h2 class="text-gray-800 text-3xl font-semibold">React Native</h2>
            <p class="mt-2 text-gray-600 text-justify">
              React Native (also known as RN) is a popular JavaScript-based
              mobile app framework that allows you to build natively-rendered
              mobile apps for iOS and Android. The framework lets you create an
              application for various platforms by using the same codebase.
            </p>
          </div>
          <div class="flex justify-end mt-4">
            <a href="#" class="text-xl font-medium text-gray-500">
              Language: <span class="text-red-500">JavaScript</span>
            </a>
          </div>
        </div>
      </div>

      {/**Second Section End */}

      {/**third section */}
      <div
        class="min-h-screen py-6 flex flex-col justify-center sm:py-12 -mt-32"
        data-aos="flip-left"
      >
        <div class="py-3 sm:max-w-xl sm:mx-auto">
          <div class="bg-white shadow-xl border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
            <div class="h-48 overflow-visible w-1/2">
              <img
                class="rounded-3xl shadow-xl Card"
                src="./app/react2.gif"
                alt=""
                data-aos="zoom-in"
              />
            </div>
            <div
              class="flex flex-col md:w-full sm:w-full  space-y-4"
              data-aos="zoom-in-left"
            >
              <div class="flex justify-between items-start">
                <h2 class="text-3xl font-bold">Why React Native?</h2>
              </div>

              <p class=" text-justify text-gray-400 max-h-40 overflow-y-hidden">
                React Native apps are faster to build, easier to use, offer
                better quality than Hybrid apps, and are cheaper than Native
                apps,, so all and all, React Native gives you the experience of
                having a Native app, without having to develop one
              </p>
            </div>
          </div>
        </div>
      </div>

      {/**Third Section end */}

      {/**Fourth section */}

      <section class="text-gray-600 body-font -mt-32 md:ml-52">
        <div class="container mx-auto flex flex-col md:flex-row  px-5 py-24   items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded md:w-2/3 Card"
              alt="hero"
              src="./app/food3.jpg"
              data-aos="zoom-in-right"
            />
          </div>

          <div
            class="rounded-lg shadow-xl Card overflow-hidden mb-4"
            data-aos="zoom-in-left"
          >
            <div class="px-6 py-8 bg-white dark:bg-gray-800 sm:p-10 sm:pb-6">
              <div class="flex justify-center">
                <span class="inline-flex px-4 py-1 dark:text-white rounded-full text-sm leading-5 font-semibold tracking-wide uppercase">
                  Starting
                </span>
              </div>
              <div class="mt-4 flex justify-center text-3xl leading-none font-extrabold dark:text-white">
                <span class="ml-1 mr-3 text-xl leading-8 font-medium text-gray-500 dark:text-gray-400">
                  from
                </span>
                $588 / 50,000৳
                <span class="ml-1 pt-8 text-2xl leading-8 font-medium text-gray-500 dark:text-gray-400"></span>
              </div>
            </div>
            <div class="px-6 pt-6 pb-8 bg-white dark:bg-gray-800 sm:p-10 sm:pt-6">
              <ul>
                <li class="mt-4 flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 text-green-500"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                    Food Ordering.
                  </p>
                </li>
                <li class="mt-4 flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 text-green-500"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                    Build Customized Food.
                  </p>
                </li>
                <li class="mt-4 flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 text-green-500"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                    Order Tracking.
                  </p>
                </li>

                <li class="mt-4 flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 text-green-500"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                    Easily Customisable Elements.
                  </p>
                </li>

                <li class="mt-4 flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 text-green-500"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                    Dynamic Dashboard.
                  </p>
                </li>

                <li class="mt-4 flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 text-green-500"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                    Promotion and discount code tools.
                  </p>
                </li>

                <li class="mt-4 flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 text-green-500"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                    An easy-to-use checkout.
                  </p>
                </li>
              </ul>
              <div class="mt-6 rounded-md shadow">
                <Link to="/contact">
                  <a
                    href="#"
                    class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                  >
                    Get Demo
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/**Price */}
        </div>
      </section>
    </div>
  );
};

export default Food;
