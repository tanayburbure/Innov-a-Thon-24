import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling menu

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
        <img className="w-[4vw] sm:w-12" src="public/images/lobo.png" alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center justify-between fixed top-0 left-0 w-full z-40 bg-transparent p-4">
        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-10 h-10 flex flex-col justify-center items-center group"
          >
            <span
              className={`block w-8 h-1 bg-gray-400 transition-transform ${
                menuOpen ? "transform rotate-45 translate-y-[10px]" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-gray-400 my-[4px] transition-opacity ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-gray-400 transition-transform ${
                menuOpen ? "transform -rotate-45 -translate-y-[10px]" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`sm:flex sm:space-x-8 text-[#B3C8CF] tracking-wide text-[2.2vh] font-bold ${
            menuOpen ? "flex flex-col items-center space-y-6 mt-16" : "hidden"
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
              className="cursor-pointer transition-colors duration-300 hover:text-white"
              onClick={() => {
                smoothScroll(window.innerHeight * (item.scrollPercentage / 100));
                setMenuOpen(false); // Close menu after clicking
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Register Button */}
        <button className="px-4 py-2 text-sm font-semibold text-black bg-[#41B3A2] rounded-full sm:fixed sm:right-6">
          Register Here
        </button>
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
