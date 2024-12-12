import React from 'react';
import MagneticGSAP from './MagneticGSAP';

const Navbar = () => {
  const smoothScroll = (target) => {
    const startPosition = window.pageYOffset;
    const distance = target - startPosition;
    const duration = 1000; // Duration in milliseconds
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
    <div className='relative px-4 pt-1 pr-3'>
      <div className='p-4 fixed z-50'>
        <img className='w-[4vw]' src="public/images/lobo.png" alt="" />
      </div>
      <div className='text-[#B3C8CF] tracking-wide font-[font7] text-[2.2vh] flex justify-end mr-44 pt-1 m-6 space-x-8'>
      <div className="flex items-center justify-center min-h-screen bg-black">
      <ul className="flex p-0 m-0 text-gray-400 uppercase font-bold text-xl">
        {[
          "Lrm",
          "Mollitia",
          "Commod!",
          "Dolorum?",
          "Soluta."
        ].map((item, index) => (
          <li
            key={index}
            className="relative px-2 py-1 cursor-pointer overflow-hidden transition-colors duration-300 hover:text-white"
          >
            <span className="relative z-10">{item}</span>
            <span
              className="absolute inset-0 bottom-[calc(100%-3px)] bg-orange-600
              scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
            ></span>
          </li>
        ))}
      </ul>
    </div>
        
        <span className="overflow-hidden whitespace-nowrap">
          <button className='px-3 -mt-[7px] border-none bg-[#41B3A2] ml-4 py-1 pb-[0.5vh] overflow-hidden text-black font-semibold rounded-full z-50 fixed hover:text-white'>
            <span className="inline-block animate-marquee font-[font4] text-[2.3vh]">Register Here</span>
          </button>
        </span>
        <style jsx>{`
          .animate-marquee {
            display: inline-block;
            animation: marquee 8s linear infinite; /* Increased duration for smoother transition */
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
    </div>
  );
}

export default Navbar;