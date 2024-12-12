import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap'; // Import GSAP
import Navbar from './Navbar';
import Timeline from './Timeline';

export const Landingpage = () => {
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const dateRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    // Removed gsap scrollTrigger functionality
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scaleValue = 1 + scrollPosition / 1800; // Adjust scale based on scroll position
      videoElement.style.transform = `scale(${scaleValue})`;
    };

    window.addEventListener('scroll', handleScroll);

    // GSAP animations for texts with increased opacity
    gsap.from(titleRef.current, { duration: 2, y: -50, opacity: 0, ease: "power2.out" });
    gsap.from(subtitleRef.current, { duration: 1, y: 50, opacity: 0, ease: "power2.out", delay: 0.5 });
    gsap.from(dateRef.current, { duration: 1, y: 50, opacity: 0, ease: "power2.out", delay: 1 });

    // Increase opacity of texts
    gsap.to(titleRef.current, { duration: 1, opacity: 1 });
    gsap.to(subtitleRef.current, { duration: 1, opacity: 1, delay: 0.5 });
    gsap.to(dateRef.current, { duration: 1, opacity: 1, delay: 1 });

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
                <h1 ref={titleRef} className='flex-grow z-[999] tracking-tight mr-4 font-semibold text-[8.4vw] text-center mt-[17vh] text-[#41B3A2] font-[font1] transition-transform opacity-0'>INNOV-A-THON'24 </h1>
                <h4 ref={subtitleRef} className='text-transparent text-[2.8vh] font-light tracking-tight  text-center ml-[40vw] mb-[65vh] bg-gradient-to-r from-green-900 to-green-100 bg-clip-text font-[font11] opacity-0'>Igniting Innovation, Fueling the Future</h4>
                <h3 ref={dateRef} className='p-12 absolute  animate-glitch z-10 left-[36.4%] font-semibold tracking- font-[font1] top-32 text-[#B3C8CF] text-[3.2vh] opacity-0'>
                  DATE:
                  22 nd December 2024
                </h3>
                <style jsx>{`
                  @keyframes glitch {
                    0% { text-shadow: 1px 1px 0 rgba(255, 0, 0, 0.5), -1px -1px 0 rgba(0, 255, 0, 0.5); }
                    10% { text-shadow: 2px 2px 0 rgba(255, 0, 0, 0.5), -2px -2px 0 rgba(0, 255, 0, 0.5); }
                    20% { text-shadow: -1px -1px 0 rgba(255, 0, 0, 0.5), 1px 1px 0 rgba(0, 255, 0, 0.5); }
                    30% { text-shadow: 1px 1px 0 rgba(255, 0, 0, 0.5), -1px -1px 0 rgba(0, 255, 0, 0.5); }
                    40% { text-shadow: 2px 2px 0 rgba(255, 0, 0, 0.5), -2px -2px 0 rgba(0, 255, 0, 0.5); }
                    50% { text-shadow: -1px -1px 0 rgba(255, 0, 0, 0.5), 1px 1px 0 rgba(0, 255, 0, 0.5); }
                    60% { text-shadow: -2px -2px 0 rgba(255, 0, 0, 0.5), 2px 2px 0 rgba(0, 255, 0, 0.5); }
                    70% { text-shadow: 1px 1px 0 rgba(255, 0, 0, 0.5), -1px -1px 0 rgba(0, 255, 0, 0.5); }
                    80% { text-shadow: 2px 2px 0 rgba(255, 0, 0, 0.5), -2px -2px 0 rgba(0, 255, 0, 0.5); }
                    90% { text-shadow: -1px -1px 0 rgba(255, 0, 0, 0.5), 1px 1px 0 rgba(0, 255, 0, 0.5); }
                    100% { text-shadow: 1px 1px 0 rgba(255, 0, 0, 0.5), -1px -1px 0 rgba(0, 255, 0, 0.5); }
                  }
                  .animate-glitch {
                    animation: glitch 5s infinite; /* Increased duration for less frequent glitching */
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