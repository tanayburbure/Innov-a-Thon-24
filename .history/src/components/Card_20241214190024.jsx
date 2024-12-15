import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import './Card.css';

gsap.registerPlugin(ScrollTrigger);

function Card() {
  const venueRef = useRef(null);

  useEffect(() => {
    gsap.to(venueRef.current, {
      scrollTrigger: {
        trigger: venueRef.current,
        start: "top 80%",
        end: "top 100%",
        toggleActions: "play none none reverse",
      },
      y: -150,
      opacity: 1,
      duration: 1,
    });
  }, []);

  return (
    <div className="flex flex-col h-[40vh] lg:h-[50vh] items-center pt-12 lg:pt-12">
      <button className="bg-[#41B3A2] mb-8 font-[font6] text-[4.5vw] lg:text-[1.7vw] py-[3px] px-2 lg:py-[2px] lg:px-7 rounded-full border-[#41B3A2] text-zinc-900 font-bold">
        Register Now
        <div className="star-1">
          <Star />
        </div>
        <div className="star-2">
          <Star />
        </div>
        <div className="star-3">
          <Star />
        </div>
        <div className="star-4">
          <Star />
        </div>
        <div className="star-5">
          <Star />
        </div>
        <div className="star-6">
          <Star />
        </div>
      </button>
      <h3
        ref={venueRef}
        className="text-center opacity-0 leading-[6vw] lg:leading-[7vh] text-[#B3C8CF] text-[2vh] lg:text-[2vw] mt-40 font-[font7] w-full"
      >
        <br />
        VENUE:
        <br />
        Department of Electronics & Telecommunication,
        <br />
        AISSMS IOIT
      </h3>
      <style jsx>{`
             :root {
      --color: #219B9D;
    }


    button {
      position: relative;
      background: var(--color);
      color: #181818;
      border: 3px solid var(--color);
      box-shadow: 0 0 0 #fec1958c;
      transition: all .3s ease-in-out;
      cursor: pointer;
     
    }

    .star-1 {
      position: absolute;
      top: 20%;
      left: 20%;
      width: 25px;
      height: auto;
      filter: drop-shadow(0 0 0 #fffdef);
      z-index: -5;
      transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
    }

    .star-2 {
      position: absolute;
      top: 45%;
      left: 45%;
      width: 15px;
      height: auto;
      filter: drop-shadow(0 0 0 #fffdef);
      z-index: -5;
      transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
    }

    .star-3 {
      position: absolute;
      top: 40%;
      left: 40%;
      width: 5px;
      height: auto;
      filter: drop-shadow(0 0 0 #fffdef);
      z-index: -5;
      transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
    }

    .star-4 {
      position: absolute;
      top: 20%;
      left: 40%;
      width: 8px;
      height: auto;
      filter: drop-shadow(0 0 0 #fffdef);
      z-index: -5;
      transition: all .8s cubic-bezier(0, 0.4, 0, 1.01);
    }

    .star-5 {
      position: absolute;
      top: 25%;
      left: 45%;
      width: 15px;
      height: auto;
      filter: drop-shadow(0 0 0 #fffdef);
      z-index: -5;
      transition: all .6s cubic-bezier(0, 0.4, 0, 1.01);
    }

    .star-6 {
      position: absolute;
      top: 5%;
      left: 50%;
      width: 5px;
      height: auto;
      filter: drop-shadow(0 0 0 #fffdef);
      z-index: -5;
      transition: all .8s ease;
    }

    button:hover {
      background: transparent;
      color: var(--color);
      box-shadow: 0 0 25px #fec1958c;
    }

    button:hover .star-1 {
      position: absolute;
      top: -80%;
      left: -30%;
      width: 25px;
      height: auto;
      filter: drop-shadow(0 0 10px #fffdef);
      z-index: 2;
    }

    button:hover .star-2 {
      position: absolute;
      top: -25%;
      left: 10%;
      width: 15px;
      height: auto;
      filter: drop-shadow(0 0 10px #fffdef);
      z-index: 2;
    }

    button:hover .star-3 {
      position: absolute;
      top: 55%;
      left: 25%;
      width: 5px;
      height: auto;
      filter: drop-shadow(0 0 10px #fffdef);
      z-index: 2;
    }

    button:hover .stars {
      display: block;
      filter: drop-shadow(0 0 10px #fffdef);
    }

    button:hover .star-4 {
      position: absolute;
      top: 30%;
      left: 80%;
      width: 8px;
      height: auto;
      filter: drop-shadow(0 0 10px #fffdef);
      z-index: 2;
    }

    button:hover .star-5 {
      position: absolute;
      top: 25%;
      left: 115%;
      width: 15px;
      height: auto;
      filter: drop-shadow(0 0 10px #fffdef);
      z-index: 2;
    }

    button:hover .star-6 {
      position: absolute;
      top: 5%;
      left: 60%;
      width: 5px;
      height: auto;
      filter: drop-shadow(0 0 10px #fffdef);
      z-index: 2;
    }

    .fil0 {
      fill: #FFFDEF
    }

    /* -- External Social Link CSS Styles -- */

    #source-link {
      top: 120px;
    }

    #source-link>i {
      color: rgb(94, 106, 210);
    }

    #yt-link {
      top: 65px;
    }

    #yt-link>i {
      color: rgb(219, 31, 106);

    }

    #Fund-link {
      top: 10px;
    }

    #Fund-link>i {
      color: rgb(255, 251, 0);

    }

    .meta-link {
      align-items: center;
      -webkit-backdrop-filter: blur(3px); /* For Safari support */
      backdrop-filter: blur(3px);
      background-color: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      display: inline-flex;
      gap: 5px;
      left: 10px;
      padding: 10px 20px;
      position: fixed;
      text-decoration: none;
      transition: background-color 600ms, border-color 600ms;
      z-index: 10000;
    }

    .meta-link:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .meta-link>i,
    .meta-link>span {
      height: 20px;
      line-height: 20px;
    }

    .meta-link>span {
      color: white;
      font-family: "Rubik", sans-serif;
      transition: color 600ms;
    }

          `}</style>
    </div>
  );
}

function Star() {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 784.11 815.53"
      style={{
        shapeRendering: 'geometricPrecision',
        textRendering: 'geometricPrecision',
        imageRendering: 'optimizeQuality',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }}
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          className="fil0"
        ></path>
      </g>
    </svg>
  );
}

export default Card;
