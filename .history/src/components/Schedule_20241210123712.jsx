import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Schedule = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Horizontal scrolling setup with GSAP and ScrollTrigger
    const scrollTriggerInstance = gsap.to(scrollContainerRef.current, {
      xPercent: -22, // Scroll through the entire width
      ease: "none",
      scrollTrigger: {
        trigger: scrollContainerRef.current,
        pin: true, // Pin the container during scroll
        scrub: 1, // Smooth scrubbing effect
        end: () => `+=${scrollContainerRef.current.scrollWidth}`, // Set end after scrolling through all content
      },
    });

    return () => {
      scrollTriggerInstance.scrollTrigger.kill(); // Cleanup on unmount
    };
  }, []);

  useEffect(() => {
    // Animate cards individually
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: index % 2 === 0 ? -20 : 20 }, // Start with translation and opacity
        {
          opacity: 1,
          x: 0, // Reset translation
          scrollTrigger: {
            trigger: card,
            start: "top 78%", // Trigger when card enters the viewport
            end: "top 30%",
            toggleActions: "play reverse play reverse", // Ensure animations play in both directions
          },
        }
      );
    });
  }, []);

  return (
    <div className="wrapper overflow-x-hidden">
      <div className="flex w-[270vw] h-screen" ref={scrollContainerRef}>
        <div className="w-[200vw] h-screen flex items-center">
          {/* Section Title */}
          <h1 className="absolute text-transparent bg-clip-text bg-gradient-to-t from-[#09a082] to-[#0D7C66] top-12 left-[61.5vw] text-[7.5vw] -tracking-[2px] font-[font1] font-semibold mb-[2vh]">
            SCHEDULE
          </h1>

          {/* Schedule Content */}
          <div className="absolute top-[38vh] left-[42vw] transform -translate-x-1/2 flex flex-col items-center">
            <div className="flex space-x-7 ml-[100vw] mt-[7vh] gap-[3.5vw] w-[170vw]">
              {[
                { time: "10:00 AM", title: "Opening Ceremony" },
                { time: "11:00 AM", title: "Keynote Speaker" },
                { time: "12:00 PM", title: "Workshop 1: Innovation in Tech" },
                { time: "1:00 PM", title: "Lunch Break" },
                { time: "2:00 PM", title: "Panel Discussion: Future of Technology" },
                { time: "3:00 PM", title: "Workshop 2: Building Your Startup" },
              ].map((event, index) => (
                <div className="text-white text-center" key={index}>
                  {/* Event Time */}
                  <h3 className="font-semibold mb-8 text-xl">{event.time}</h3>
                  {/* Event Card */}
                  <div
                    className={`card w-[20vw] h-[22vh] bg-gray-800 rounded-lg shadow-lg mt-2 opacity-0 transition-transform duration-500 ease-in-out ${
                      index % 2 === 0 ? "translate-x-[-20px]" : "translate-x-[20px]"
                    }`}
                  >
                    <p className="p-2 text-center font-semibold">{event.title}</p>
                    <p className="p-2 text-center text-gray-400">Details about the event</p>
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

export default Schedule;
