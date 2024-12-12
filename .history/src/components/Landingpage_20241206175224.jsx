import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Timeline from './Timeline';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Landingpage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const scrollAnimation = gsap.to(videoElement, {
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: videoElement,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onLeave: () => videoElement.currentTime = 0, // Restart video when leaving
        onEnterBack: () => videoElement.currentTime = 0, // Restart video when scrolling back
      },
    });

    return () => {
      scrollAnimation.scrollTrigger.kill();
    };
  }, []);

  return (
    <div>
        <div className='relative h-[100vh] w-full overflow-hidden'>
            <video ref={videoRef} className='h-full w-full object-cover brightness-[40%]' autoPlay muted src="public/video/back.mp4"></video>
            <div className='absolute inset-0 leading-normal flex flex-col '>
                <Navbar/>
                <h1 className='flex-grow tracking-tighter mr-4 font-semibold text-[8.5vw] text-center mt-[17vh] bg-[#02a987] to-green-100 text-transparent bg-clip-text'>Innov-a-Thon'24 </h1>
                <h4 className='text-transparent text-[2.7vh] font-semibold text-center ml-[40vw] mb-[65vh] bg-gradient-to-r from-green-900 to-green-100 bg-clip-text'>Igniting Innovation, Fueling the Future</h4>
                <h3 className='p-12 absolute left-[36.8%] font-semibold top-32 text-zinc-400 text-[3.2vh]'>
                  DATE:
                  22nd December 2024</h3>
                <div className='absolute w-full top-[55%] flex justify-center'>
                
                <Timeline/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landingpage