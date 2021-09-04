import React from "react";
import "./Navbar.css";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const history = useHistory();
  const estimate = () => {
    history.push("/estimate");
  };
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-lg">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Link to="/">
            {" "}
            <img
              className="img"
              src="./img/pandanew.svg"
              className="img w-full"
            ></img>
          </Link>
        </a>
        <nav class="md:ml-10 ml-5 md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" class="mr-5 text-black hover:text-red-500">
            {" "}
            HOME
          </Link>

          <Link to="/services" class="mr-5 text-black hover:text-red-500">
            SERVICE
          </Link>

          <Link to="/products" class="mr-5 text-black hover:text-red-500 ">
            {" "}
            PRODUCT
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
          <Link to="/contact=" class="mr-5 text-black hover:text-red-500">
            CONTACT
          </Link>

          <Link to="/contact=" class="mr-5 text-black hover:text-red-500">
            CONTACT
          </Link>
        </nav>

        <button
          onClick={estimate}
          class="inline-flex items-center bg-red-400 border-0 py-1 px-3 focus:outline-none  rounded text-white mt-4 md:mt-0"
        >
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
      </div>
    </header>
  );
};

export default Navbar;
