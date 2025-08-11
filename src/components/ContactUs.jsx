function ContactUs() {
  return (
    <div className="relative">
      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-gradient-to-t from-[#eaffe3] via-[#eaffe3d9] to-transparent pointer-events-none" />

      <div className="min-h-screen p-5 font-inter mt-10">
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-[#084838] to-[#6ab34e] inline-block text-transparent bg-clip-text text-[2.5rem] md:text-[4rem] font-bold mb-4">
            Contact Us
          </h2>
        </div>

        <section className="max-w-[1300px] mx-auto w-full bg-green-50 p-6 md:p-12 rounded-lg shadow-lg">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
            {/* Card 1 - Phone */}
            <div className="flex items-start gap-4 p-4 md:p-6">
              <div className="flex-shrink-0 mt-1">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.01 21 3 13.99 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.57.12.35.03.75-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-green-700 mb-1">
                  Phone Number
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  +91 98290 11076
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 md:p-6">
              <div className="flex-shrink-0 mt-1">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div className="w-full">
                <h3 className="text-lg md:text-xl font-semibold text-green-700 mb-1">
                  Email
                </h3>
                <p className="break-all text-sm md:text-base text-gray-600">
                  sandeepatkariya@krishvana.com
                </p>
              </div>
            </div>

            {/* Card 3 - Address */}
            <div className="flex items-start gap-4 p-4 md:p-6">
              <div className="flex-shrink-0 mt-1">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-green-700 mb-1">
                  Registered Address
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  Krishvana Global Grains Pvt. Ltd. Plot # F-175, Industrial
                  Growth Center, Khara, Bikaner, Rajasthan, India - 334006
                </p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="my-10 max-w-full mx-auto shadow-lg rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.58579998184!2d73.04838637452336!3d26.28472537703358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c356f112e31%3A0x7d9a3e6a9d7b4b1a!2sJodhpur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="462"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Jodhpur, Rajasthan"
              className="rounded-lg"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactUs;
