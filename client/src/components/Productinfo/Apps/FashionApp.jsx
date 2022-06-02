import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
const FashionApp = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <section class="text-gray-600 body-font" data-aos="flip-left">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Fashion E-commerce APP
            </h1>
            <p class="mb-8 leading-relaxed">
              Our experts developers have been developing amazing fashion
              e-commerce website along with app (Android and iOS). We provide
              online cloth ordering solutions that help online shopping
              businesses take full advantage of automation and be efficient in
              their day-to-day activities.
            </p>
            <div class="flex items-center justify-center mt-4">
              <Link to="/estimate">
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
              src="./app/fashiom1.gif"
            />
          </div>
        </div>
      </section>

      {/**Second Section */}
      <div class="flex justify-center items-center" data-aos="flip-down">
        <div class="max-w-md py-4 px-8 bg-white shadow-xl rounded-lg my-20 ">
          <div class="flex justify-center md:justify-end -mt-16 ">
            <img
              class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
              src="./app/flutter.png"
            />
          </div>
          <div>
            <h2 class="text-gray-800 text-3xl font-semibold">
              Application With Flutter
            </h2>
            <p class="mt-2 text-gray-600">
              Flutter is a free and open source Google mobile UI framework that
              provides a fast and expressive way for developers to build native
              apps on both IOS and Android.
            </p>
          </div>
          <div class="flex justify-end mt-4">
            <a href="#" class="text-xl font-medium text-gray-900">
              Language: <span className="text-red-500 font-bold">Dart</span>
            </a>
          </div>
        </div>
      </div>

      {/**Second Section End */}

      {/**third section */}
      <div
        class="grid grid-cols-12 md:items-center w-full max-w-screen-sm md:max-w-screen-md mx-auto px-4"
        data-aos="flip-left"
      >
        <div class="col-span-12 md:col-span-auto md:col-start-1 md:col-end-9 md:row-start-1 md:row-end-1 bg-red-500">
          <a class="" href="#" title="Image Link">
            <picture
              class="relative block w-full h-0 pb bg-gray-300 overflow-hidden shadow-lg"
              style={{ paddingTop: "75%" }}
            >
              <img
                class="absolute inset-0 w-full h-full object-cover"
                src="./app/flutter2.gif"
                alt="A random image from Unsplash"
              />
            </picture>
          </a>
        </div>
        <div class="col-span-12 md:col-span-auto md:col-start-7 md:col-end-13 md:row-start-1 md:row-end-1 -mt-8 md:mt-0 relative z-10 px-4 md:px-0">
          <div class="p-4 md:p-8 bg-white shadow-lg">
            <p class="mb-2 text-lg leading-none font-medium">
              <a class="" href="#" title="Heading Link">
                Why Flutter ?
              </a>
            </p>
            <p class="mb-2 text-sm text-gray-700">
              Flutter is an open-source, cross-platform toolkit. That means
              developers write code once and apply it to all the platforms –
              iOS, Android, web platform, macOS (Windows and Linux are still
              under development), and even Wear OS.
            </p>
          </div>
        </div>
      </div>

      {/**Third Section end */}

      {/**Fourth section */}

      <section class="text-blueGray-700 ">
        <div class="container flex flex-col px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
          <div class="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
            <img
              class="object-cover object-center rounded md:w-2/3"
              alt="hero"
              loading="lazy"
              src="./app/fashion2.png"
              data-aos="zoom-in"
            />
          </div>
          <div class=" flex flex-col pl:2 ml-2  " data-aos="zoom-in-left">
            <section class=" text-blueGray-700 ">
              <div class="container items-center px-5 py-12 lg:px-20">
                <div class="flex items-center justify-center">
                  <div class="w-full lg:w-10/6 md:w-10/6 ">
                    <div
                      class="relative flex flex-col h-full p-8 transition duration-500 ease-in-out transform bg-blue-300 border rounded-lg shadow-2xl"
                      data-aos="flip-right"
                    >
                      <h2 class="mb-4 text-2xl font-medium tracking-widest text-black uppercase title-font">
                        Features
                      </h2>
                      <p class="flex items-center mb-8 text-base font-medium leading-relaxed text-blueGray-700">
                        {" "}
                        All the basics for starting a new biz..{" "}
                      </p>
                      <strong class="flex items-end xs:text-2xl  font-black leading-none text-black md:text-2xl ">
                        <span>From $588 / 50,000৳ - </span>
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
                        Ordering.
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
                        Dynamic Dashboard.
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
                        Promotion and discount code tools.
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
                        An easy-to-use checkout.
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
                        Reporting tools and custom report features.
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
                        Free Maintenance Cost.
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

export default FashionApp;
