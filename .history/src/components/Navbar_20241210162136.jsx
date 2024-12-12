import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  // Smooth scrolling function
  const smoothScroll = (target) => {
    const startPosition = window.pageYOffset;
    const distance = target - startPosition;
    const duration = 1000; // Scroll animation duration in milliseconds
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutQuad(progress);
      window.scrollTo(0, startPosition + distance * ease);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const easeInOutQuad = (t) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    requestAnimationFrame(animation);
  };

  return (
    <div className="relative px-4 font-[font1] pt-1 pr-3">
      {/* Logo */}
      <div className="p-4 fixed z-50">
        <img className="w-[4vw]" src="public/images/lobo.png" alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className="text-[#B3C8CF] tracking-wide text-[2.2vh] flex justify-end sm:justify-between items-center mr-44 pt-1 m-6 space-x-8 relative z-40">
        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-8 h-8 flex flex-col justify-center items-center"
          >
            <span
              className={`block w-6 h-1 bg-gray-400 transform transition-transform ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-1 bg-gray-400 my-1 transition-opacity ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-1 bg-gray-400 transform transition-transform ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <ul
          className={`sm:flex ${
            menuOpen ? "flex flex-col absolute bg-[#041F28] top-16 right-0 w-full py-4 space-y-4" : "hidden"
          }`}
        >
          {[
            { name: "About", scrollPercentage: 265 },
            { name: "Prizes", scrollPercentage: 171 },
            { name: "Sponsors", scrollPercentage: 353 },
            { name: "FAQ", scrollPercentage: 1164 },
          ].map((item, index) => (
            <li
              key={index}
              className="relative px-4 py-2 cursor-pointer transition-colors duration-300 hover:text-white"
              onClick={() => {
                smoothScroll(window.innerHeight * (item.scrollPercentage / 100));
                setMenuOpen(false); // Close menu after clicking
              }}
            >
              {item.name}
              <span className="absolute bottom-0 left-1 w-[90%] h-[2px] bg-[#006A67] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100"></span>
            </li>
          ))}
        </ul>

        {/* Register Button */}
        <span className="fixed sm:static bottom-4 left-1/2 transform -translate-x-1/2 sm:transform-none sm:ml-4">
          <button className="px-3 -mt-[3px] overflow-hidden border-none bg-[#41B3A2] py-1 pb-[0.5vh] text-black font-semibold rounded-full z-50">
            <span className="inline-block animate-marquee font-[font4] text-[2.3vh]">
              Register Here
            </span>
          </button>
        </span>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 8s linear infinite; /* Smooth marquee animation */
        }

        @keyframes marquee {
          0% {
            transform: translateX(110%);
          }
          100% {
            transform: translateX(-110%);
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
