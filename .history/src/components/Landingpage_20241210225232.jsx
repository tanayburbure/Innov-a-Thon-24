import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Timeline from './Timeline';

export const Landingpage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    // Handle video scaling based on scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scaleValue = 1 + scrollPosition / 1800;
      videoElement.style.transform = `scale(${scaleValue})`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="relative h-[110vh] w-full overflow-hidden">
        {/* Background Video */}
        <video
          ref={videoRef}
          className="h-full w-full object-cover brightness-[40%]"
          autoPlay
          muted
          src="public/video/back.mp4"
        ></video>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col leading-normal">
          <Navbar />

          {/* Main Heading */}
          <h1 className="flex-grow tracking-tight font-semibold text-[8.4vw] text-center mt-[17vh] text-[#0D7C66] font-[font1] transition-transform sm:text-[12vw] md:text-[10vw] lg:text-[8.4vw]">
            INNOV-A-THON'24
          </h1>

          {/* Tagline */}
          <h4 className="text-transparent absolute top-[52vh] right-60 text-[2.8vh] font-light tracking-tight text-center bg-gradient-to-r from-[#0D7C66] to-green-300 bg-clip-text font-[font1] md:right-20 sm:top-[50vh] sm:right-10 sm:text-[2.2vh]">
            Igniting Innovation, Fueling the Future
          </h4>

          {/* Date */}
          <h3 className="p-12 absolute animate-glitch left-[36.4%] font-semibold text-[#B3C8CF] text-[3.2vh] top-32 font-[font1] md:left-[30%] md:top-[35%] sm:left-[25%] sm:top-[30%] sm:text-[2.8vh]">
            DATE: 22nd December 2024
          </h3>

          {/* Timeline Component */}
          <div className="absolute w-full top-[55%] flex justify-center sm:top-[65%]">
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
