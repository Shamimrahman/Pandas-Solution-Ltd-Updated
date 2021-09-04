import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
const POS = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="text-center mt-16" data-aos="flip-down">
        <h1 className="md:text-6xl text-4xl font-light uppercase text-gray">
          {" "}
          Point Of Sale (Pos)
        </h1>
        <p className="sm:text-justify md:text-centerfont-light max-w-2xl mx-auto w-full text-xl dark:text-white text-gray-800 text-center py-8">
          A point-of-sale (POS) terminal is a computerised replacement for a
          cash register which can process credit and debit cards. A customer
          needs to enter a card PIN to complete the transaction using the PoS
          terminal.
        </p>

        <Link to="/contact">
          {" "}
          <button className=" btn  hover:bg-red-500  transition duration-500 ease-in-out transform border-red-500 rounded-md items-centerw-full focus:shadow-outline focus:outline-none focus:ring-1 ring-offset-current ring-offset-2">
            Demo
          </button>
        </Link>
      </div>

      {/**Second section image */}

      <div className="items-center md:ml-72 mt-10" data-aos="flip-left">
        <img src="./software/pos1.gif"></img>
      </div>

      {/**Second section image end */}

      {/**third section   */}

      <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="pricing-box max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex"
          data-aos="flip-left"
        >
          <div class="bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12">
            <h3 class="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
              What is Pos?
            </h3>
            <p class="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
              A point of sale system, or POS, is the place where your customer
              makes a payment for products or services at your store. Simply
              put, every time a customer makes a purchase, they’re completing a
              point of sale transaction.
            </p>
            <div class="mt-8">
              <div class="flex items-center">
                <h4 class="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                  What&#x27;s included
                </h4>
                <div class="flex-1 border-t-2 border-gray-200"></div>
              </div>
              <ul class="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      stroke="currentColor"
                      fill="#10b981"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    Invoicing: Selling, Buying, Renting and Repairing.
                  </p>
                </li>
                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      stroke="currentColor"
                      fill="#10b981"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    Inventory Management.
                  </p>
                </li>
                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      stroke="currentColor"
                      fill="#10b981"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    Customer Orders and Suppliers Orders Management.
                  </p>
                </li>
                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      stroke="currentColor"
                      fill="#10b981"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    Integrated Supplier Purchasing.
                  </p>
                </li>
                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      stroke="currentColor"
                      fill="#10b981"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    Consistent and Customizable Reports.
                  </p>
                </li>
                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      stroke="currentColor"
                      fill="#10b981"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    Multi-Store Management.
                  </p>
                </li>
                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      stroke="currentColor"
                      fill="#10b981"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    Tracking and Visibility.
                  </p>
                </li>
              </ul>
            </div>
            <div class="mt-8">
              <div class="flex items-center">
                <h4 class="flex-shrink-0 pr-4 bg-white text-sm dark:bg-gray-800 leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                  &amp; What&#x27;s not
                </h4>
              </div>
              <ul class="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      class="h-6 w-6 mr-2"
                      fill="red"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    No Contracts. No monthly, setup, or additional payment
                    processor fees
                  </p>
                </li>
                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      class="h-6 w-6 mr-2"
                      fill="red"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    No 2-week on-boarding, it takes 20 minutes!
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div class="py-8 shadow-xl sm:w-6/5 px-6 text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
            <p class="text-lg leading-6 font-bold text-gray-900 dark:text-white">
              Price $1200
            </p>
            <div class="mt-4 flex items-center justify-center text-5xl leading-none font-extrabold text-gray-900 dark:text-white">
              <span>$0/mo</span>
            </div>
            <p class="mt-4 text-sm leading-5">
              <span class="block font-medium text-gray-500 dark:text-gray-400">
                All features
              </span>
              <span class=" inline-block font-medium text-gray-500 dark:text-gray-400">
                Free support
              </span>
            </p>
            <div class="mt-6">
              <div class="rounded-md shadow">
                <Link to="/contact">
                  <button
                    type="button"
                    class="py-2 px-4  bg-red-500 hover:bg-red-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Get your free trial
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**Image section */}
      <div className="md:ml-80 mt-16" data-aos="flip-down">
        <img src="./software/pos2.gif"></img>
      </div>
    </div>
  );
};

export default POS;
