import React from 'react';

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
    <div className='relative px-4 pr-8'>
      <div className='p-4 fixed z-50'>
        <img className='w-[4vw]' src="public/images/lobo.png" alt="" />
      </div>
      <div className='text-white text-lg flex justify-end mr-36 pt-1 m-6 space-x-8'>
        <h3 className='cursor-pointer' onClick={() => smoothScroll(2.56 * window.innerHeight)}>About</h3>
        <h3 className='cursor-pointer' onClick={() => smoothScroll(1.55 * window.innerHeight)}>Prizes</h3>
        <h3 className='cursor-pointer' onClick={() => smoothScroll(3.4 * window.innerHeight)}>Sponsors</h3>
        <h3 className='cursor-pointer' onClick={() => smoothScroll(11.65 * window.innerHeight)}>FAQ</h3>
        <span className="overflow-hidden whitespace-nowrap">
          <button className='px-2 border-2 border-[#0D7C66] ml-4 py-1 pb-[0.8vh] bg-[#1ED6A8] overflow-hidden text-black font-semibold rounded-full z-50 fixed animate-pulse hover:animate-none'>
            <span className="inline-block animate-marquee ">Register Here</span>
          </button>
        </span>
        <style jsx>{`
          .animate-marquee {
            display: inline-block;
            animation: marquee 7s linear infinite; /* Increased duration for smoother transition */
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