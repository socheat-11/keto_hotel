import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
  render() {
    return (
      <footer className="bg-gray-900 text-[#fff] ">
        <div className="max-w-screen-xl mx-auto py-12 p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="text-[25px] font-bold underline-offset-[13px] underline decoration-[#fe0000] decoration-[3px] mb-4">
                Contact US
              </h3>
              <ul className="space-y-2 mt-7">
                <li>
                  <a href="#" className="flex items-center mb-4 space-x-2 ">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="w-6 h-6 text-[#fe0000]"
                    />
                    <span className="hover:text-[#fe0000]">
                      Phnom Penh, Cambodia
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/about" className="flex mb-4 items-center space-x-2">
                    <PhoneIcon className="w-6 h-6 text-[#fe0000]" />
                    <span className="hover:text-[#fe0000]">
                      +855 123 456 789
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center mb-4 space-x-2 ">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="w-6 h-6 text-[#fe0000]"
                    />
                    <span className="hover:text-[#fe0000]">
                      example@gmail.com
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-[25px] font-bold underline-offset-[13px] underline decoration-[#fe0000] decoration-[3px] mb-4">
                Menu Links
              </h3>
              <ul className="space-y-2 mt-7">
                <li>
                  <a
                    href="#"
                    className="fle hover:text-[#fe0000] items-center mb-4"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="fle hover:text-[#fe0000] items-center mb-4"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="fle hover:text-[#fe0000] items-center mb-4"
                  >
                    Our Room
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="fle hover:text-[#fe0000] items-center mb-4"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="fle hover:text-[#fe0000] items-center mb-4"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="fle hover:text-[#fe0000] items-center mb-4"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-[25px] font-bold underline-offset-[13px] underline decoration-[#fe0000] decoration-[3px] mb-4">
                News Letter
              </h3>
              <div className="mt-7">
                <input
                  type="text"
                  placeholder="Enter text here"
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="mt-5">
                <button className="iinline-block text-[16px] font-medium uppercase py-2 px-5  transition-all duration-[800ms] ease-in-out text-[#fe0000] hover:text-[#fff] bg-[#fff] hover:bg-[#fe0000] hover:text-[#[#fff]]">
                  subscribe
                </button>
              </div>
              <div className="mt-5 flex  space-x-5 items-center">
                <div className="">
                    <FontAwesomeIcon
                        icon={faFacebook}
                        className="w-8 h-8 text-[#fff] hover:text-[#fe0000]"
                    />
                </div>

                <div className="">
                    <FontAwesomeIcon
                        icon={faTwitter}
                        className="w-8 h-8 text-[#fff] hover:text-[#fe0000]"
                    />
                </div>

                <div className="">
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className="w-8 h-8 text-[#fff] hover:text-[#fe0000]"
                    />
                </div>
                <div className="">
                    <FontAwesomeIcon
                        icon={faYoutube}
                        className="w-8 h-8 text-[#fff] hover:text-[#fe0000]"
                    />
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
        </div>
        <div className="bg-white py-4 text-center border-[#fe0000] border-2 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </footer>
    );
  }
}

export default Footer;
