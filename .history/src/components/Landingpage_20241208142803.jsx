import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Timeline from './Timeline';

export const Landingpage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    // Removed gsap scrollTrigger functionality
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scaleValue = 1 + scrollPosition / 1800; // Adjust scale based on scroll position
      videoElement.style.transform = `scale(${scaleValue})`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
        <div className='relative h-[110vh] w-full overflow-hidden'>
            <video ref={videoRef} className='h-full w-full object-cover brightness-[40%]' autoPlay muted src="public/video/back.mp4"></video>
            <div className='absolute inset-0 leading-normal flex flex-col '>
                <Navbar/>
                <h1 className='flex-grow tracking-tight mr-4 font-semibold text-[8.4vw] text-center mt-[17vh] text-green-300 font-[font1] transition-transform duration-300 animate-glitch'>INNOV-A-THON'24 </h1>
                <h4 className='text-transparent text-[2.8vh] font-light tracking-tight text-center ml-[40vw] mb-[65vh] bg-gradient-to-r from-green-900 to-green-100 bg-clip-text font-[font11]'>Igniting Innovation, Fueling the Future</h4>
                <h3 className='p-12 absolute z-10 left-[36.4%] font-semibold tracking- font-[font1] top-32 text-[#B3C8CF] text-[3.2vh] animate-glitch`'>
                  DATE:
                  22 nd December 2024
                </h3>
                <style jsx>{`
                  @keyframes glitch {
                    0% { text-shadow: 1px 1px 0 rgba(255, 0, 0, 0.7), -1px -1px 0 rgba(0, 255, 0, 0.7); }
                    20% { text-shadow: -1px -1px 0 rgba(255, 0, 0, 0.7), 1px 1px 0 rgba(0, 255, 0, 0.7); }
                    40% { text-shadow: 1px 1px 0 rgba(255, 0, 0, 0.7), -1px -1px 0 rgba(0, 255, 0, 0.7); }
                    60% { text-shadow: -1px -1px 0 rgba(255, 0, 0, 0.7), 1px 1px 0 rgba(0, 255, 0, 0.7); }
                    100% { text-shadow: 1px 1px 0 rgba(255, 0, 0, 0.7), -1px -1px 0 rgba(0, 255, 0, 0.7); }
                  }
                  .animate-glitch {
                    animation: glitch 0.7s infinite;
                  }
                  .hover\:animate-glitch:hover {
                    animation: glitch 0.8s infinite;
                  }
                `}</style>
                <div className='absolute w-full top-[55%] flex justify-center'>
                
                <Timeline/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landingpage