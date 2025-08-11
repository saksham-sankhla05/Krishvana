function AboutUs() {
  return (
    <>
      <section className="about-us-section max-w-[1300px] m-auto py-10 px-4 text-center custom-grain-pattern">
        <div className="container mx-auto w-full">
          <h2 className="bg-gradient-to-r from-[#084838] to-[#6ab34e] inline-block text-transparent bg-clip-text text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-bold mb-4">
            About Us
          </h2>

          <p className="text-[1.25rem] sm:text-[1.75rem] md:text-[2rem] text-[#084838] font-semibold mb-6 sm:mb-8 md:mb-10">
            A Tradition of Quality, A Future of Trust
          </p>

          <p className="text-base sm:text-lg md:text-2xl text-[#555555] font-semibold text-left">
            <span className="font-bold">
              Welcome to Krishvana Global Grains Pvt
            </span>
            . Ltd, where we believe that the best meals begin with the finest
            ingredients. For generations, we have been dedicated to providing
            our customers with a range of wholesome and nutritious grain
            products. Our journey starts in the heart of the country's
            farmlands, where we source the best grains.
          </p>

          <div className="about-image my-8 sm:my-10 w-full mx-auto shadow-lg rounded-lg overflow-hidden">
            <img
              src="images/about-us.jpg"
              alt="Field of Grains"
              className="w-full h-[200px] sm:h-[300px] md:h-[418px] object-cover block"
            />
          </div>

          <p className="text-base sm:text-lg md:text-2xl text-[#555555] font-semibold text-left">
            Our state-of-the-art manufacturing facilities ensure that every
            product that leaves our mill is a testament to our commitment to
            quality. We combine traditional practices with modern technology to
            bring you products that are not only pure but also packed with
            natural goodness. As a trusted name in both manufacturing and
            trading, we are your reliable partner for all your grain-based
            needs.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
