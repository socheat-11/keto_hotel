import React, { useState, useEffect } from "react";
import banner1 from "../image/banner1.jpg"; // Ensure the correct file extension
import banner2 from "../image/banner2.jpg"; // Add more images if you want
import banner3 from "../image/banner3.jpg"; // Add more images if you want
import { ReactTyped } from "react-typed";
import BookingForm from "./BookingForm";
import About from "./About";
import Room from "./Room";
import Blog from "./Blog";
import Gallery from "./Gallery";
import Contact from "./Contact";

function Home(props) {
  // Array of background images
  const backgroundImages = [banner1, banner2, banner3];

  // State to keep track of the current background image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change the background image at regular intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        className="bg-cover bg-black bg-opacity-60 bg-center h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        }}
      >
        {/* Text Section */}
        <h1 className="text-[40px] font-bold text-white">
          <ReactTyped
            strings={[
              "Welcome to my<span class='text-[50px] text-[#fe0000] italic'> Hotel Keto !</span>",
              "Thailand and a guesthouse<span class='text-[50px] text-[#fe0000] italic'> in Pattaya !</span>",
              " Thailand !",
            ]}
            typeSpeed={100}
            backSpeed={60}
            loop
          />
        </h1>
        {/* Booking Form Section - Centered */}
        <div className="mt-10 flex justify-center items-center w-full max-w-md">
          <BookingForm />
        </div>
      </div>
      <About />
      <Room />
      <Gallery />
      <Blog />
      <Contact />
    </div>
  );
}

export default Home;
