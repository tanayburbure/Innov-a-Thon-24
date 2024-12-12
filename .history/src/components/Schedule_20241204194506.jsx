import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const Schedule = () => {
    const scrollContainerRef = useRef(null);
  
    useEffect(() => {
      // Setup GSAP ScrollTrigger
      gsap.to(scrollContainerRef.current, {
        xPercent: -22.5, // Scroll through 200% width (for 3 pages)
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
              <h1 className="absolute text-transparent bg-clip-text bg-gradient-to-t from-[#09a082] to-[#0D7C66] top-12 left-[63vw] text-[7vw] font-semibold mb-[2vh]">
               SCHEDULE
              </h1>
              <div className="absolute  top-[40vh] left-[50vw] transform -translate-x-1/2 flex flex-col items-center">
               
                <div className="flex space-x-8 ml-[100vw] mt-20 gap-[4vw] w-[170vw] ">
                  <div className="text-white text-center">
                    <h3 className="font-semibold">10:00 AM</h3>
                    <p>Opening Ceremony</p>
                    <div className="w-[6vw] h-[4vh] bg-gray-800 rounded-lg shadow-lg mt-2 opacity-0 translate-y-4 transition-opacity duration-500 ease-in-out card" style={{ scrollTrigger: { trigger: scrollContainerRef.current, start: "top center", end: "bottom center", toggleActions: "play none none reverse", onEnter: () => { gsap.to(".card", { opacity: 1, translateY: 0 }); } } }}>
                      <p className="p-2 text-center">Details: Join us for the opening ceremony to kick off the event!</p>
                    </div>
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
  

export default Schedule