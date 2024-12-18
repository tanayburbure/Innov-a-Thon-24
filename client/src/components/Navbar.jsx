import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const smoothScroll = (target) => {
    const startPosition = window.pageYOffset;
    const distance = target - startPosition;
    const duration = 1000;
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

  const navItems = [
    { name: "About", scrollPercentage: isLargeScreen ? 258 : 176 },
    { name: "Prizes", scrollPercentage: isLargeScreen ? 165 : 93 },
    { name: "Sponsors", scrollPercentage: isLargeScreen ? 352 : 257 },
    { name: "FAQ", scrollPercentage: isLargeScreen ? 1165 : 660 },
  ];

  return (
    <div className="flex w-[70vw] justify-between font-[font1] pt-1 pr-3 lg:px-2">
      {/* Logo */}
      <div className="p-2 lg:p-4 fixed z-50">
        <img className="w-[9vw] lg:w-[4vw]" src="/images/lobo.png" alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className="relative left-[60vw] lg:left-[62vw] text-[#B3C8CF] tracking-wide z-50 lg:text-[2.4vh] text-[2.2vh] flex justify-end mt-4 lg:mt-5 space-x-8 md:text-[2.2vw] md:left-[24vw]">
        <div>
          <button
            className="text-gray-400 border-none bg-transparent font-bold md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <ul
            className={`flex-col md:flex-row md:flex ${
              menuOpen ? "flex" : "hidden"
            } text-gray-400 font-bold`}
          >
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative px-4 py-2 -mt-2 cursor-pointer overflow-hidden transition-colors duration-300 hover:text-white group"
                onClick={() =>
                  smoothScroll(window.innerHeight * (item.scrollPercentage / 100))
                }
              >
                {item.name}
                <span className="absolute bottom-0 left-1 w-[90%] h-[2px] bg-[#006A67] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Register Button */}
      <div>
        <nav className="relative top-4 -right-8 whitespace-nowrap lg:left-[18vw] lg:top-5 md:left-[12vw]">
          <Link
            to="/registration"
            className="border-none bg-[#41B3A2] overflow-hidden pb-[0.5vh] text-black font-semibold rounded-full z-[99999] fixed"
          >
            <span className="inline-block animate-marquee font-[font4] text-[1.6vh] lg:text-[2.2vh] lg:px-3 lg:pt-[2.5px]">
              Register Here
            </span>
          </Link>
        </nav>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 8s linear infinite;
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
