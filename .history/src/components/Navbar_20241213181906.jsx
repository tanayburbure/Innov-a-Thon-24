import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
    // <div className="relative px-4 font-[font1] pt-1 pr-3">
    //   {/* Logo */}
    //   <div className="p-4 fixed z-50">
    //     <img className="w-[4vw]" src="public/images/lobo.png" alt="Logo" />
    //   </div>

    //   {/* Navigation Links */}
    //   <div className="text-[#B3C8CF] tracking-wide text-[2.2vh] flex justify-end mr-44 pt-1 m-6 space-x-8">
    //     <ul className="flex text-gray-400 font-bold">
    //       {[
    //         { name: "About", scrollPercentage: 265 },
    //         { name: "Prizes", scrollPercentage: 171 },
    //         { name: "Sponsors", scrollPercentage: 353 },
    //         { name: "FAQ", scrollPercentage: 1164 },
    //       ].map((item, index) => (
    //         <li
    //           key={index}
    //           className="relative px-4 py-2 -mt-2 cursor-pointer overflow-hidden transition-colors duration-300 hover:text-white group"
    //           onClick={() => smoothScroll(window.innerHeight * (item.scrollPercentage / 100))}
    //         >
    //           {item.name}
    //           <span className="absolute bottom-0 left-1 w-[90%] h-[2px] bg-[#006A67] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100"></span>
    //         </li>
    //       ))}
    //     </ul>

    //     {/* Register Button */}
    //     <span className="whitespace-nowrap">
    //       <button className="px-3 -mt-[3px] overflow-hidden border-none bg-[#41B3A2] ml-4 py-1 pb-[0.5vh] text-black font-semibold rounded-full z-50 fixed">
    //         <span className="inline-block animate-marquee font-[font4] text-[2.3vh]">
    //           Register Here
    //         </span>
    //       </button>
    //     </span>
    //   </div>

    //   {/* Animation Styles */}
    //   <style jsx>{`
    //     .animate-marquee {
    //       display: inline-block;
    //       animation: marquee 8s linear infinite; /* Smooth marquee animation */
    //     }

    //     @keyframes marquee {
    //       0% {
    //         transform: translateX(110%);
    //       }
    //       100% {
    //         transform: translateX(-110%);
    //       }
    //     }
    //   `}</style>
    // </div>
    <div className="flex w-screen items-start justify-between font-[font1] pt-1 pr-3">
      {/* Logo */}
      <div className="p-4 fixed z-50">
        <img className="w-[4vw]" src="public/images/lobo.png" alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className="relative right-[10vw] text-[#B3C8CF] tracking-wide z-50 text-[2.2vh] flex justify-end  pt-1 m-6 space-x-8">
        <div className="">
          <button className="text-gray-400 font-bold md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <ul className={`flex-col md:flex-row md:flex ${menuOpen ? 'flex' : 'hidden'} text-gray-400 font-bold`}>
            {[
              { name: "About", scrollPercentage: 265 },
              { name: "Prizes", scrollPercentage: 171 },
              { name: "Sponsors", scrollPercentage: 353 },
              { name: "FAQ", scrollPercentage: 1164 },
            ].map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 -mt-2 cursor-pointer overflow-hidden transition-colors duration-300 hover:text-white group"
                onClick={() => {
                  smoothScroll(window.innerHeight * (item.scrollPercentage / 100));
                  setMenuOpen(false);
                }}
              >
                {item.name}
                <span className="absolute bottom-0 left-1 w-[90%] h-[2px] bg-[#006A67] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100"></span>
              </li>
            ))}
          </ul>
        </div>
            
      </div>
        <div>
          {/* Register Button */}
        <span className="whitespace-nowrap">
          <button className="border-none bg-[#41B3A2]  pb-[0.5vh] text-black font-semibold rounded-full z-50 fixed">
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