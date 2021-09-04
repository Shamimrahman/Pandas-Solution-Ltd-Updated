import React, { useEffect } from "react";
import "./Fashion.css";
import Message from "../MessageForm/Message";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Fashion = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="text-blueGray-700 ">
        <div className="container flex flex-col px-5 py-24 mx-auto lg:items-center">
          <div
            className="flex flex-col w-full mb-12 text-left lg:text-center "
            data-aos="flip-down"
          >
            <h2 className="mb-4 text-4xl font-semibold tracking-widest text-black uppercase title-font text-center">
              FASHION ECOMMERCE SITE
            </h2>
            <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-black sm:text-5xl title-font text-center">
              Grow Your Bussiness with Pandas
            </h1>
            <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-2/3">
              Our experts developers have been developing amazing fashion
              e-commerce website along with app (Android and iOS). We provide
              online cloth ordering solutions that help online shopping
              businesses take full advantage of automation and be efficient in
              their day-to-day activities.
            </p>
          </div>
          <div className="flex justify-left justify-center space-x-6 ">
            <a href="#message">
              <button className=" btn  hover:bg-red-500  transition duration-500 ease-in-out transform   border-red-500 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-1 ring-offset-current ring-offset-2">
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
          data-aos="zoom-in-left"
        >
          <img
            className="object-cover object-center w-full shadow-xl rounded-xl sm:mt-5  "
            alt="fashion"
            src="./info/fashioninfo.jpg"
          />
        </div>
      </section>

      {/**Feature Section */}

      <div class="text-blueGray-700 mt-20 bg-gray-50 ">
        <div class="container flex flex-col items-start px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
          <div
            class="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2 -mt-32"
            data-aos="zoom-out-down"
          >
            <img
              class="object-cover object-center rounded "
              alt="hero"
              loading="lazy"
              src="./info/fashion2.jpg"
            />
          </div>
          <div class="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
            <h1 class="mb-8 ml-3 space-y-4 text-4xl font-bold tracking-tighter text-center hover:text-red-500 title-font">
              FEATURES
            </h1>
            <p
              class="flex mb-2 text-blueGray-600 hover:text-red-500"
              data-aos="flip-up"
            >
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
              Content management capabilities.
            </p>

            <br></br>
            <p
              class="flex mb-2 text-blueGray-600 hover:text-red-500"
              data-aos="flip-up"
            >
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
              Promotion and discount code tools.
            </p>
            <br></br>
            <p
              class="flex mb-6 text-blueGray-600 hover:text-red-500"
              data-aos="flip-up"
            >
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
              An easy-to-use checkout.
            </p>

            <p
              class="flex mb-6 text-blueGray-600 hover:text-red-500"
              data-aos="flip-up"
            >
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
              Search engine optimized code and layout.
            </p>

            <p
              class="flex mb-6 text-blueGray-600 hover:text-red-500"
              data-aos="flip-up"
            >
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
              Reporting tools and custom report features.
            </p>
            <p
              class="flex mb-6 text-blueGray-600 hover:text-red-500"
              data-aos="flip-up"
            >
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
              Email marketing features or integration.
            </p>

            <p
              class="flex mb-6 text-blueGray-600 hover:text-red-500"
              data-aos="flip-up"
            >
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
              Multiple payment options.
            </p>

            <p
              class="flex mb-6 text-blueGray-600 hover:text-red-500"
              data-aos="flip-up"
            >
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
              The ability to scale and add new features.
            </p>
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

      {/**Product Card */}
      <div data-aos="fade-up" className="text-center mt-5">
        <h1 className="sm:text-3xl text-4xl font-medium text-center title-font text-gray-900 mb-4">
          Product Demo Card
        </h1>
        <hr className="w-52 mx-auto mt-5 headline"></hr>
      </div>

      {/**card */}

      <div className=" grid m-7 gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-3 xm:grid-cols-2 justify-center mt-10 space-y-2 md:space-y-2">
        {/**Card col start */}
        <div
          class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
          data-aos="flip-down"
        >
          <div
            class="flex items-end justify-end h-56 w-full bg-cover"
            style={{
              backgroundImage:
                "url(https://media0.giphy.com/media/yBAGpfh3QplEA/giphy.gif)",
            }}
          >
            <Link to="/fashioncart">
              <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <svg
                  class="h-5 w-5"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </button>
            </Link>
          </div>
          <div class="px-5 py-3">
            <h3 class="text-gray-700 uppercase">Nike Shoe</h3>
            <span class="text-gray-500 mt-2">$95</span>
          </div>
        </div>
        {/**col end */}

        {/**Card col start */}
        <div
          class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
          data-aos="flip-down"
        >
          <div
            class="flex items-end justify-end h-56 w-full bg-cover"
            style={{
              backgroundImage:
                "url(https://images.solecollector.com/complex/images/c_crop,h_654,w_1094,x_6,y_81/c_fill,dpr_2.0,f_auto,fl_lossy,q_auto,w_680/kryhc9jysynou9ngwpi3/adidas-ultraboost-2019)",
            }}
          >
            <Link to="/fashioncart">
              <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <svg
                  class="h-5 w-5"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </button>
            </Link>
          </div>
          <div class="px-5 py-3">
            <h3 class="text-gray-700 uppercase">Adidas Shoe</h3>
            <span class="text-gray-500 mt-2">$195</span>
          </div>
        </div>
        {/**col end */}

        {/**Card col start */}
        <div
          class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
          data-aos="flip-down"
        >
          <div
            class="flex items-end justify-end h-56 w-full bg-cover"
            style={{
              backgroundImage:
                "url(https://thumbs.gfycat.com/EnchantedWeepyAlligatorsnappingturtle-size_restricted.gif)",
            }}
          >
            <Link to="/fashioncart">
              <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <svg
                  class="h-5 w-5"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </button>
            </Link>
          </div>
          <div class="px-5 py-3">
            <h3 class="text-gray-700 uppercase">Rolex Watch</h3>
            <span class="text-gray-500 mt-2">$1195</span>
          </div>
        </div>
        {/**col end */}
      </div>
    </div>
  );
};

export default Fashion;
