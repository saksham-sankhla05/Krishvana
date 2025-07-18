import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#fff] fixed w-[100%] z-20 shadow-nav">
      <div className="max-w-[1300px] m-auto">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-10 w-15 flex items-center justify-center">
              <img src="images/logo.png" alt="" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              to="home"
              smooth={true}
              className="hover:text-[#83D050] text-primary hover:text-secondary hover:cursor-pointer transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="aboutus"
              smooth={true}
              className="hover:text-[#83D050] text-primary hover:text-secondary hover:cursor-pointer transition-colors font-medium"
            >
              About Us
            </Link>
            <Link
              to="manuprod"
              smooth={true}
              className="hover:text-[#83D050] text-primary hover:text-secondary hover:cursor-pointer transition-colors font-medium"
            >
              Products
            </Link>
            <Link
              to="whyus"
              smooth={true}
              className="hover:text-[#83D050] text-primary hover:text-secondary hover:cursor-pointer transition-colors font-medium"
            >
              Why Choose Us
            </Link>
            <Link
              to="visionmission"
              smooth={true}
              className="hover:text-[#83D050] text-primary hover:text-secondary hover:cursor-pointer transition-colors font-medium"
            >
              Vision & Mission
            </Link>
          </div>

          {/* Right Section - Search & Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-primary hover:text-secondary transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="hover:bg-[#83D050] hover:cursor-pointer bg-[#074737] text-[#fff] px-6 py-2 rounded-sm transition-colors shadow-sm">
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-primary p-2">
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white/80 backdrop-blur-md z-30 flex flex-col justify-center items-center px-6 py-8">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 text-primary hover:text-secondary transition-colors text-3xl"
          >
            &times;
          </button>

          {/* Centered Nav Links */}
          <div className="space-y-6 text-center">
            {[
              { label: "Home", to: "home" },
              { label: "About Us", to: "aboutus" },
              { label: "Products", to: "manuprod" },
              { label: "Why Choose Us", to: "whyus" },
              { label: "Vision & Mission", to: "visionmission" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="block text-primary hover:text-secondary transition-colors font-medium text-lg cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            {/* <button className="text-primary hover:text-secondary transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button> */}
            <button className="hover:bg-[#83D050] hover:cursor-pointer bg-[#074737] text-[#fff] px-6 py-2 rounded-sm transition-colors shadow-sm">
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
