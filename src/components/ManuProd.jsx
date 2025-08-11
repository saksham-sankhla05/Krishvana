import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    title: "ATTA (Whole Wheat Flour)",
    desc: "Premium quality whole wheat flour made from carefully selected wheat grains...",
    packages: ["5 KG", "10 KG", "26 KG", "42 KG"],
    img: "/images/aata.png",
  },
  {
    title: "MAIDA (Refined Flour)",
    desc: "Fine quality refined flour ideal for baking, bread, cakes, pastries...",
    packages: ["500 G", "45 KG", "50 KG"],
    img: "/images/maida.png",
  },
  {
    title: "SUJI (Semolina)",
    desc: "High-quality semolina made from durum wheat, perfect for making upma...",
    packages: ["500 G", "45 KG"],
    img: "/images/suji.png",
  },
  // more items...
];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[-10px] sm:right-[-20px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-green-700 hover:bg-green-800 text-white p-2 rounded-full"
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-[-10px] sm:left-[-20px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-green-700 hover:bg-green-800 text-white p-2 rounded-full"
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function ManuProd({ title }) {
  return (
    <section className="max-w-[1300px] py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-20 mx-auto relative">
      <h2 className="bg-gradient-to-r from-[#084838] to-[#6ab34e] text-center text-transparent bg-clip-text text-3xl sm:text-4xl md:text-[4rem] font-bold md:p-2 mb-10">
        {title}
      </h2>

      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="px-1 sm:px-2">
            <ProductCard {...product} />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export function ProductCard({ title, desc, packages, img }) {
  return (
    <div className="flex justify-center items-start px-1 sm:px-2 h-full">
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg h-full flex flex-col">
        {/* Image */}
        <div className="flex justify-center -mb-[140px] sm:-mb-[160px] relative z-10">
          <img
            src={img}
            alt={title}
            className="w-[90%] object-contain rounded-2xl shadow-lg bg-white border border-gray-100"
          />
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 pt-[180px] sm:pt-[200px] w-full flex flex-col flex-grow">
          <h3 className="text-base sm:text-xl md:text-2xl font-semibold text-green-800 mb-2 truncate">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2 min-h-[36px] sm:min-h-[40px]">
            {desc}
          </p>

          <div className="mb-4">
            <p className="font-semibold text-gray-700 text-xs sm:text-sm mb-1">
              Available Packaging
            </p>

            <div className="flex flex-nowrap gap-2 overflow-x-auto hide-scrollbar">
              {packages.map((p, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap bg-[#83D050] text-white text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <button className="bg-[#084838] text-white w-full py-2 px-4 text-sm sm:text-base rounded hover:bg-[#83D050] transition">
              Check Products &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
