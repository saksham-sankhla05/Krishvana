import React from "react";
import { FaEye, FaSyncAlt } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

const VisionMission = () => {
  return (
    <div className="relative  mb-10 md:p-0 p-2">
      {/* Bottom Green Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#80DB6A]"></div>
      <div className="relative max-w-[1300px] py-12 m-auto md:px-20">
        <h2 className="bg-gradient-to-r from-[#084838] to-[#6ab34e] text-center text-transparent bg-clip-text text-3xl sm:text-4xl md:text-[4rem] font-bold md:mb-10">
          Our Vision & Mission
        </h2>

        {/* Content Row: Sidebar + Text + Image */}
        <div className="flex gap-10 items-stretch md:p-0 ">
          {/* Sidebar with bar and eye icon */}
          <div className="relative w-15 md:flex flex-col items-center hidden">
            {/* Stretchable container */}
            <div className="h-[95%] w-full flex-col items-center z-2 ">
              <div className="w-full h-full bg-gradient-to-b from-[#003700] to-[#80DB6A] rounded-b-full rounded-tl-4xl flex justify-center items-center">
                <div className="-rotate-90 whitespace-nowrap text-white font-semibold text-4xl">
                  Our Vision
                </div>
              </div>
            </div>

            {/* Eye icon aligned and connected */}
            <div className="absolute -bottom-19 sm:left-1/2 transform sm:-translate-x-1/2 flex flex-col items-center">
              <div className="w-[2px] h-[100px] bg-[#80DB6A] z-0 hidden sm:block"></div>
              <div className="w-10 h-10 sm:w-15 sm:h-15 bg-[#80DB6A] rounded-full flex items-center justify-center shadow-md">
                <FaEye className="text-white text-sm sm:text-3xl" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col-reverse gap-8 p-4 lg:flex-row md:gap-10 md:p-0">
            {/* Left Content (Text) */}
            <div className="w-full lg:max-w-[60%]">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#003700] mb-3">
                Growing Sustainably, Feeding Generations
              </h3>
              <p className="text-gray-800 mb-6 leading-relaxed text-base sm:text-lg md:text-xl">
                To be a globally recognized leader in agricultural products,
                setting benchmarks in quality, innovation, and sustainability.
                We aim to shape a future where nutritious, safe, and affordable
                food reaches every household while empowering farmers and
                preserving nature.
              </p>

              <ul className="space-y-4 text-base sm:text-lg md:text-xl">
                <li className="flex items-start gap-2">
                  <FaCircleCheck className="text-green-500 mt-1 shrink-0" />
                  <span>
                    <span className="text-green-700 font-semibold">
                      Excellence in Quality –{" "}
                    </span>
                    Delivering products that set the industry gold standard.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCircleCheck className="text-green-500 mt-1 shrink-0" />
                  <span>
                    <span className="text-green-700 font-semibold">
                      Innovation-Driven –{" "}
                    </span>
                    Advancing food processing through cutting-edge technology.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCircleCheck className="text-green-500 mt-1 shrink-0" />
                  <span>
                    <span className="text-green-700 font-semibold">
                      Sustainable Agriculture –{" "}
                    </span>
                    Protecting natural resources for future generations.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="mt-4 w-full md:text md:m-auto md:mt-0 md:w-[45%] lg:w-[30%]">
              <img
                src="/images/visoin-1.jpg"
                alt="Wheat Field"
                className="rounded-xl mx-auto shadow-lg w-[50%] md:w-full h-auto lg:h-[400px] md:m-0 mb-4"
              />
            </div>
          </div>
        </div>

        {/* Refresh Icon */}
        <div className="absolute -bottom-[7px] sm:bottom-0 right-6 transform translate-y-1/2">
          <div className="w-10 h-10 sm:w-15 sm:h-15 bg-[#80DB6A] rounded-full flex items-center justify-center shadow-md">
            <FaSyncAlt className="text-white text-sm sm:text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
