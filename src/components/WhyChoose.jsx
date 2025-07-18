import { FaEye, FaSyncAlt } from "react-icons/fa";

function WhyChoose() {
  return (
    <section class="about-us-section max-w-[1300px] m-auto py-10 custom-grain-pattern">
      <div class="container mx-auto px-4 w-full">
        <h2 class="bg-gradient-to-r from-[#084838] text-center to-[#6ab34e] text-transparent bg-clip-text text-[4rem] font-bold mb-4">
          Why Choose Us
        </h2>
        <p class="text-[2rem] text-[#084838] font-[600] mb-10 text-center">
          Commitment Beyond the Product
        </p>
        <div class="about-image my-10 max-w-full mx-auto shadow-lg rounded-lg overflow-hidden">
          <img
            src="images/about-us.jpg"
            alt="Field of Grains"
            class="w-full h-[418px] block"
          />
        </div>
        <ul className="space-y-10 text-2xl w-full">
          <li className="flex items-center gap-4">
            <div className="w-15 h-15 bg-[#80DB6A] rounded-full flex items-center justify-center shadow-md">
              <FaSyncAlt className="text-white text-3xl" />
            </div>
            <p className="w-[90%] leading-[1.7] tracking-wide">
              <span className="text-[#80DB6A] font-semibold">
                Uncompromising Quality :{" "}
              </span>
              We source only the finest grains and follow strict quality control
              measures to ensure every batch meets our high standards.
            </p>
          </li>
          <li className="flex items-center gap-4">
            <div className="w-15 h-15 bg-[#80DB6A] rounded-full flex items-center justify-center shadow-md">
              <FaSyncAlt className="text-white text-3xl" />
            </div>
            <p className="w-[90%] leading-[1.7] tracking-wide">
              <span className="text-[#80DB6A] font-semibold">
                Uncompromising Quality :{" "}
              </span>
              We source only the finest grains and follow strict quality control
              measures to ensure every batch meets our high standards.
            </p>
          </li>
          <li className="flex items-center gap-4">
            <div className="w-15 h-15 bg-[#80DB6A] rounded-full flex items-center justify-center shadow-md">
              <FaSyncAlt className="text-white text-3xl" />
            </div>
            <p className="w-[90%] leading-[1.7] tracking-wide">
              <span className="text-[#80DB6A] font-semibold">
                Uncompromising Quality :{" "}
              </span>
              We source only the finest grains and follow strict quality control
              measures to ensure every batch meets our high standards.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default WhyChoose;
