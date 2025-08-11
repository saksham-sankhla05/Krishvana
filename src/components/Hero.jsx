import React from "react";

const grains = [
  "/images/grain1.jpg",
  "/images/grain2.jpg",
  "/images/grain3.jpg",
  "/images/grain4.jpg",
  "/images/grain5.png",
  "/images/grain6.png",
  "/images/grain7.jpg",
];

const Hero = () => {
  return (
    <div className="relative">
      <section
        className="text-white py-10 text-center h-[500px] sm:h-[550px] md:h-[600px] flex items-center justify-center flex-col overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          clipPath: "ellipse(100% 100% at top)",
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight px-4">
          Nurturing Homes with
          <br />
          <span className="text-[#074737]">The Goodness of the Harvest</span>
        </h1>
      </section>
      <div className="flex justify-evenly w-full h-[0] sm:h-[100px]">
        {/* First and Last Circles */}
        <div
          className="z-3 rounded-full bg-red-900 overflow-hidden
               w-10 h-10 /* Size for xs and sm screens (64px x 64px) */
               -translate-y-[175%] /* Base translation for xs/sm screens */
               md:w-20 md:h-20 md:-translate-y-[110%] /* Size and translation for desktop (md and up) */"
        >
          <img src={grains[0]} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Second and Fifth Circles */}
        <div
          className="z-3 rounded-full bg-red-900 overflow-hidden
               w-10 h-10 /* Size for xs and sm screens (64px x 64px) */
               -translate-y-[105%] /* Base translation for xs/sm screens */
               md:w-20 md:h-20 md:-translate-y-[80%] /* Size and translation for desktop (md and up) */"
        >
          <img src={grains[1]} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Third and Fourth Circles */}
        <div
          className="z-3 rounded-full bg-red-900 overflow-hidden
               w-10 h-10 /* Size for xs and sm screens (64px x 64px) */
               -translate-y-[65%] /* Base translation for xs/sm screens */
               md:w-20 md:h-20 md:-translate-y-[60%] /* Size and translation for desktop (md and up) */"
        >
          <img src={grains[2]} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Repeat for the other three circles, applying the same responsive classes */}
        <div
          className="z-3 rounded-full bg-red-900 overflow-hidden
               w-10 h-10 -translate-y-[50%]
               md:w-20 md:h-20 md:-translate-y-[60%]"
        >
          <img src={grains[3]} alt="" className="w-full h-full object-cover" />
        </div>
        <div
          className="z-3 rounded-full bg-red-900 overflow-hidden
               w-10 h-10 /* Size for xs and sm screens (64px x 64px) */
               -translate-y-[65%] /* Base translation for xs/sm screens */
               md:w-20 md:h-20 md:-translate-y-[60%] /* Size and translation for desktop (md and up) */"
        >
          <img src={grains[4]} alt="" className="w-full h-full object-cover" />
        </div>
        <div
          className="z-3 rounded-full bg-red-900 overflow-hidden
               w-10 h-10 /* Size for xs and sm screens (64px x 64px) */
               -translate-y-[105%] /* Base translation for xs/sm screens */
               md:w-20 md:h-20 md:-translate-y-[80%] /* Size and translation for desktop (md and up) */"
        >
          <img src={grains[5]} alt="" className="w-full h-full object-cover" />
        </div>
        <div
          className="z-3 rounded-full bg-red-900 overflow-hidden
               w-10 h-10 /* Size for xs and sm screens (64px x 64px) */
               -translate-y-[175%] /* Base translation for xs/sm screens */
               md:w-20 md:h-20 md:-translate-y-[110%] /* Size and translation for desktop (md and up) */"
        >
          <img src={grains[6]} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
