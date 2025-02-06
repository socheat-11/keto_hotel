import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="mt-10 ">
        <div className="max-w-screen-xl mx-auto py-5 p-4">
          <div className="text-center">
            <h2 className="text-[35px] mb-3 font-extrabold uppercase">
              Contact <span className="text-[#fe0000]">US</span>
            </h2>
            <p className="text-[15px] font-medium text-gray-600">
              Lorem Ipsum available, but the majority have suffered
            </p>
          </div>
          <div className="flex flex-col md:flex-row mt-5 gap-4">
            <div className="w-full md:w-1/2">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 drop-shadow-md py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full px-4 drop-shadow-md py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full px-4 drop-shadow-md py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="mb-5">
                <textarea
                  id="message"
                  rows="4"
                  className="block drop-shadow-md py-3 border px-4 focus:outline-none focus:ring-2 focus:ring-red-500 w-full "
                  placeholder="Messenger a comment..."
                ></textarea>
              </div>

              <div className="mb-5">
                <div className="flex justify-start items-start">
                  <button
                    type="submit"
                    className="inline-block text-[16px] py-2 px-5 rounded-full transition-all duration-[800ms] ease-in-out text-[#fff] bg-[#fe0000] hover:bg-transparent hover:text-[#fe0000] border-2 border-[#fe0000]"
                  >
                    Messenger
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="w-full h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31268.98722306305!2d104.8804896751782!3d11.578832357519147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sruupp!5e0!3m2!1sen!2skh!4v1738781354759!5m2!1sen!2skh"
                  className="w-full h-80 md:h-[400px]"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
