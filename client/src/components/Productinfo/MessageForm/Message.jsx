import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Message = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
    <section id='message' class="flex flex-col items-center h-screen md:flex-row xs:mt-2 lg:mt-28">
    <div class="container mx-auto">
      <div class="flex justify-center px-2 py-6 ">
        <div class="flex w-full rounded-lg xl:w-3/4 lg:w-11/12 lg:shadow-xl ">
          <div class="relative hidden w-full h-auto bg-white bg-cover border-r rounded-l-lg lg:block lg:w-6/12" data-aos="fade-right">
            <div class="relative z-10 m-12 text-left ">
              <a class="flex items-center  mb-4 font-medium text-blueGray-900 title-font md:mb-10">
              <h2 class="text-lg font-bold tracking-tighter text-black uppercase transition duration-500 ease-in-out transform hover:text-lightBlack-500 dark:text-lightBlue-400"> Knock Us at any Time 🤙 </h2>

              </a>
              <h2 class="mt-12 mb-2 text-2xl font-semibold tracking-tighter text-black sm:text-3xl title-font">🏢 Office Address </h2>
              <br></br>
              <h2 className='text-xl'>Sector-11, House-20, House-3, Uttara, Dhaka</h2>

              <h2 class="mt-12 mb-2 text-2xl font-semibold tracking-tighter text-black sm:text-3xl title-font"> 📧 Email: </h2>
              <br></br>
              <h2 className='text-xl'>pandas.solution.limited@gmail.com</h2>

              <h2 class="mt-12 mb-2 text-2xl font-semibold tracking-tighter text-black sm:text-3xl title-font"> ☎️ Phone: </h2>
              <br></br>
              <h2 className='text-xl'>+8801703493394</h2>
            </div>
          </div>
          <div class="w-full  shadow-2xl px-8 py-24 bg-orange-100 rounded-lg border-blueGray-100 lg:w-8/12 lg:px-24 lg:py-4 lg:rounded-l-none s " data-aos="fade-left">
            <div class="relative z-10 text-left ">
              <div class="flex justify-enter lg:py-6">
             
                  <div class="flex items-center text-center justify-center">
                  
                    <h1 class="ml-4 text-3xl text-center -mt-14">  Reach us right here for demo.... </h1>
                  </div>
              
              </div>
              <form class="mt-6" id='#message' action="#" method="POST">
                <div>
                  <label class="block text-base font-medium leading-relaxed text-blueGray-700"> Name</label>
                  <input type="text" name="" id="" placeholder="Your  Name " class="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-orange-100 focus:outline-none focus:shadow-outline focus:ring-1 shadow-xl ring-offset-current ring-offset-2 text-black focus:border-blueGray-500"/>
                </div>
                <div class="mt-4">
                  <label class="block text-base font-medium leading-relaxed text-blueGray-700">Email Address</label>
                  <input type="email" name="" id="" placeholder="Your Email " class=" shadow-xl w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-orange-100 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-blueGray-500" autocomplete="" required=""/>
                </div>
                <div class="flex flex-wrap mt-4 mb-6 -mx-3">
                  <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                    <label class="text-base font-medium leading-relaxed text-blueGray-700" for="password" minlength="11"> Phone </label>
                    <input class="shadow-xl block w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-orange-100 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-red-500" id="password" type="text" placeholder="Your Phone"/>
                  </div>
                  
                
                </div>

                <div class="mt-4">
                <label class="block text-base font-medium leading-relaxed text-blueGray-700">Type of Service You Are Looking for</label>
                <input type="email" name="" id="" placeholder="Your Service " class=" shadow-xl w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-orange-100 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-blueGray-500" autocomplete="" required=""/>
              </div>
                <button type="submit" class="block w-full px-4 py-3 mt-6 font-semibold bg-red-100 text-white transition duration-500 ease-in-out transform rounded-lg bg-gradient-to-r from-red-500 hover:from-green-800 to-red-600 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 hover:to-green-600">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    </div>
  );
};

export default Message;
