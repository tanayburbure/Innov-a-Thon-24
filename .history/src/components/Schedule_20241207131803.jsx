import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Schedule = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Setup GSAP ScrollTrigger
    const scrollTriggerInstance = gsap.to(scrollContainerRef.current, {
      xPercent: -21.7, // Scroll through 200% width (for 3 pages)
      ease: "none",
      scrollTrigger: {
        trigger: scrollContainerRef.current,
        pin: true, // Pin the container while scrolling
        scrub: 1,  // Smooth scrubbing
        end: () => `+=${scrollContainerRef.current.scrollWidth}`, // Set end after scrolling through all content
      },
    });
    return () => {
      // Clean up ScrollTrigger instances
      scrollTriggerInstance.scrollTrigger.kill();
    };
  }, []);
  
  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      gsap.fromTo(card, { opacity: 0, x: 0 }, { // Start with opacity 0 and translate in x direction
        opacity: 1,
        x: 0, 
        delay: index * 1, // Add a delay based on the index of the card
        scrollTrigger: {
          trigger: card,
          top: "top 78%", // When the top of the card hits 80% of the viewport height
          bottom: "top 30%", // Play on enter, reverse on leave
          // Ensure each card is visible one by one
          onEnter: () => {
            gsap.to(card, { opacity: 1, delay: index * 0.3 }); // Add delay to the visibility
          },
          onLeaveBack: () => {
            gsap.to(card, { opacity: 0}); // Add delay when scrolling back up
          },
        },
      });
    });
  }, []);
  
  return (
    <div className="wrapper overflow-x-hidden">
      <div className="flex w-[270vw] h-screen" ref={scrollContainerRef}>
        <div className="w-[200vw] h-screen flex items-center">
          <h1 className="absolute text-transparent bg-clip-text bg-gradient-to-t from-[#09a082] to-[#0D7C66] top-0 left-[60.7vw] text-[7.5vw] font-[font1] font-[600] mb-[2vh]">
            SCHEDULE
          </h1>
          <div className="absolute top-[40vh] left-[42vw] transform -translate-x-1/2 flex flex-col items-center">
            <div className="flex space-x-7 ml-[100vw] mt-[7vh] gap-[3.5vw] w-[170vw] ">
              {[
                { time: "10:00 AM", title: "Opening Ceremony" },
                { time: "11:00 AM", title: "Keynote Speaker" },
                { time: "12:00 PM", title: "Workshop 1: Innovation in Tech" },
                { time: "1:00 PM", title: "Lunch Break" },
                { time: "2:00 PM", title: "Panel Discussion: Future of Technology" },
                { time: "3:00 PM", title: "Workshop 2: Building Your Startup" },
              ].map((event, index) => (
                <div className="text-white text-center" key={index}>
                  <h3 className="font-semibold mb-8 text-xl">{event.time}</h3>
                  <div id={`card-${index}`} className={`card w-[20vw] h-[22vh] bg-gray-800 rounded-lg shadow-lg mt-2 opacity-0 translate-x-4 transition-opacity duration-500 ease-in-out ${index % 2 === 0 ? 'translate-x-[-20px]' : 'translate-x-[20px]'}`}>
                    <p className="p-2 text-center">{event.title}</p>
                    <p className="p-2 text-center">Details about the event</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add ScrollTrigger animations for cards visibility

export default Schedule;