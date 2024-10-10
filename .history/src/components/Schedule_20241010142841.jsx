import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Card";


gsap.registerPlugin(ScrollTrigger);
const Team = () => {
    const scrollContainerRef = useRef(null);
  
    useEffect(() => {
      // Setup GSAP ScrollTrigger
      gsap.to(scrollContainerRef.current, {
        xPercent: -67, // Scroll through 200% width (for 3 pages)
        ease: "none",
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          pin: true, // Pin the container while scrolling
          scrub: 1,  // Smooth scrubbing`
          end: () => `+=${scrollContainerRef.current.scrollWidth}`, // Set end after scrolling through all c// Snap to each page
        },
      });
      return () => {
        // Clean up ScrollTrigger instances
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }, []);
    return (
        <div className="wrapper overflow-x-hidden">
          <div className="flex w-[270vw] h-screen" ref={scrollContainerRef}>
            <div className="w-[200vw] h-screen flex items-center">
              <h1 className="absolute text-transparent bg-clip-text bg-gradient-to-t from-[#0D7C66] to-[#FCFAEE] top-8 left-[50vw] text-[9vw] mb-[2vh]">
               SCHEDULE
              </h1>
              <div className="absolute  top-[40vh] left-[50vw] transform -translate-x-1/2 flex flex-col items-center">
               
                <div className="flex space-x-8 ml-[100vw] mt-20 gap-[4vw] w-[170vw] ">
                  <div className="text-white text-center">
                    <h3 className="font-semibold">10:00 AM</h3>
                    <p>Opening Ceremony</p>
                  </div>
                  <div className="text-white text-center">
                    <h3 className="font-semibold">11:00 AM</h3>
                    <p>Keynote Speaker</p>
                  </div>
                  <div className="text-white text-center">
                    <h3 className="font-semibold">12:00 PM</h3>
                    <p>Workshop 1: Innovation in Tech</p>
                  </div>
                  <div className="text-white text-center">
                    <h3 className="font-semibold">1:00 PM</h3>
                    <p>Lunch Break</p>
                  </div>
                  <div className="text-white text-center">
                    <h3 className="font-semibold">2:00 PM</h3>
                    <p>Panel Discussion: Future of Technology</p>
                  </div>
                  <div className="text-white text-center">
                    <h3 className="font-semibold">3:00 PM</h3>
                    <p>Workshop 2: Building Your Startup</p>
                  </div>
                  <div className="text-white text-center">
                    <h3 className="font-semibold">5:00 PM</h3>
                    <p>Networking Session</p>
                  </div>
                  <div className="text-white text-center">
                    <h3 className="font-semibold">4:00 PM</h3>
                    <p>Prize Distribution</p>
                  </div>
                  <div className="text-white text-center">
                    <h3 className="font-semibold">6:00 PM</h3>
                    <p>Closing Remarks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  };
  

export default Team