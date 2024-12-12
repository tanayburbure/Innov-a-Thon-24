import React, { useState } from 'react';
import MagneticGSAP from './MagneticGSAP';

const Navbar = () => {
  const [typingIndex, setTypingIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [currentItem, setCurrentItem] = useState('');

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

  const handleMouseEnter = (name) => {
    setCurrentItem(name);
    setIsTyping(true);
    setTypingIndex(0);
    const typingEffect = setInterval(() => {
      setTypingIndex((prevIndex) => {
        if (prevIndex < name.length) {
          return prevIndex + 1;
        } else {
          clearInterval(typingEffect);
          return prevIndex;
        }
      });
    }, 150); // Adjust typing speed here
  };

  const handleMouseLeave = () => {
    setIsTyping(false);
    setTypingIndex(0);
    setCurrentItem('');
  };

  return (
    <div className='relative px-4 pt-1 pr-3'>
      <div className='p-4 fixed z-50'>
        <img className='w-[4vw]' src="public/images/lobo.png" alt="" />
      </div>
      <div className='text-[#B3C8CF] tracking-wide font-[font7] text-[2.1vh] flex justify-end mr-44 pt-1 m-6 space-x-8'>
          <ul className="flex text-gray-400 uppercase font-bold ">
            {[
              { name: "About", scrollPercentage: 265 },
              { name: "prizes", scrollPercentage: 171 },
              { name: "sponsors", scrollPercentage: 353 },
              { name: "FAQ", scrollPercentage: 1164 }
            ].map((item, index) => (
              <li
                key={index}
                className="relative px-4 py-2 -mt-2 cursor-pointer overflow-hidden transition-colors duration-300 hover:text-white group"
                onClick={() => smoothScroll(window.innerHeight * (item.scrollPercentage / 100))}
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <span className="terminal-effect" style={{ display: 'inline-block', width: '100%' }}>
                  {isTyping && currentItem === item.name ? item.name.substring(0, typingIndex) : item.name}
                </span>
                <span
                  className="absolute bottom-0 left-1  w-[90%] h-[2px] bg-[#006A67] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100"
                ></span>
              </li>
            ))}
          </ul>
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

          .terminal-effect {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            border-right: 2px solid orange; /* Cursor effect */
            animation: blink-caret .75s step-end infinite; /* Blinking cursor */
          }

          @keyframes blink-caret {
            from, to { border-color: transparent; }
            50% { border-color: orange; }
          }
        `}</style>
      </div>
    </div>
  );
}

export default Navbar;