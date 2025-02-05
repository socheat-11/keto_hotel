import React, { Component } from "react";
import about from "../image/about.png";
import AboutHeader from "./AboutHeader";

class About extends Component {
  render() {
    return (
      <div className="">
        <AboutHeader />
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 p-4">
              <h2 className="text-[35px] mb-3 font-extrabold uppercase">
                About <span className="text-[#fe0000]">US</span>
              </h2>
              <p className="text-[15px] text-start font-medium text-gray-600">
                The passage experienced a surge in popularity during the 1960s
                when Letraset used it on their dry-transfer sheets, and again
                during the 90s as desktop publishers bundled the text with their
                software. Today it's seen all around the web; on templates,
                websites, and stock designs. Use our generator to get your own,
                or read on for the authoritative history of lorem ipsum.
              </p>
              <div className="flex justify-start items-center">
                <button
                  type="submit"
                  id="loginBtn"
                  className="inline-block mt-5 text-[16px] py-2 px-5 rounded-full transition-all duration-[800ms] ease-in-out text-[#fff] bg-[#000000] hover:bg-[#fe0000] hover:text-[#fff] hover:border-[#fe0000]"
                >
                  Read More
                </button>
              </div>
            </div>
            <div className="w-full md:w-3/5  p-4">
              <div class="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  src={about}
                  class=" transition duration-300 ease-in-out hover:scale-110"
                  alt="About Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
