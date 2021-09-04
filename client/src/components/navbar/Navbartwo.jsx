import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbartwo = () => {
  return (
    <div>
      <header class="text-gray-600 body-font header ">
        <div class=" shadow-lg container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/">
            {" "}
            <img src="./img/pandas.png" className="img"></img>
          </Link>
          <nav class=" font-sans font-semibold md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to="/" class="mr-5 text-black hover:text-red-500">
              {" "}
              HOME
            </Link>

            <Link to="/services" class="mr-5 text-black hover:text-red-500">
              SERVICES
            </Link>

            <Link to="/products" class="mr-5 text-black hover:text-red-500 ">
              {" "}
              PRODUCTS
            </Link>
            <Link to="/technologies" class="mr-5 text-black hover:text-red-500">
              {" "}
              TECHNOLOGIES
            </Link>

            <Link to="/industries" class="mr-5 text-black hover:text-red-500">
              {" "}
              INDUSTRIES
            </Link>

            <Link to="/career" class="mr-5 text-black hover:text-red-500">
              CAREER
            </Link>
            <Link to="/contact" class="mr-5 text-black hover:text-red-500">
              CONTACT
            </Link>
          </nav>

          <Link to="/estimate" class="mr-5 text-black hover:text-red-500">
            <button class="inline-flex items-center bg-red-400 border-0 py-1 px-3 focus:outline-none  rounded text-white mt-4 md:mt-0">
              Request an Estimate
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbartwo;
