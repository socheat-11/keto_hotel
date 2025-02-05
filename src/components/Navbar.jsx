import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import Logo from "../image/logo.png";
import BookingForm from "./BookingForm";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Home", href: "/", color: "text-[#fe0000]" },
    { name: "About", href: "/about", color: "text-[#010101] hover:text-[#fe0000]" },
    { name: "Our Room", href: "/room", color: "text-[#010101] hover:text-[#fe0000]" },
    { name: "Gallery", href: "/gallery", color: "text-[#010101] hover:text-[#fe0000]" },
    { name: "Blog", href: "/blog", color: "text-[#010101] hover:text-[#fe0000]" },
    { name: "Contact Us", href: "/contact", color: "text-[#010101] hover:text-[#fe0000]" },
  ];

  return (
    <div className="bg-gray-100">
      <nav className="bg-[#fff] sticky top-0 z-50 shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <Link to="/">
            <img src={Logo} className="h-auto w-full" alt="KETO" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 w-10 h-10 flex items-center justify-center rounded-lg text-[#fe0000] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>

          {/* Navbar Links */}
          <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:flex md:items-center md:w-auto`}>
            <ul className="font-medium flex flex-col md:flex-row md:space-x-6 lg:space-x-12 mt-4 md:mt-0">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className={`inline-block text-[16px] py-2 transition-all duration-300 uppercase ${item.color}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <BookingForm />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
