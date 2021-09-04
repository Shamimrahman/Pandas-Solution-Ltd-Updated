import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
const LMS = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <section class="text-blueGray-700 ">
        <div class="container flex flex-col px-5 py-24 mx-auto lg:items-center">
          <div
            class="flex flex-col w-full mb-12 text-left lg:text-center"
            data-aos="flip-down"
          >
            <h1 class="mb-6 text-2xl font-semibold tracking-tighter text-black sm:text-5xl title-font">
              Learning management system (LMS)
            </h1>
            <p class="mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-2/3">
              A learning management system is a software application for the
              administration, documentation, tracking, reporting, automation and
              delivery of educational courses, training programs, or learning
              and development programs.
            </p>
          </div>
          <div class="flex justify-left lg:justify-center ">
            <Link to="/contact">
              {" "}
              <button className=" btn  hover:bg-red-500  transition duration-500 ease-in-out transform border-red-500 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-1 ring-offset-current ring-offset-2">
                Demo
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section id="intro">
        <div
          class="container flex flex-col items-center justify-center px-10 pb-24 mx-auto rounded-lg lg:-mt-12 lg:px-40"
          data-aos="zoom-in-left"
        >
          <img
            class=".img object-cover object-fit object-center w-full shadow-xl rounded-xl"
            alt="hero"
            src="./software/lms2.gif"
          />
        </div>
      </section>

      {/**section three */}

      <section class="text-blueGray-700 " data-aos="flip-right">
        <div class="container flex flex-col items-start px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
          <div class="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              loading="lazy"
              src="./software/lms1.gif"
            />
          </div>
          <div class="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
            <h1 class="mb-8 text-4xl font-bold tracking-tighter text-left text-black title-font">
              {" "}
              Features of LMS
            </h1>

            <p class="flex mb-2 text-blueGray-600">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>
              LMS integrations.
            </p>
            <p class="flex mb-2 text-blueGray-600">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>
              Data tracking.
            </p>
            <p class="flex mb-6 text-blueGray-600">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>
              Personalized user experience.
            </p>
            <p class="flex mb-6 text-blueGray-600">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>
              Offline learning trackers.
            </p>
            <p class="flex mb-6 text-blueGray-600">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>
              Automated alerts and notifications.
            </p>
            <p class="flex mb-6 text-blueGray-600">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>
              Centralized learning materials.
            </p>
            <p class="flex mb-6 text-blueGray-600">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>
              Flexible reporting and analytics.
            </p>
            <p class="flex mb-6 text-blueGray-600">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
              </span>
              Remote or mobile-workforce ready.
            </p>
          </div>
        </div>
      </section>

      <section class="text-blueGray-700 ">
        <div class="container items-center px-5 py-12 lg:px-20">
          <div class="flex flex-wrap items-center justify-center w-full gap-4">
            <div class="w-full xl:w-1/4 md:w-3/6" data-aos="flip-down">
              <div class="relative flex flex-col h-full p-8 transition duration-500 ease-in-out transform bg-white border rounded-lg shadow-xl">
                <h2 class="mb-4 text-sm font-medium tracking-widest text-blueGray-700 uppercase title-font">
                  {" "}
                  Package{" "}
                </h2>
                <p class="flex items-center mb-8 text-base font-normal tracking-tight text-blueGray-500">
                  {" "}
                  All the basics for starting a new biz..{" "}
                </p>
                <strong class="flex items-end text-3xl font-black leading-none text-black lg:text-4xl ">
                  <span>$20/mo </span>
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
                  Offline learning trackers.
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
                  Centralized learning materials.
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
                  Flexible reporting and analytics and more.
                </p>

                <Link to="/contact">
                  {" "}
                  <button
                    role="button"
                    class="w-full px-4 py-2 mx-auto mt-6 text-base font-medium text-white transition duration-500 ease-in-out transform bg-red-300 border-blue-600 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-red-700 "
                  >
                    Get Demo{" "}
                  </button>
                </Link>
              </div>
            </div>
            <div class="w-full xl:w-1/4 md:w-3/6" data-aos="flip-up">
              <div class="relative flex flex-col h-full p-8 transition duration-500 ease-in-out transform bg-white border rounded-lg shadow-xl">
                <h2 class="mb-4 text-sm font-medium tracking-widest text-blueGray-700 uppercase title-font">
                  {" "}
                  PACKAGE{" "}
                </h2>
                <p class="flex items-center mb-8 text-base font-normal tracking-tight text-blueGray-500">
                  {" "}
                  All the basics for starting a new biz..{" "}
                </p>
                <strong class="flex items-end text-3xl font-black leading-none text-black lg:text-4xl ">
                  <span>$210/year </span>
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
                  Offline learning trackers.
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
                  Centralized learning materials.
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
                  Flexible reporting and analytics and more.
                </p>
                <Link to="/contact">
                  {" "}
                  <button
                    role="button"
                    class="w-full px-4 py-2 mx-auto mt-6 text-base font-medium text-white transition duration-500 ease-in-out transform bg-red-600 border-blue-600 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-red-700 "
                  >
                    Get Demo{" "}
                  </button>
                </Link>
              </div>
            </div>
            <div
              class="my-6 bg-white border rounded-lg shadow-xl lg:w-1/2 "
              data-aos="flip-left"
            >
              <div class="items-center flex-grow px-8 py-2 rounded-lg">
                <div class="inline-flex items-center w-full text-black">
                  <div class="flex flex-wrap">
                    <span class="text-xl font-semibold tracking-tighter lg:text-2xl">
                      {" "}
                      Add On{" "}
                    </span>
                    <p class="mb-2 text-base font-medium leading-relaxed text-blueGray-700 lg:pr-10">
                      {" "}
                      Get full access to licenses and perks.{" "}
                    </p>
                  </div>
                  <Link to="/contact">
                    {" "}
                    <button className=" btn bg-red-500 text-white hover:bg-red-500  transition duration-500 ease-in-out transform border-red-500 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-1 ring-offset-current ring-offset-2">
                      Contact US
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LMS;
