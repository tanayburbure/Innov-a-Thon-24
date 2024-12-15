import React from "react";

function Sponsors() {
  const sponsorImages = [
    "public/images/programmer.png",
    "public/images/programmer.png",
    "public/images/programmer.png",
    "public/images/programmer.png",
    "public/images/programmer.png",
    "public/images/programmer.png",
    "public/images/programmer.png",
    "public/images/programmer.png",
    "public/images/programmer.png",
    "public/images/programmer.png",
    "public/images/programmer.png",
    "public/images/programmer.png",
  ];

  return (
    <div className="flex flex-col font-[font1] items-center font-semibold gap-8 justify-start h-[80vh] lg:h-[100vh] w-full text-white">
      {/* Title Section */}
      <h1 className="tracking-tight text-zinc-300 text-[10vw] lg:text-[8vw]">
        Our <span className="text-[#0D7C66]">Sponsors</span>
      </h1>

      {/* Sponsor Logos */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {sponsorImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Sponsor Logo ${index + 1}`}
            style={{ transition: "transform 0.3s ease-in-out" }}
            className="hover:scale-110 h-[12vh] lg:h-[12vw] rounded-lg shadow-md "
          />
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
