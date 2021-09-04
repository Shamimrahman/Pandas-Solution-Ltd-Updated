import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Furniture = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div class="container px-6 py-16 mx-auto">
      <div class="items-center lg:flex">
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg" data-aos="fade-left">
            <h1 class="xs:text-4xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">
              <span class="text-blue-800"> Furniture ordering website</span>
            </h1>
            <h1 class="xs:text-xl font-semibold text-gray-800 uppercase dark:text-white lg:text-xl">
              <span class="text-gray-800"> Grow your business with pandas</span>
            </h1>
            <p class="mt-2 text-gray-600 dark:text-gray-400">
              Our experts developers have been developing amazing furniture
              delivery website along with app (Android and iOS). We provide
              online furnitures ordering solutions that help online furniture
              shopping businesses take full advantage of automation and be
              efficient in their day-to-day activities.
            </p>
            <div class="flex justify-center space-x-7 mt-10">
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
        </div>

        <div
          class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
          data-aos="fade-right"
        >
          <img
            class="w-full h-full lg:max-w-2xl"
            src="/info/furniture.svg"
            alt="Catalogue-pana.svg"
          />
        </div>
      </div>

      <div class="text-blueGray-700 mt-2 bg-gray-50 shadow-xl ">
        <div class="container flex flex-col items-start px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
          <div
            class="w-full mb-10  md:max-w-lg lg:max-w-lg lg-mt-72"
            data-aos="zoom-out-down"
          >
            <img
              class="object-cover object-center rounded shadow-lg lg:-mt-28 "
              alt="hero"
              src="https://www.wofox.com/napi/adsn/MTY2NjU=/166651574058317971.gif?20191223083542"
            />
          </div>
          <div class=" flex flex-col pl:2 ml-2  ">
            <section class=" text-blueGray-700 ">
              <div class="container items-center px-5 py-12 lg:px-20">
                <div class="flex items-center justify-center">
                  <div class="w-full lg:w-10/6 md:w-10/6 ">
                    <div
                      class="relative flex flex-col h-full p-8 transition duration-500 ease-in-out transform bg-blue-500 border rounded-lg shadow-2xl"
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
                        Furniture Ordering.
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
                        Augmented Reality.
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
      {/** product Card */}

      <div data-aos="fade-up" className="text-center mt-10">
        <h1 className="sm:text-3xl text-4xl font-medium text-center title-font text-gray-900 mb-4">
          Product Demo Card
        </h1>
        <hr className="w-52 mx-auto mt-5 headline"></hr>
      </div>

      {/**Card section */}
      <div className="grid m-7 grid-cols-1 xl:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 justify-center mx-auto ">
        {/**Col start */}

        <div class="Card container mx-auto max-w-sm w-full p-4 ">
          <div
            class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl"
            data-aos="flip-right"
          >
            <div class="prod-title">
              <p class="text-2xl uppercase text-gray-900 font-bold">Sofa</p>
              <p class="uppercase text-sm text-gray-400">
                The best Sofa in the marketplace
              </p>
            </div>
            <div class="prod-img">
              <img
                src="https://static4.depositphotos.com/1004099/314/i/600/depositphotos_3149467-stock-photo-red-leather-sofa-isolated-on.jpg"
                class="w-full min-h-full object-cover object-center"
              />
            </div>
            <div class="prod-info grid gap-10">
              <div>
                <ul class="flex flex-row justify-center items-center">
                  <li class="mr-4 last:mr-0">
                    <span class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                      <a
                        href="#blue"
                        class="block w-6 h-6 bg-blue-900 rounded-full"
                      ></a>
                    </span>
                  </li>
                  <li class="mr-4 last:mr-0">
                    <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                      <a
                        href="#yellow"
                        class="block w-6 h-6 bg-yellow-500 rounded-full"
                      ></a>
                    </span>
                  </li>
                  <li class="mr-4 last:mr-0">
                    <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                      <a
                        href="#red"
                        class="block w-6 h-6 bg-red-500 rounded-full"
                      ></a>
                    </span>
                  </li>
                  <li class="mr-4 last:mr-0">
                    <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                      <a
                        href="#green"
                        class="block w-6 h-6 bg-green-500 rounded-full"
                      ></a>
                    </span>
                  </li>
                </ul>
              </div>
              <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                <p class="font-bold text-xl">165 $</p>
                <button class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {/**End col */}

        <div class="  container mx-auto max-w-sm w-full p-4 ">
          <div
            class=" Card card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl"
            data-aos="flip-right"
          >
            <div class="prod-title">
              <p class="text-2xl uppercase text-gray-900 font-bold">Bed</p>
              <p class="uppercase text-sm text-gray-400">
                The best bed in the marketplace
              </p>
            </div>
            <div class="prod-img">
              <img
                src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=479,height=239,quality=75,format=auto,fit=contain,g=top/in-resources/ee3f4ad5-f5ba-49b3-a2e8-f65bbba20ae3/Images/ProductImages/Source/DB2D06.JPG"
                class="w-full min-h-full object-cover object-center"
              />
            </div>
            <div class="prod-info grid gap-10">
              <div>
                <ul class="flex flex-row justify-center items-center">
                  <li class="mr-4 last:mr-0">
                    <span class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                      <a
                        href="#blue"
                        class="block w-6 h-6 bg-blue-900 rounded-full"
                      ></a>
                    </span>
                  </li>
                  <li class="mr-4 last:mr-0">
                    <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                      <a
                        href="#yellow"
                        class="block w-6 h-6 bg-yellow-500 rounded-full"
                      ></a>
                    </span>
                  </li>
                  <li class="mr-4 last:mr-0">
                    <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                      <a
                        href="#red"
                        class="block w-6 h-6 bg-red-500 rounded-full"
                      ></a>
                    </span>
                  </li>
                  <li class="mr-4 last:mr-0">
                    <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                      <a
                        href="#green"
                        class="block w-6 h-6 bg-green-500 rounded-full"
                      ></a>
                    </span>
                  </li>
                </ul>
              </div>
              <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                <p class="font-bold text-xl">65 $</p>
                <button class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/**Start col */}
        <div class="container mx-auto max-w-sm w-full p-4 ">
          <div
            class=" Card card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl"
            data-aos="flip-right"
          >
            <div class="prod-title">
              <p class="text-2xl uppercase text-gray-900 font-bold">
                Dinning Table
              </p>
              <p class="uppercase text-sm text-gray-400">
                The best dinning table in the marketplace
              </p>
            </div>
            <div class="prod-img">
              <img
                src="https://hatil.in/sites/default/files/styles/product_listing/public/Cumin-179%2C%20Marmot-179-01.png?itok=80ybCxVq"
                class="w-full object-cover object-center"
              />
            </div>
            <div class="prod-info grid gap-10">
              <div>
                <ul class="flex flex-row justify-center items-center">
                  <li class="mr-4 last:mr-0">
                    <span class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                      <a
                        href="#blue"
                        class="block w-6 h-6 bg-blue-900 rounded-full"
                      ></a>
                    </span>
                  </li>
                  <li class="mr-4 last:mr-0">
                    <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                      <a
                        href="#yellow"
                        class="block w-6 h-6 bg-yellow-500 rounded-full"
                      ></a>
                    </span>
                  </li>
                  <li class="mr-4 last:mr-0">
                    <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                      <a
                        href="#red"
                        class="block w-6 h-6 bg-red-500 rounded-full"
                      ></a>
                    </span>
                  </li>
                  <li class="mr-4 last:mr-0">
                    <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                      <a
                        href="#green"
                        class="block w-6 h-6 bg-green-500 rounded-full"
                      ></a>
                    </span>
                  </li>
                </ul>
              </div>
              <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                <p class="font-bold text-xl">65 $</p>
                <button class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Furniture;
