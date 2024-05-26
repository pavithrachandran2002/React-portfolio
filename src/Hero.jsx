import React from "react";

function Hero() {
  return (
    <section className=" flex flex-col-reverse justify-center w-screen ">
      <div className=" px-4 mx-auto max-w-screen-xl text-center lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black-200 md:text-5xl lg:text-6xl dark:text-white mt-2">
          I'M PAVITHRA :)
        </h1>
        <p className="mb-8 text-lg font-normal text-black lg:text-xl sm:px-16 xl:px-48 dark:text-black">
          "I'M A UI/UX DESIGNER,FRONT END DEVELOPER"
        </p>
        <p className="mb-8 text-lg font-normal text-black-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam ea
          unde omnis at inventore cumque eos alias deserunt voluptatum maxime
          dolorum non sit, modi consectetur veniam ut ad quaerat nemo?
        </p>

        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <a href="/pavithra-canva-resume.pdf" download="Pavithra_resume">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-whiterounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-white rounded-md group-hover:bg-opacity-0">
                DOWNLOAD RESUME
              </span>
            </button>
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <img src="pavi123.jpg" className="w-48 h-48 rounded-full object-fill" />
      </div>
    </section>
  );
}

export default Hero;
