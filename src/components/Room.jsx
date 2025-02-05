import React, { Component } from "react";
import room1 from "../image/room1.jpg";
import room2 from "../image/room2.jpg";
import room3 from "../image/room3.jpg";
import room4 from "../image/room4.jpg";

class Room extends Component {
  render() {
    const rooms = [
      { id: 1, image: room1, title: "Luxury Suite", description: "If you are going to use a passage of Lorem Ipsum, you need to be sure there" },
      { id: 2, image: room2, title: "Deluxe Room", description: "If you are going to use a passage of Lorem Ipsum, you need to be sure there" },
      { id: 3, image: room3, title: "Standard Room", description: "If you are going to use a passage of Lorem Ipsum, you need to be sure there" },
      { id: 4, image: room4, title: "Family Room", description: "If you are going to use a passage of Lorem Ipsum, you need to be sure there" },
      { id: 2, image: room2, title: "Deluxe Room", description: "If you are going to use a passage of Lorem Ipsum, you need to be sure there" },
      { id: 3, image: room3, title: "Standard Room", description: "If you are going to use a passage of Lorem Ipsum, you need to be sure there" },
    ];

    return (
      <div className="bg-[#f4f5f7] py-5">
      <div className="max-w-screen-xl bg-[#f4f5f7] mx-auto p-4">
        {/* Title Section */}
        <div className="text-center">
          <h2 className="text-[35px] mb-3 font-extrabold uppercase">
            Our <span className="text-[#fe0000]">Rooms</span>
          </h2>
          <p className="text-[15px] font-medium text-gray-600">
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
                <h2 className="mt-3 text-xl mb-3 text-center font-semibold">{room.title}</h2>
                <p className="text-[15px] mb-8 text-center font-medium text-gray-600">{room.description}</p>
                </div>
            ))}
            </div>
      </div>
      </div>
    );
  }
}

export default Room;
