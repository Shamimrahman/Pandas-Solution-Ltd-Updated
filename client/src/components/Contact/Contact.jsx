import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import emailjs from "emailjs-com";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eu532sn",
        "template_f7b5jad",
        e.target,
        "user_Uw0u0GDPt64cadquqey8M"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("Message Send Successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }
  return (
    <div>
      <div data-aos="fade-up" className="text-center mt-24">
        <h1 className="sm:text-3xl  text-4xl font-medium text-center title-font text-gray-900 mb-4">
          LET'S DISCUSS YOUR IDEAS
        </h1>
        <hr className="w-52 mx-auto mt-5 headline"></hr>
      </div>
      <section
        class="w-full mt-20 max-w-2xl px-6 py-4 mx-auto bg-orange-100 rounded-md shadow-xl dark:bg-gray-800 mb-16"
        data-aos="zoom-in-down"
      >
        <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white mt-10">
          Let's Talk
        </h2>
        <p class="mt-3 text-center text-gray-600 dark:text-gray-400">
          Tell us about your project. We know how to incorporate the tech
          solutions that best suit your case. Just drop us a line to get yours!
        </p>

        <div class="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 shadow-md">
          <a
            href="https://www.google.com/maps/place/Rd+No+3,+Dhaka+1230/@23.8754147,90.3909958,17z/data=!3m1!4b1!4m5!3m4!1s0x3755c4160ed065af:0x3c5d5a3036b09b7c!8m2!3d23.8754098!4d90.3931845"
            class="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 hover:bg-green-400 dark:hover:bg-blue-500"
          >
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>

            <span class="mt-2">Sector-11, House-20, Road-3, Uttara, Dhaka</span>
          </a>

          <a
            href="#"
            class="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 hover:bg-green-400 dark:hover:bg-blue-500"
          >
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>

            <span class="mt-2">+8801703493394</span>
          </a>

          <a
            href="https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
            class="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 hover:bg-green-400 dark:hover:bg-blue-500"
          >
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>

            <span class="mt-2"> pandas@gmail.com</span>
          </a>
        </div>

        <form onSubmit={sendEmail}>
          <div class="mt-6 ">
            <div class="items-center -mx-2 md:flex">
              <div class="w-full mx-2">
                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  Name
                </label>

                <input
                  class="block w-full px-4 py-2 text-gray-700 bg-orange-100 shadow-xl border   border-orange-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-orange-100 dark:focus:border-orange-100 focus:outline-none "
                  type="text"
                  name="name"
                  required
                />
              </div>

              <div class="w-full mx-2 mt-4 md:mt-0">
                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  E-mail
                </label>

                <input
                  class="block w-full px-4 py-2 text-gray-700 border bg-orange-100 shadow-xl  border-orange-100 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-orange-100 dark:focus:border-orange-100 focus:outline-none "
                  type="email"
                  name="email"
                  required
                />
              </div>

              <div class="w-full mx-2">
                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  Service
                </label>

                <input
                  class="block w-full px-4 py-2 text-gray-700 bg-orange-100 shadow-xl border   border-orange-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-orange-100 dark:focus:border-orange-100 focus:outline-none "
                  type="text"
                  name="subject"
                  placeholder="e.g: Website"
                  required
                />
              </div>
            </div>

            <div class="w-full mt-4 shadow-xl">
              <label class="block mb-2 text-sm font-medium  text-gray-600 dark:text-gray-200">
                Message
              </label>

              <textarea
                class="block w-full px-4 py-2 border text-gray-700 bg-orange-100 shadow-xl   border-orange-100 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-orange-100 dark:focus:border-orange-100 focus:outline-none "
                name="message"
                required
              ></textarea>
            </div>

            <div class="flex justify-center mt-6">
              <button
                class="px-4 py-2 shadow-xl text-gray-900 transition-colors duration-200 transform bg-orange-100 rounded-md hover:bg-green-400 focus:outline-none"
                type="submit"
                value="Send"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
