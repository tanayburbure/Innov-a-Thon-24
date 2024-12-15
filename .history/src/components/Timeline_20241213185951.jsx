import React, { useState, useEffect } from "react";

function Timeline() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const eventDate = new Date("2024-12-22T12:00:00");
    const difference = eventDate - new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  }

  return (
    <div className="absolute flex flex-col items-center text-center z-50 pr-4">
      <h1 className="text-[#B3C8CF] font-[font1] text-[6vw] mt-36 lg:text-[5vh] lg:pl-[3.7vw]">
        HACKATHON BEGINS IN...
      </h1>
      <div className="text-black text-[5.5vw] mt-4 font-bold lg:text-[2.4vw] lg:pl-12">
        {timeLeft ? (
          <div className="flex font-bold font-[font1] space-x-3 items-center justify-center">
            <span className="w-[12vw] lg:w-[5.8vw] py-[0.5vh] lg:py-[0.3vh] rounded-2xl bg-[#41B3A2]">
              {timeLeft.days} <span className="text-[4.5vw] lg:text-[2vw]">D</span>
            </span>
            <span className="w-[12vw] lg:w-[5.8vw] py-[0.5vh] lg:py-[0.3vh] rounded-2xl bg-[#41B3A2]">
              {timeLeft.hours} <span className="text-[4.5vw] lg:text-[2vw]">H</span>
            </span>
            <span className="w-[12vw] lg:w-[5.8vw] py-[0.5vh] lg:py-[0.3vh] rounded-2xl bg-[#41B3A2]">
              {timeLeft.minutes} <span className="text-[4.5vw] lg:text-[2vw]">M</span>
            </span>
            <span className="w-[12vw] lg:w-[5.8vw] py-[0.5vh] lg:py-[0.3vh] rounded-2xl bg-[#41B3A2]">
              {timeLeft.seconds} <span className="text-[4.5vw] lg:text-[2vw]">S</span>
            </span>
          </div>
        ) : (
          <span>Event has started!</span>
        )}
      </div>
    </div>
  );
}

export default Timeline;
