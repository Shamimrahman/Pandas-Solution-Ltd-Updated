import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
const Industrycard = ({ name, logo }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div
        class=" rounded-2xl bg-transparent dark:bg-gray-800 p-4"
        data-aos="flip-right"
      >
        <div class="flex-row gap-4 flex justify-center items-center">
          <div class="flex-shrink-0">
            <a href="#" class="block relative">
              <img
                alt="profil"
                src={logo}
                class="mx-auto shadow-2xl object-cover rounded-full h-16 w-16 Card"
              />
            </a>
          </div>
          <div class=" flex flex-col">
            <span class="text-gray-800 dark:text-white text-lg font-medium">
              {name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industrycard;
