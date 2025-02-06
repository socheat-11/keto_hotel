import React, { useState, useEffect } from "react";
import bg_g from "../image/blog_bg.jpg";
import blog1 from "../image/blog1.jpg";
import blog2 from "../image/blog2.jpg";
import blog3 from "../image/blog3.jpg";


function Blog(props) {
  // Set up state for the current image index (if you want to cycle through images)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images
  const backgroundImages = [bg_g]; // Array should reference the imported image

  // Optionally, you could change images over time (for example, every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const rooms = [
    {
      id: 1,
      image: blog1,
      title_room: "Bed Room",
      title: "The standard chunk",
      description:
        "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are",
    },
    {
      id: 2,
      image: blog2,
      title_room: "Bed Room",
      title: "The standard chunk",
      description:
        "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are",
    },
    {
      id: 3,
      image: blog3,
      title_room: "Bed Room",
      title: "The standard chunk",
      description:
        "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are",
    },
  ];

  return (
    <div
      className="bg-cover  bg-black bg-opacity-60 bg-center py-10 flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
    >
      <div className="max-w-screen-xl mt-10 mx-auto p-4">
        {/* Title Section */}
        <div className="text-center">
          <h2 className="text-[35px] text-[#fff] mb-3 font-extrabold uppercase">
            blog<span className="text-[#fe0000]">s</span>
          </h2>
          <p className="text-[15px] font-medium text-[#fff]">
            Lorem Ipsum available, but the majority have suffered
          </p>
        </div>

        {/* Grid Layout */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white shadow-lg  overflow-hidden">
              <div className="overflow-hidden ">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full transition duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <h2 className=" text-xl mt-5 text-start ml-7 font-semibold">
                {room.title_room}
              </h2>
              <h2 className=" text-md mt-2 text-[#fe0000] text-start ml-7 font-semibold">
                {room.title}
              </h2>
              <p className="text-[15px] mt-2 mb-8 text-start ml-7 font-medium text-gray-600">
                {room.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
