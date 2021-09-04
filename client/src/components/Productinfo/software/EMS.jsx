import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
const EMS = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <section class="text-gray-600 body-font" data-aos="flip-right">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Employee Monitoring Software (EMS)
            </h1>
            <p class="mb-8 leading-relaxed md:text-center sm:justify-center">
              EMS is a software that helps you to monitor your employees.
              Nowadays employee monitoring software is widely used in technology
              companies.
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
              src="./software/ems1.gif"
            />
          </div>
        </div>
      </section>

      {/**second section starts*/}

      <div class="flex flex-col h-screen bg-center bg-cover bg-no-repeat bg-gray-50">
        <div
          class="grid place-items-center w-4/5 mx-auto p-10 my-20 sm:my-auto bg-white-600 border-4 border-red-500 bg-opacity-70 rounded-xl shadow-2xl space-y-5 text-center cursor-pointer"
          data-aos="flip-down"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="h-24 w-24 text-gray-800"
            viewBox="0 0 16 16"
          >
            <path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z" />
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z" />
          </svg>

          <h1 class="text-4xl font-bold uppercase text-orange-200 transition duration-500">
            What is EMS?
          </h1>
          <h2 class="text-xl text-gray-700 justify-center">
            Employee monitoring software is used to supervise employees'
            performance, prevent illegal activities, avoid confidential info
            leakage, and catch insider threats.
          </h2>
        </div>
      </div>

      {/**second section end */}

      <section class="text-gray-600 body-font -mt-28">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div
            class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
            data-aos="flip-left"
          >
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="./software/ems2.gif"
            />
          </div>
          <div class="  flex flex-col pl:2 ml-2 " data-aos="flip-down ">
            <section class=" text-Gray-100 ">
              <div
                class="container items-center px-5 py-12 lg:px-20"
                data-aos="flip-right"
              >
                <div class=" flex items-center justify-center">
                  <div class="w-full md:ml-36 lg:ml-36 sm:ml-0 lg:w-10/6 md:w-10/6">
                    <div
                      class="relative flex flex-col h-full p-8 transition duration-500 ease-in-out transform bg-gray-200 border rounded-lg shadow-2xl"
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
                        Timesheet.
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
                        Task management.{" "}
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
                        Productivity evaluation.
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
                        Location tracking.
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
                        Alerts.
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
                        Stealth Mode.
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default EMS;
