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
          className="h-full w-full object-cover brightness-[40%] md:w-32 lg:w-48"
          autoPlay
          muted
          src="public/video/back.mp4"
        ></video>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col leading-normal">
          <Navbar />

          {/* Main Heading */}
          <h1 className="flex-grow tracking-tight font-semibold text-[8.4vw] text-center mt-[17vh] text-[#0D7C66] font-[font1] transition-transform">
            INNOV-A-THON'24
          </h1>

          {/* Tagline */}
          <h4 className="text-transparent absolute top-[52vh] right-60 text-[2.8vh] font-light tracking-tight text-center bg-gradient-to-r from-[#0D7C66] to-green-300 bg-clip-text font-[font1]">
            Igniting Innovation, Fueling the Future
          </h4>

          {/* Date */}
          <h3 className="p-12 absolute animate-glitch left-[36.4%] font-semibold text-[#B3C8CF] text-[3.2vh] top-32 font-[font1]">
            DATE: 22nd December 2024
          </h3>

          {/* Timeline Component */}
          <div className="absolute w-full top-[55%] flex justify-center">
            <Timeline />
          </div>

          {/* Glitch Animation Style */}
          <style jsx>{`
            @keyframes glitch {
              0% {
                text-shadow: 1px 1px 0 rgba(255, 0, 0, 0.7), -1px -1px 0 rgba(0, 255, 0, 0.7);
              }
              20% {
                text-shadow: 2px 2px 0 rgba(255, 0, 0, 0.7), -2px -2px 0 rgba(0, 255, 0, 0.7);
              }
              40% {
                text-shadow: -1px -1px 0 rgba(255, 0, 0, 0.7), 1px 1px 0 rgba(0, 255, 0, 0.7);
              }
              60% {
                text-shadow: 1px 1px 0 rgba(255, 0, 0, 0.7), -1px -1px 0 rgba(0, 255, 0, 0.7);
              }
              80% {
                text-shadow: 2px 2px 0 rgba(255, 0, 0, 0.7), -2px -2px 0 rgba(0, 255, 0, 0.7);
              }
              100% {
                text-shadow: -1px -1px 0 rgba(255, 0, 0, 0.7), 1px 1px 0 rgba(0, 255, 0, 0.7);
              }
            }
            .animate-glitch {
              animation: glitch 1.5s infinite;
            }
            .hover/:animate-glitch:hover {
              animation: glitch 4s infinite;
            }

          `}</style>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
