import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

gsap.registerPlugin(ScrollTrigger);

function Card() {
  const venueRef = useRef(null);
  const navigate = useNavigate(); // Initialize navigate

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

  // Function to handle the registration button click
  const handleRegisterClick = () => {
    navigate('/Registration'); // Use navigate to redirect to /Registration
  };

  return (
    <div className="flex flex-col h-[40vh] lg:h-[50vh] items-center pt-12 lg:pt-12">
      <button
        className="bg-[#41B3A2] mb-8 font-[font6] text-[4.5vw] lg:text-[1.7vw] py-[3px] px-2 lg:py-[2px] lg:px-7 rounded-full border-[#41B3A2] text-zinc-900 font-bold"
        onClick={handleRegisterClick} // Call the function on click
      >
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
          --color: #219b9d;
        }

        button {
          position: relative;
          background: var(--color);
          color: #181818;
          border: 3px solid var(--color);
          box-shadow: 0 0 0 #fec1958c;
          transition: all 0.3s ease-in-out;
          cursor: pointer;
        }

        .star-1,
        .star-2,
        .star-3,
        .star-4,
        .star-5,
        .star-6 {
          position: absolute;
          width: 25px;
          height: auto;
          filter: drop-shadow(0 0 0 #fffdef);
          z-index: -5;
          transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
        }

        .star-1 {
          top: 20%;
          left: 20%;
        }

        .star-2 {
          top: 45%;
          left: 45%;
          width: 15px;
        }

        .star-3 {
          top: 40%;
          left: 40%;
          width: 5px;
        }

        .star-4 {
          top: 20%;
          left: 40%;
          width: 8px;
        }

        .star-5 {
          top: 25%;
          left: 45%;
          width: 15px;
        }

        .star-6 {
          top: 5%;
          left: 50%;
          width: 5px;
        }

        button:hover {
          background: transparent;
          color: var(--color);
          box-shadow: 0 0 25px #fec1958c;
        }

        button:hover .star-1 {
          top: -80%;
          left: -30%;
          filter: drop-shadow(0 0 10px #fffdef);
          z-index: 2;
        }

        button:hover .star-2 {
          top: -25%;
          left: 10%;
          filter: drop-shadow(0 0 10px #fffdef);
          z-index: 2;
        }

        button:hover .star-3 {
          top: 55%;
          left: 25%;
          filter: drop-shadow(0 0 10px #fffdef);
          z-index: 2;
        }

        button:hover .star-4 {
          top: 30%;
          left: 80%;
          filter: drop-shadow(0 0 10px #fffdef);
          z-index: 2;
        }

        button:hover .star-5 {
          top: 25%;
          left: 115%;
          filter: drop-shadow(0 0 10px #fffdef);
          z-index: 2;
        }

        button:hover .star-6 {
          top: 5%;
          left: 60%;
          filter: drop-shadow(0 0 10px #fffdef);
          z-index: 2;
        }

        .fil0 {
          fill: #fffdef;
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
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        imageRendering: "optimizeQuality",
        fillRule: "evenodd",
        clipRule: "evenodd",
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
