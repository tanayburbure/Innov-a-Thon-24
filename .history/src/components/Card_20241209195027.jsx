import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Card.css';

gsap.registerPlugin(ScrollTrigger);

function Card() {
  const venueRef = useRef(null);

  useEffect(() => {
    
    gsap.to(venueRef.current, {
      scrollTrigger: {
        trigger: venueRef.current,
        start: "top 80% top 0%",
        end: "top 100%",
        toggleActions: "play none none reverse",
      },
      y: -100,
      opacity: 1,
      duration: 1,
    });
  }, []);

  return (
    <div className="flex flex-col h-[70vh] items-center pt-20" >
      <button className='bg-[#41B3A2] w-[15vw]  mb-8 font-[font6] text-2xl py-[6px] px-8 rounded-full border-[#41B3A2] text-zinc-900 font-bold '>Register Now
      <div className="star-1">
        <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
          style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}
          version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
          <defs></defs>
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
            <path
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              className="fil0"></path>
          </g>
        </svg>
      </div>
      <div className="star-2">
        <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
          style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}
          version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
          <defs></defs>
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
            <path
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              className="fil0"></path>
          </g>
        </svg>
      </div>
      <div className="star-3">
        <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
          style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}
          version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
          <defs></defs>
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
            <path
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              className="fil0"></path>
          </g>
        </svg>
      </div>
      <div className="star-4">
        <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
          style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}
          version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
          <defs></defs>
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
            <path
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              className="fil0"></path>
          </g>
        </svg>
      </div>
      <div className="star-5">
        <svg xmlnsXlink="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53"
          style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}
          version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
          <defs></defs>
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
            <path
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              className="fil0"></path>
          </g>
        </svg>
      </div>
      <div className="star-6">
        <svg xmlnsXlink="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53"
          style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}
          version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
          <defs></defs>
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
            <path
              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              className="fil0"></path>
          </g>
        </svg>
      </div>
    </button>
    <h3 ref={venueRef} className='text-center opacity-0 leading-[3.5vw] text-[#B3C8CF] text-[3.7vh] mt-36 font-[font7]  w-[72vw]'>
        <br />
          VENUE:
          <br />
          Department of Electronics & Telecommunication, 
          <br />
          AISSMS IOIT
    </h3>
    </div>
  );
}

export default Card;