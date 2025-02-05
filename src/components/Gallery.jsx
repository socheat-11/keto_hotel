import React, { Component } from "react";
import room1 from "../image/gallery1.jpg";
import room2 from "../image/gallery2.jpg";
import room3 from "../image/gallery3.jpg";
import room4 from "../image/gallery4.jpg";
import room5 from "../image/gallery5.jpg";
import room6 from "../image/gallery6.jpg";
import room7 from "../image/gallery7.jpg";
import room8 from "../image/gallery8.jpg";

class Gallery extends Component {
  render() {
    const rooms = [
      { id: 1, image: room1, title: "Luxury Suite" },
      { id: 2, image: room2, title: "Deluxe Room" },
      { id: 3, image: room3, title: "Standard Room" },
      { id: 4, image: room4, title: "Family Room" },
      { id: 5, image: room5, title: "Deluxe Room" },
      { id: 6, image: room6, title: "Standard Room" },
      { id: 7, image: room7, title: "Standard Room" },
      { id: 8, image: room8, title: "Standard Room" },
    ];

    return (
      <div className="py-5">
        <div className="max-w-screen-xl mx-auto p-4">
          {/* Title Section */}
          <div className="text-center">
            <h2 className="text-[35px] mb-3 font-extrabold uppercase">
              gallery<span className="text-[#fe0000]">s</span>
            </h2>
            <p className="text-[15px] font-medium text-gray-600">
              Lorem Ipsum available, but the majority have suffered
            </p>
          </div>

          {/* Grid Layout */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {rooms.map((room) => (
              <div key={room.id} className="shadow-lg overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full transition duration-300 ease-in-out hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
