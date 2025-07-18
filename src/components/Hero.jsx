import React from "react";

const grains = [
  "/images/grain1.jpg",
  "/images/grain2.png",
  "/images/grain3.png",
  "/images/grain4.png",
  "/images/grain5.png",
  "/images/grain6.png",
  "/images/grain7.png",
];

const Hero = () => {
  return (
    <div className="relative">
      <section
        className="text-white py-10 text-center h-[600px] flex items-center justify-center flex-col overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          clipPath: "ellipse(100% 100% at top)",
        }}
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Nurturing Homes with
            <br />
            <span className="text-[#074737]">The Goodness of the Harvest</span>
          </h1>
        </div>
      </section>
      <div className="flex justify-evenly w-full h-[120px] sm:h-[100px]">
        {/*
    Container height:
    - Default (xs and sm): 100px (adjust this if circles look too cramped or too far apart vertically)
    - md (768px+): 120px (Original height for desktop)

    You might need to adjust the sm:h value based on the final translate-y values.
    If the circles are still overlapping or too high/low, increase or decrease this.
  */}

        {/* First and Last Circles */}
        <div
          className="z-3 rounded-full bg-red-900 overflow-hidden
               w-16 h-16 /* Size for xs and sm screens (64px x 64px) */
               -translate-y-[130%] /* Base translation for xs/sm screens */
               md:w-20 md:h-20 md:-translate-y-[100%] /* Size and translation for desktop (md and up) */"
        >
          <img src={grains[0]} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Second and Fifth Circles */}
        <div
          className="z-3 rounded-full bg-red-900 overflow-hidden
               w-16 h-16 /* Size for xs and sm screens (64px x 64px) */
               -translate-y-[80%] /* Base translation for xs/sm screens */
               md:w-20 md:h-20 md:-translate-y-[70%] /* Size and translation for desktop (md and up) */"
        >
          <img src={grains[0]} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Third and Fourth Circles */}
        <div
          className="z-3 rounded-full bg-red-900 overflow-hidden
               w-16 h-16 /* Size for xs and sm screens (64px x 64px) */
               -translate-y-[50%] /* Base translation for xs/sm screens */
               md:w-20 md:h-20 md:-translate-y-[60%] /* Size and translation for desktop (md and up) */"
        >
          <img src={grains[0]} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Repeat for the other three circles, applying the same responsive classes */}
        <div
          className="z-3 rounded-full bg-red-900 overflow-hidden
               w-16 h-16 -translate-y-[50%]
               md:w-20 md:h-20 md:-translate-y-[60%]"
        >
          <img src={grains[0]} alt="" className="w-full h-full object-cover" />
        </div>
        <div
          className="z-3 rounded-full bg-red-900 overflow-hidden
               w-16 h-16 -translate-y-[80%]
               md:w-20 md:h-20 md:-translate-y-[70%]"
        >
          <img src={grains[0]} alt="" className="w-full h-full object-cover" />
        </div>
        <div
          className="z-3 rounded-full bg-red-900 overflow-hidden
               w-16 h-16 -translate-y-[130%]
               md:w-20 md:h-20 md:-translate-y-[100%]"
        >
          <img src={grains[0]} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
