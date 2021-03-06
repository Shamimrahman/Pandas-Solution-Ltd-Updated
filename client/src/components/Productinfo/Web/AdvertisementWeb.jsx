import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
const AdvertisementWeb = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <section class="text-gray-600 body-font" data-aos="flip-left">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class=" md:-mt-20 lg:-mt-20 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Company Portfolio Website
            </h1>
            <p class="mb-8 leading-relaxed text-justify">
              Grow your advertisement agency with pandas. Pandas's developers
              have developed some amazing add agency website to grow your
              bussiness.We provide web solutions that help take full advantage
              of automation and be efficient in their day-to-day activities.
            </p>
            <div class="flex justify-center">
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
              src="./website/portfolio1.gif"
            />
          </div>
        </div>
      </section>

      {/**Second Section */}

      <div class="flex items-center justify-center" data-aos="flip-down">
        <div class="max-w-md py-4 px-8 bg-white shadow-xl rounded-lg my-20">
          <div class="flex justify-center md:justify-end -mt-16">
            <img
              class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png"
            />
          </div>
          <div>
            <h2 class="text-gray-800 text-3xl font-semibold">
              Frontend: <span class="text-indigo-500">React JS</span>
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

      {/**Third Section */}
      <div
        class="grid grid-cols-12 md:items-center w-full max-w-screen-sm md:max-w-screen-md mx-auto px-4"
        data-aos="flip-right"
      >
        <div class="col-span-12 md:col-span-auto md:col-start-1 md:col-end-9 md:row-start-1 md:row-end-1 bg-red-500">
          <a class="" href="#" title="Image Link">
            <picture
              class="relative block w-full h-0 pb bg-gray-300 overflow-hidden shadow-lg"
              style={{ paddingTop: "75%" }}
            >
              <img
                class="absolute inset-0 w-full h-full object-cover"
                src="./website/nodejs.gif"
                alt="A random image from Unsplash"
              />
            </picture>
          </a>
        </div>
        <div class="col-span-12 md:col-span-auto md:col-start-7 md:col-end-13 md:row-start-1 md:row-end-1 -mt-8 md:mt-0 relative z-10 px-4 md:px-0">
          <div class="p-4 md:p-8 bg-white shadow-lg">
            <p class="mb-2 text-lg leading-none font-medium">
              <a class="" href="#" title="Heading Link">
                Backend: <span class="text-green-700">NodeJS</span>
              </a>
            </p>
            <p class="mb-2 text-sm text-gray-700">
              {" "}
              Node.js is an open-source, cross-platform, back-end JavaScript
              runtime environment that runs on the V8 engine and executes
              JavaScript code outside a web browser.
            </p>
            <p class="text-xs text-gray-500">Language: Javascript</p>
          </div>
        </div>
      </div>

      {/**Forth Section */}

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded shadow-xl "
              alt="hero"
              src="./website/portfolio2.png"
              data-aos="zoom-in-left"
            />
          </div>

          {/**Price */}

          <div
            class="rounded-lg shadow-xl overflow-hidden mb-4 md:ml-32 lg:ml-32"
            data-aos="zoom-in-right"
          >
            <div class="px-6 py-8 bg-white dark:bg-gray-800 sm:p-10 sm:pb-6">
              <div class="flex justify-center">
                <span class="inline-flex px-4 py-1 dark:text-white rounded-full text-sm leading-5 font-semibold tracking-wide uppercase">
                  Starting
                </span>
              </div>
              <div class="mt-4 flex justify-center text-xl leading-none font-extrabold dark:text-white">
                <span class="ml-1 mr-3 text-xl leading-8 font-medium text-gray-900 dark:text-gray-400">
                  from $411 / 35,000??? -
                </span>
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
                    A showcase of your work.
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
                    Testimonials.
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
                    Services being offered.
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
                    Easy to manage.
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
                    Mobile Friendly.
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
                    High-Quality Images and Many More..
                  </p>
                </li>
              </ul>
              <div class="mt-6 rounded-md shadow">
                <Link to="/contact">
                  {" "}
                  <a
                    href="#"
                    class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
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

export default AdvertisementWeb;
