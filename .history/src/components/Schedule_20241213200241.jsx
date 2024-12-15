import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Schedule = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Check if the device is mobile
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
      // Setup GSAP ScrollTrigger for non-mobile devices
      const scrollTriggerInstance = gsap.to(scrollContainerRef.current, {
        xPercent: -22, 
        ease: "none",
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          pin: true, 
          scrub: 1,  
          end: () => `+=${scrollContainerRef.current.scrollWidth}`,
        },
      });
      return () => {
        scrollTriggerInstance.scrollTrigger.kill();
      };
    }
  }, []);
  
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) {
      const cards = document.querySelectorAll('.card');
      cards.forEach((card, index) => {
        gsap.fromTo(card, { opacity: 0, x: 0 }, { 
          opacity: 1,
          x: 0, 
          delay: index * 1, 
          scrollTrigger: {
            trigger: card,
            top: "top 78%", 
            bottom: "top 30%", 
            onEnter: () => {
              gsap.to(card, { opacity: 1, delay: index * 0.3 });
            },
            onLeaveBack: () => {
              gsap.to(card, { opacity: 0});
            },
          },
        });
      });
    }
  }, []);
  
  return (
    // <div className="wrapper overflow-x-hidden">
    //   <div className="flex w-[270vw] h-screen" ref={scrollContainerRef}>
    //     <div className="w-[200vw] h-screen flex items-center">
    //       <h1 className="absolute text-transparent bg-clip-text bg-gradient-to-t from-[#09a082] to-[#0D7C66] top-12 left-[61.5vw] text-[7.5vw] -tracking-[2px] font-[font1] font-[600] mb-[2vh]">
    //         SCHEDULE
    //       </h1>
          // <div className="absolute top-[38vh] left-[42vw] transform -translate-x-1/2 flex flex-col items-center">
          //   <div className="flex space-x-7 ml-[100vw] mt-[7vh] gap-[3.5vw] w-[170vw] ">
    //           {[
    //             { time: "10:00 AM", title: "Opening Ceremony" },
    //             { time: "11:00 AM", title: "Keynote Speaker" },
    //             { time: "12:00 PM", title: "Workshop 1: Innovation in Tech" },
    //             { time: "1:00 PM", title: "Lunch Break" },
    //             { time: "2:00 PM", title: "Panel Discussion: Future of Technology" },
    //             { time: "3:00 PM", title: "Workshop 2: Building Your Startup" },
    //           ].map((event, index) => (
    //             <div className="text-white text-center" key={index}>
    //               <h3 className="font-semibold mb-8 text-xl">{event.time}</h3>
    //               <div id={`card-${index}`} className={`card w-[20vw] h-[22vh] bg-gray-800 rounded-lg shadow-lg mt-2 opacity-0 translate-x-4 transition-opacity duration-500 ease-in-out ${index % 2 === 0 ? 'translate-x-[-20px]' : 'translate-x-[20px]'}`}>
    //                 <p className="p-2 text-center">{event.title}</p>
    //                 <p className="p-2 text-center">Details about the event</p>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="wrapper overflow-x-hidden">
      <div className="flex lg:w-[260vw] h-[210vh] lg-h-[100vh]" ref={scrollContainerRef}>
        <div className="w-[100vw] h-screen flex items-center justify-center">
          <h1 className="pb-[88vh] lg:pt-40 lg:pl-[55.5vw] text-transparent bg-clip-text bg-gradient-to-t from-[#09a082] to-[#0D7C66] text-[10.5vw] lg:text-[8vw] -tracking-[2px] font-[font3] font-[600] mb-[2vh]">
            SCHEDULE
          </h1>
          <div className="absolute mt-[105vh] lg:mt-[10vh] flex flex-col items-center">
            <div className="mt-[1vh] lg:ml-[100vw] lg:mt-[7vh] lg:gap-[3.5vw] lg:w-[170vw] lg:flex">
              {[
                { time: "10:00 AM", title: "Opening Ceremony" },
                { time: "11:00 AM", title: "Keynote Speaker" },
                { time: "12:00 PM", title: "Workshop 1: Innovation in Tech" },
                { time: "1:00 PM", title: "Lunch Break" },
                { time: "2:00 PM", title: "Panel Discussion: Future of Technology" },
                { time: "3:00 PM", title: "Workshop 2: Building Your Startup" },
              ].map((event, index) => (
                <div className="text-white text-center" key={index}>
                  <h3 className="font-semibold mb-4 text-xl mt-8">{event.time}</h3>
                  <div  className={`card w-[35vw] lg:w-[20vw] h-[22vh] lg:h-[25vh] bg-gray-800 rounded-lg shadow-lg mt-2 opacity-1 `}>
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

export default Schedule;