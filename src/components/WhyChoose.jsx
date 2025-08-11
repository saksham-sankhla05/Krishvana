import { FaSyncAlt, FaLeaf, FaHandshake } from "react-icons/fa";

function WhyChoose() {
  return (
    <section className="about-us-section max-w-[1300px] m-auto py-10 px-4 text-center custom-grain-pattern">
      <div className="container mx-auto w-full">
        <h2 className="bg-gradient-to-r from-[#084838] to-[#6ab34e] inline-block text-transparent bg-clip-text text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-bold mb-4">
          Why Choose Us
        </h2>

        <p className="text-[1.25rem] sm:text-[1.75rem] md:text-[2rem] text-[#084838] font-semibold mb-6 sm:mb-8 md:mb-10">
          Commitment Beyond the Product
        </p>

        <div className="about-image my-8 sm:my-10 w-full mx-auto shadow-lg rounded-lg overflow-hidden">
          <img
            src="images/about-us.jpg"
            alt="Field of Grains"
            className="w-full h-[200px] sm:h-[300px] md:h-[418px] object-cover block"
          />
        </div>

        <ul className="space-y-10 max-w-full  text-left">
          {/* ITEM 1 */}
          <li className="flex sm:flex-row items-start gap-4">
            <div className="min-w-[30px] min-h-[30px] sm:min-w-[60px] sm:min-h-[60px] bg-[#80DB6A] rounded-full flex items-center justify-center shadow-md">
              <FaLeaf className="text-white text-[14px] sm:text-[24px]" />
            </div>
            <p className="text-base sm:text-lg md:text-2xl text-[#555555] font-semibold leading-[1.7] tracking-wide sm:text-left">
              <span className="text-[#80DB6A] font-bold">
                Customer-Centric Approach:{" "}
              </span>
              We prioritize your needs, offering tailored solutions and
              dependable service that exceed expectations.
            </p>
          </li>

          {/* ITEM 2 */}
          <li className="flex sm:flex-row items-start gap-4">
            <div className="min-w-[30px] min-h-[30px] sm:min-w-[60px] sm:min-h-[60px] bg-[#80DB6A] rounded-full flex items-center justify-center shadow-md">
              <FaSyncAlt className="text-white text-[14px] sm:text-[24px]" />
            </div>
            <p className="text-base sm:text-lg md:text-2xl text-[#555555] font-semibold leading-[1.7] tracking-wide sm:text-left">
              <span className="text-[#80DB6A] font-bold">
                Customer-Centric Approach:{" "}
              </span>
              We prioritize your needs, offering tailored solutions and
              dependable service that exceed expectations.
            </p>
          </li>
          {/* ITEM 3 */}
          <li className="flex sm:flex-row items-start gap-4">
            <div className="min-w-[30px] min-h-[30px] sm:min-w-[60px] sm:min-h-[60px] bg-[#80DB6A] rounded-full flex items-center justify-center shadow-md">
              <FaHandshake className="text-white text-[14px] sm:text-[24px]" />
            </div>
            <p className="text-base sm:text-lg md:text-2xl text-[#555555] font-semibold leading-[1.7] tracking-wide sm:text-left">
              <span className="text-[#80DB6A] font-bold">
                Customer-Centric Approach:{" "}
              </span>
              We prioritize your needs, offering tailored solutions and
              dependable service that exceed expectations.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default WhyChoose;
