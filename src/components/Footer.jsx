import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const grains = [
  "/images/grain1.jpg",
  "/images/grain2.png",
  "/images/grain3.png",
  "/images/grain4.png",
  "/images/grain5.png",
  "/images/grain6.png",
  "/images/grain7.png",
];

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#EEFFE3] relative">
        {/* Grains & Grass Background */}

        <div className="absolute top-0 left-0 w-full h-[100%] z-0 overflow-hidden">
          {/* Grass Image Layer */}
          <div
            className="absolute inset-0 bg-no-repeat bg-bottom bg-cover"
            style={{
              backgroundImage: "url('/images/hero-bg.jpg')", // put correct path here
              clipPath: "ellipse(100% 100% at top)",
              zIndex: 0,
            }}
          ></div>

          {/* Gradient Overlay for soft bottom fade */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #EEFFE3 50%, rgba(238,255,227,0) 100%)",
              clipPath: "ellipse(100% 100% at top)",

              zIndex: 1,
            }}
          ></div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-2 md:grid-cols-3 gap-16 text-gray-800 z-10 relative">
          {/* Left */}
          <div>
            <img src="/logo.png" alt="Krishvana" className="h-14 mb-6" />
            <h3 className="font-semibold text-xl text-[#4CAF50] mb-3">
              Krishvana Global Grains Pvt. Ltd.
            </h3>
            <p className="text-base leading-relaxed">
              Where purity meets tradition. <br />
              From farm-fresh sourcing to advanced milling, we deliver wholesome
              grain products you can trust.
            </p>
          </div>

          {/* Center */}
          <div>
            <h4 className="font-semibold text-xl mb-5 text-[#4CAF50]">
              Company
            </h4>
            <ul className="space-y-3 text-base">
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
            <h4 className="font-semibold text-xl mb-5 text-[#4CAF50]">
              Contact
            </h4>
            <ul className="space-y-5 text-base">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#4CAF50]" /> +91 98290 11076
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#4CAF50]" />
                sandeepkatiyar@krishvana.com
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#4CAF50] mt-1" />
                <span>
                  Krishvana Global Grains Pvt. Ltd.
                  <br />
                  Plot # F-175, Industrial Growth Center,
                  <br />
                  Khara, Bikaner, Rajasthan, India - 334006
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/*Grains */}
        {/*Grains */}
        <div className="flex justify-evenly w-full h-[100px] sm:h-[120px] md:h-[150px] lg:h-[180px]">
          {/* The container height should also be adjusted based on how large you want the circles to be and their maximum translation */}

          {/* First and Last Circles */}
          <div
            className="z-3 rounded-full bg-red-900 overflow-hidden
               w-16 h-16  /* Base size for extra-small (xs) screens (48px) */
               translate-y-[-10%] /* Base translation for xs screens */
               sm:w-16 sm:h-16 sm:translate-y-[25%] /* Size and translation for small screens */
               md:w-20 md:h-20 md:translate-y-[75%] /* Size and translation for medium screens */
               lg:w-24 lg:h-24 lg:translate-y-[80%]" /* Optional: Add larger breakpoint if needed, adjust translate */
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
               w-16 h-16 /* Base size for extra-small (xs) screens (64px) */
               translate-y-[60%] /* Base translation for xs screens */
               sm:w-16 sm:h-16 sm:translate-y-[90%] /* Size and translation for small screens */
               md:w-20 md:h-20 md:translate-y-[100%] /* Size and translation for medium screens */
               lg:w-24 lg:h-24 lg:translate-y-[110%]" /* Optional: Add larger breakpoint if needed, adjust translate */
          >
            <img
              src={grains[0]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Third and Fourth Circles */}
          <div
            className="z-3 rounded-full bg-red-900 overflow-hidden
               w-16 h-16 /* Base size for extra-small (xs) screens (80px) */
               translate-y-[100%] /* Base translation for xs screens */
               sm:w-16 sm:h-16 sm:translate-y-[125%] /* Size and translation for small screens */
               md:w-20 md:h-20 md:translate-y-[120%] /* Size and translation for medium screens */
               lg:w-24 lg:h-24 lg:translate-y-[130%]" /* Optional: Add larger breakpoint if needed, adjust translate */
          >
            <img
              src={grains[0]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Repeat for the other three circles, applying the same responsive classes */}
          <div
            className="z-3 rounded-full bg-red-900 overflow-hidden
               w-16 h-16 /* Base size for extra-small (xs) screens (80px) */
               translate-y-[100%] /* Base translation for xs screens */
               sm:w-16 sm:h-16 sm:translate-y-[125%] /* Size and translation for small screens */
               md:w-20 md:h-20 md:translate-y-[120%] /* Size and translation for medium screens */
               lg:w-24 lg:h-24 lg:translate-y-[130%]" /* Optional: Add larger breakpoint if needed, adjust translate */
          >
            <img
              src={grains[0]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="z-3 rounded-full bg-red-900 overflow-hidden
               w-16 h-16 /* Base size for extra-small (xs) screens (80px) */
               translate-y-[60%] /* Base translation for xs screens */
               sm:w-16 sm:h-16 sm:translate-y-[90%] /* Size and translation for small screens */
               md:w-20 md:h-20 md:translate-y-[100%] /* Size and translation for medium screens */
               lg:w-24 lg:h-24 lg:translate-y-[110%]" /* Optional: Add larger breakpoint if needed, adjust translate */
          >
            <img
              src={grains[0]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="z-3 rounded-full bg-red-900 overflow-hidden
               w-16 h-16 /* Base size for extra-small (xs) screens (80px) */
               translate-y-[-10%] /* Base translation for xs screens */
               sm:w-16 sm:h-16 sm:translate-y-[35%] /* Size and translation for small screens */
               md:w-20 md:h-20 md:translate-y-[75%] /* Size and translation for medium screens */
               lg:w-24 lg:h-24 lg:translate-y-[80%]" /* Optional: Add larger breakpoint if needed, adjust translate */
          >
            <img
              src={grains[0]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </footer>
      {/* Bottom Bar */}
      <div className="w-full bg-[#EEFFE3] pt-20">
        <div className="bg-[#064E3B] text-white text-center py-5 text-base">
          © 2025 Krishvana Global Grains Pvt. Ltd. | Design and Developed by{" "}
          <span className="text-green-300 font-medium">LunarApps</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
