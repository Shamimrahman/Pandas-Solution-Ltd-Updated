import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
const Estimate = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div class="flex  h-screen items-center justify-center mb-30 ">
        <div
          class="grid bg-white rounded-lg shadow-2xl w-11/12 md:w-9/12 lg:w-1/2"
          data-aos="zoom-in-down"
        >
          <div class="flex justify-center py-4"></div>

          <div class="flex justify-center text-center">
            <div class="center">
              <h1 class="text-gray-600  md:text-2xl text-xl">Drop Us a Line</h1>
              <br />
              <p class=" text-gray-500">
                Post your requirements here and we will contact you shortly.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 mt-5 mx-7">
            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Name
            </label>
            <input
              required
              class="py-2 px-3 shadow-xl border-orange-100 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-orange-100 dark:focus:border-orange-100 focus:outline-none"
              type="text"
              placeholder="Name"
            />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
            <div class="grid grid-cols-1">
              <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                Email
              </label>
              <input
                required
                class
                class=" py-2 px-3 shadow-xl border-orange-100 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-orange-100 dark:focus:border-orange-100 focus:outline-none"
                type="text"
                placeholder="Email"
              />
            </div>
            <div class="grid grid-cols-1">
              <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                Phone
              </label>
              <input
                required
                class="py-2 px-3 shadow-xl  border-orange-100 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-orange-100 dark:focus:border-orange-100 focus:outline-none"
                type="number"
                placeholder="Phone"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 mt-5 mx-7">
            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Service
            </label>
            <select class="py-2 shadow-xl  border-orange-100 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-orange-100 dark:focus:border-orange-100 focus:outline-none">
              <option>Apps Development</option>
              <option>Business Data Analytics</option>
              <option>E-Commerce</option>
              <option>ERP Service</option>
              <option>Software Development</option>
              <option>Website Development</option>

              <option>QA & Testing</option>
              <option>IT Consulting</option>
              <option>UI/UX Design</option>
            </select>
          </div>

          <div class="grid grid-cols-1 mt-5 mx-7">
            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Describe Your Project
            </label>
            <textarea
              class="block w-full px-4 py-2 border text-gray-500  shadow-xl   border-orange-100 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-orange-100 dark:focus:border-orange-100 focus:outline-none "
              name="message"
              required
            ></textarea>
          </div>

          <div class="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
            <Link to="/">
              <button class="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">
                Cancel
              </button>
            </Link>
            <button class="px-4 py-2 shadow-xl text-gray-100 transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-green-400 focus:outline-none">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estimate;
