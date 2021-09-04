import React from "react";
import "./Hero.css";
import Fade from "react-reveal/Fade";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import WebIcon from "@material-ui/icons/Web";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import EqualizerIcon from "@material-ui/icons/Equalizer";
const Herosection = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Fade left>
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font hero-text mb-4 font-medium  text-gray-900 -mt-10 ">
                {" "}
                Your technology partner for{" "}
                <span className="text-red-500">innovative</span> and{" "}
                <span className="text-red-500">impactful </span> software
                solutions.
              </h1>
              <div className="md:text-xl text-gray-700 font-mono mt-2 md:mt-2">
                <ol>
                  <li className="hover:text-red-500">
                    <WebIcon style={{ color: "FF616D" }}></WebIcon>&nbsp;Web
                    Apps Development
                  </li>
                  <li className="hover:text-red-500">
                    <PhoneIphoneIcon
                      style={{ color: "black" }}
                    ></PhoneIphoneIcon>
                    &nbsp;Mobile Apps Development
                  </li>
                  <li className="hover:text-red-500">
                    <EqualizerIcon style={{ color: "52006A" }}></EqualizerIcon>
                    &nbsp;Custom Software Services
                  </li>
                  <li className="hover:text-red-500">
                    <ArtTrackIcon style={{ color: "CD113B" }}></ArtTrackIcon>
                    &nbsp; UI/UX Design
                  </li>
                </ol>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className=" hero-img mt-12 md:mt-0 lg:mt-0 xl:mt-0">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src="./img/dash.gif"
              />
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
};

export default Herosection;
