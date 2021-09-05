import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Restuwebsite = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <section class="text-gray-600 body-font" data-aos="flip-left">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class=" md:-mt-32 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Restaurant Website
            </h1>
            <p class="mb-8 leading-relaxed text-justify">
              Our experts developers have been developing amazing restaurant
              website. We provide web solutions that help restaurant businesses
              take full advantage of automation and be efficient in their
              day-to-day activities.
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
              src="./website/restu1.jpg"
            />
          </div>
        </div>
      </section>

      {/**Second Section */}

      <div
        className="flex justify-center items-center sm:-mt-14"
        data-aos="flip-right"
      >
        <div class="max-w-md py-4 px-8 bg-white shadow-xl rounded-lg my-20">
          <div class="flex justify-center md:justify-end -mt-16">
            <img
              class="w-20 h-20 object-cover rounded-full border-2 border-blue-200"
              src="data:image/png;base64,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"
            />
          </div>
          <div>
            <h2 class="text-gray-800 text-3xl font-semibold">
              Frontend: <span className="text-blue-400"> React js</span>
            </h2>
            <p class="mt-2 text-gray-600">
              React is a free and open-source front-end JavaScript library for
              building user interfaces or UI components. It is maintained by
              Facebook and a community of individual developers and companies.
              React can be used as a base in the development of single-page or
              mobile applications.
            </p>
          </div>
          <div class="flex justify-end mt-4">
            <a href="#" class="text-xl font-medium text-indigo-500">
              Language: Javascript
            </a>
          </div>
        </div>
      </div>
      {/**Second Section End */}

      {/**third section */}
      <div class="grid grid-cols-12 md:items-center w-full max-w-screen-sm md:max-w-screen-md mx-auto px-4">
        <div class="col-span-12  shadow-xl md:col-span-auto md:col-start-1 md:col-end-9 md:row-start-1 md:row-end-1 bg-red-500">
          <a class="" href="#" title="Image Link">
            <picture
              class="relative block w-full h-0 pb bg-gray-300 overflow-hidden shadow-lg"
              style={{ paddingTop: "75%" }}
            >
              <img
                class="absolute inset-0 w-full h-full object-cover"
                src="./website/nodejs.gif"
                alt="A random image from Unsplash"
                data-aos="flip-left"
              />
            </picture>
          </a>
        </div>
        <div
          class="col-span-12 md:col-span-auto md:col-start-7 md:col-end-13 md:row-start-1 md:row-end-1 -mt-8 md:mt-0 relative z-10 px-4 md:px-0"
          data-aos="flip-right"
        >
          <div class="p-4 md:p-8 bg-white shadow-xl">
            <p class="mb-2 text-lg leading-none font-medium">
              <a class="" href="#" title="Heading Link">
                Backend: <span class="text-green-700">Nodejs</span>
              </a>
            </p>
            <p class="mb-2 text-sm text-gray-700">
              Node.js is an open-source, cross-platform, back-end JavaScript
              runtime environment that runs on the V8 engine and executes
              JavaScript code outside a web browser.
            </p>
            <br></br>
            <p class="font-bold text2xl">Language: Javascript</p>
          </div>
        </div>
      </div>
      {/**Third Section end */}

      {/**Fourth section */}

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded shadow-xl"
              alt="hero"
              src="./website/restu2.jpg"
              data-aos="zoom-in-left"
            />
          </div>
          <div
            class="rounded-lg shadow-2xl overflow-hidden mb-4 md:ml-32"
            data-aos="zoom-in-right"
          >
            <div class="px-6 py-8 bg-white dark:bg-gray-800 sm:p-10 sm:pb-6">
              <div class="flex justify-center">
                <span class="inline-flex px-4 py-1 dark:text-white rounded-full text-sm leading-5 font-semibold tracking-wide uppercase">
                  Starting 🚀
                </span>
              </div>
              <div class="mt-4 flex justify-center text-6xl leading-none font-extrabold dark:text-white">
                <span class="ml-1 mr-3 text-2xl  leading-8 font-medium text-gray-900 dark:text-gray-400">
                  from $411 / 35,000৳ -
                </span>

                <span class="ml-1 pt-8 text-2xl leading-8 font-medium text-gray-500 dark:text-gray-400"></span>
              </div>
            </div>
            <div class="-mt-12 px-6 pt-6 pb-8 bg-white dark:bg-gray-800 sm:p-10 sm:pt-6">
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
                    Imagery.
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
                    Make Location Easily Accessible.
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
                    Responsiveness and Mobility.
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
                    Social Media Integration.
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
                    Offer Online Promotions.
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
                    Allow Customers to Make Reservations Online.
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
                    Free Maintenance cost.
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
        </div>
      </section>
    </div>
  );
};

export default Restuwebsite;
