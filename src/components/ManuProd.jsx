import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 👇 Place arrow components above here

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
    img: "/images/aata.png",
  },
  {
    title: "SUJI (Semolina)",
    desc: "High-quality semolina made from durum wheat, perfect for making upma...",
    packages: ["500 G", "45 KG"],
    img: "/images/aata.png",
  },
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
    img: "/images/aata.png",
  },
  {
    title: "SUJI (Semolina)",
    desc: "High-quality semolina made from durum wheat, perfect for making upma...",
    packages: ["500 G", "45 KG"],
    img: "/images/aata.png",
  },
];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-green-700 hover:bg-green-800 text-white p-2 rounded-full"
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
      className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-green-700 hover:bg-green-800 text-white p-2 rounded-full"
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
};

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3, // 3 on desktop
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024, // below desktop
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640, // mobile
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function ManuProd() {
  return (
    <section className="max-w-[1300px] py-16 m-auto  lg:px-20 relative md:px-0 px-8">
      <h2 className="bg-gradient-to-r from-[#084838] to-[#6ab34e] block text-center text-transparent bg-clip-text text-[4rem] font-bold mb-10">
        Manufacturing Products
      </h2>

      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="px-2 overflow-visible">
            <ProductCard {...product} />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export function ProductCard({ title, desc, packages }) {
  return (
    <div className="flex justify-center items-start px-2 h-full">
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-full flex flex-col">
        {/* Image */}
        <div className="flex justify-center -mb-[160px] relative z-10">
          <img
            src="/images/aata.png"
            alt={title}
            className="w-[90%] object-contain rounded-2xl shadow-lg bg-white border border-gray-100"
          />
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-xl shadow-md p-5 pt-[200px] w-full flex flex-col flex-grow">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-green-800 mb-2 truncate">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 mb-4 line-clamp-2 min-h-[40px]">
            {desc}
          </p>

          <div className="mb-4">
            <p className="font-semibold text-gray-700 text-sm sm:text-base">
              Available Packaging
            </p>

            <div className="flex flex-nowrap gap-2 mt-3 overflow-x-auto hide-scrollbar">
              {packages.map((p, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap bg-[#83D050] text-white text-xs font-semibold px-4 py-1 rounded-full"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <button className="bg-[#084838] text-white w-full py-2 px-4 rounded hover:bg-[#83D050] transition">
              Check Products &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
