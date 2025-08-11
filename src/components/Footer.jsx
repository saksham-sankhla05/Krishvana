import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const grains = [
  "/images/grain1.jpg",
  "/images/grain2.jpg",
  "/images/grain3.jpg",
  "/images/grain4.jpg",
  "/images/grain5.png",
  "/images/grain6.png",
  "/images/grain7.jpg",
];

const Footer = () => {
  return (
    <div className="w-full">
      <footer className="bg-[#EEFFE3] relative">
        {/* Background Layers */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div
            className="absolute inset-0 bg-bottom bg-no-repeat bg-cover"
            style={{
              backgroundImage: "url('/images/hero-bg.jpg')",
              clipPath: "ellipse(100% 100% at top)",
            }}
          ></div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #EEFFE3 50%, rgba(238,255,227,0) 100%)",
              clipPath: "ellipse(100% 100% at top)",
            }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-2 md:grid-cols-3 gap-10 text-gray-800">
          {/* Left */}
          <div className="col-span-2 md:col-span-1">
            <img src="/images/logo.png" alt="Krishvana" className="h-12 mb-4" />
            <h3 className="font-semibold text-lg sm:text-xl text-[#4CAF50] mb-2">
              Krishvana Global Grains Pvt. Ltd.
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Where purity meets tradition. <br />
              From farm-fresh sourcing to advanced milling, we deliver wholesome
              grain products you can trust.
            </p>
          </div>

          {/* Center */}
          <div>
            <h4 className="font-semibold text-lg sm:text-xl mb-4 text-[#4CAF50]">
              Company
            </h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>About Us</li>
              <li>Manufacturing Products</li>
              <li>Trading Products</li>
              <li>Why Choose Us</li>
              <li>Vision & Mission</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <h4 className="font-semibold text-lg sm:text-xl mb-4 text-[#4CAF50]">
              Contact
            </h4>
            <ul className="space-y-4 text-sm sm:text-base">
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#4CAF50]" /> +91 98290 11076
              </li>
              <li className="flex items-center gap-2 break-all">
                <FaEnvelope className="text-[#4CAF50] text-2xl" />
                sandeepkatiyar@krishvana.com
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-[#4CAF50] mt-1 text-2xl" />
                <span>
                  Krishvana Global Grains Pvt. Ltd. <br />
                  Plot # F-175, Industrial Growth Center, <br />
                  Khara, Bikaner, Rajasthan, India - 334006
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Grains Section */}
        {/*Grains */}
        <div className="flex justify-evenly w-full h-[100px] sm:h-[120px] md:h-[150px] lg:h-[180px]">
          {/* First and Last Circles */}
          <div
            className="z-3 rounded-full bg-red-900 overflow-hidden
               w-10 h-10  /* Base size for extra-small (xs) screens (48px) */
               translate-y-[20%] /* Base translation for xs screens */
               sm:w-16 sm:h-16 sm:translate-y-[25%] /* Size and translation for small screens */
               md:w-20 md:h-20 md:translate-y-[75%] /* Size and translation for medium screens */
               lg:w-24 lg:h-24 lg:translate-y-[80%]"
          >
            <img
              src={grains[0]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second and Fifth Circles */}
          <div
            className="z-3 rounded-full bg-red-900 overflow-hidden
               w-10 h-10 /* Base size for extra-small (xs) screens (64px) */
               translate-y-[120%] /* Base translation for xs screens */
               sm:w-16 sm:h-16 sm:translate-y-[120%] /* Size and translation for small screens */
               md:w-20 md:h-20 md:translate-y-[110%] /* Size and translation for medium screens */
               lg:w-24 lg:h-24 lg:translate-y-[115%]"
          >
            <img
              src={grains[1]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Third and Fourth Circles */}
          <div
            className="z-3 rounded-full bg-red-900 overflow-hidden
               w-10 h-10 /* Base size for extra-small (xs) screens (80px) */
               translate-y-[170%] /* Base translation for xs screens */
               sm:w-16 sm:h-16 sm:translate-y-[125%] /* Size and translation for small screens */
               md:w-20 md:h-20 md:translate-y-[125%] /* Size and translation for medium screens */
               lg:w-24 lg:h-24 lg:translate-y-[130%]"
          >
            <img
              src={grains[2]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Repeat for the other three circles, applying the same responsive classes */}
          <div
            className="z-3 rounded-full bg-red-900 overflow-hidden
               w-10 h-10 /* Base size for extra-small (xs) screens (80px) */
               translate-y-[190%] /* Base translation for xs screens */
               sm:w-16 sm:h-16 sm:translate-y-[125%] /* Size and translation for small screens */
               md:w-20 md:h-20 md:translate-y-[135%] /* Size and translation for medium screens */
               lg:w-24 lg:h-24 lg:translate-y-[135%]"
          >
            <img
              src={grains[3]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="z-3 rounded-full bg-red-900 overflow-hidden
               w-10 h-10 /* Base size for extra-small (xs) screens (80px) */
               translate-y-[180%] /* Base translation for xs screens */
               sm:w-16 sm:h-16 sm:translate-y-[90%] /* Size and translation for small screens */
               md:w-20 md:h-20 md:translate-y-[125%] /* Size and translation for medium screens */
               lg:w-24 lg:h-24 lg:translate-y-[130%]"
          >
            <img
              src={grains[4]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="z-3 rounded-full bg-red-900 overflow-hidden
               w-10 h-10 /* Base size for extra-small (xs) screens (80px) */
               translate-y-[120%] /* Base translation for xs screens */
               sm:w-16 sm:h-16 sm:translate-y-[35%] /* Size and translation for small screens */
               md:w-20 md:h-20 md:translate-y-[105%] /* Size and translation for medium screens */
               lg:w-24 lg:h-24 lg:translate-y-[115%]"
          >
            <img
              src={grains[5]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="z-3 rounded-full bg-red-900 overflow-hidden
               w-10 h-10 /* Base size for extra-small (xs) screens (80px) */
               translate-y-[25%] /* Base translation for xs screens */
               sm:w-16 sm:h-16 sm:translate-y-[35%] /* Size and translation for small screens */
               md:w-20 md:h-20 md:translate-y-[75%] /* Size and translation for medium screens */
               lg:w-24 lg:h-24 lg:translate-y-[80%]"
          >
            <img
              src={grains[6]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-[#EEFFE3] pt-12 z-0 ">
        <div className="bg-[#064E3B] text-white text-center py-4 text-sm sm:text-base">
          © 2025 Krishvana Global Grains Pvt. Ltd. | Design and Developed by{" "}
          <span className="text-green-300 font-medium">LunarEdge</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
