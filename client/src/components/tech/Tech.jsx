import React, { useEffect } from "react";
import "./Tech.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Tech = ({ image, title }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div style={{ margintop: "350px" }}>
        <div
          className="Card"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div class="p-2 sm:p-10 text-center">
            <div
              style={{ height: "180px" }}
              className="flex justify-center items-center w-full rounded overflow-hidden shadow-lg hover:bg-white bg-gray-100"
            >
              <div class="space-y-10">
                <div class="px-6 py-4">
                  <div class="px-10 ">
                    <img
                      className="w-28 lg:w-full h-28 object-contain "
                      src={image}
                      alt="tech"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
