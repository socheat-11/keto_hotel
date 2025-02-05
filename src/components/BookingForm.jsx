import React, { useState } from "react";

function BookingForm() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    setIsPopupVisible(false); // Close popup after submission
  };

  return (
    <div>
      {/* Booking Button */}
      <button
        onClick={() => setIsPopupVisible(true)}
        className="iinline-block text-[16px] py-2 px-5 rounded-full transition-all duration-[800ms] ease-in-out text-[#fff] bg-[#fe0000] hover:bg-transparent hover:text-[#fe0000] border-2 border-[#fe0000]"
      >
        Booking
      </button>

      {/* Popup Modal */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-black bg-opacity-60 p-6 border-l-4 border-[#fe0000] shadow-lg max-w-md w-full">
            <h2 className="text-2xl text-[#fff] font-bold mb-4 text-center">
              Book Your Appointment
            </h2>

            {/* Close Button */}
            <button
              onClick={() => setIsPopupVisible(false)}
              className="absolute top-3 right-3 text-[#fff] text-2xl hover:text-[#fe0000]"
            >
              &times;
            </button>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#fff]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full py-2 border text-[#fff] bg-transparent"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#fff]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full py-2 border text-[#fff] bg-transparent"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-[#fff]"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full text-sm py-2 border text-[#fff] bg-transparent"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-[#fff]"
                >
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full text-sm py-2 border text-[#fff] bg-transparent"
                />
              </div>

              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="inline-block text-[16px] py-2 px-5 rounded-full transition-all duration-[800ms] ease-in-out text-[#fff] bg-[#fe0000] hover:bg-transparent hover:text-[#fe0000] border-2 border-[#fe0000]"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingForm;
