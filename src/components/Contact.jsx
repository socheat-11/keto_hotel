import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <footer className="bg-gray-900 text-[#fff] ">
        <div className="max-w-screen-xl mx-auto py-5 p-4">
          <div class="flex">
            <div class="w-1/2">
              <div className="p-5">
              <input
                  type="text"
                  placeholder="Enter text here"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
            <div class="w-1/2">w-1/2</div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Contact;
