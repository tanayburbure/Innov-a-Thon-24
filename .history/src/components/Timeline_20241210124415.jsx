import React, { useState, useEffect } from "react";

function Timeline() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Function to calculate time left until the event
  function calculateTimeLeft() {
    const eventDate = new Date("2024-12-22T12:00:00"); // Event Date
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return null; // Event has started
    }
  }

  // Update the timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    <div className="absolute flex flex-col items-center text-center z-50 pr-4">
      {/* Title */}
      <h1 className="text-[#B3C8CF] font-[font1] text-[2.6vw] mt-36">
        HACKATHON BEGINS IN...
      </h1>

      {/* Countdown Display */}
      <div className="text-white text-[2vw] mt-4 font-bold">
        {timeLeft ? (
          <div className="flex font-bold font-[font1] space-x-3 items-center justify-center">
            <div className="flex flex-col items-center">
              <span className="w-[5.5vw] py-[0.8vh] rounded-2xl bg-[#41B3A2]">
                {timeLeft.days}
              </span>
              <span className="text-[1.5vw]">DAYS</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="w-[5.5vw] py-[0.8vh] rounded-2xl bg-[#41B3A2]">
                {timeLeft.hours}
              </span>
              <span className="text-[1.5vw]">HOURS</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="w-[5.5vw] py-[0.8vh] rounded-2xl bg-[#41B3A2]">
                {timeLeft.minutes}
              </span>
              <span className="text-[1.5vw]">MINUTES</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="w-[5.5vw] py-[0.8vh] rounded-2xl bg-[#41B3A2]">
                {timeLeft.seconds}
              </span>
              <span className="text-[1.5vw]">SECONDS</span>
            </div>
          </div>
        ) : (
          <span className="text-[#41B3A2] text-[2vw]">Event has started!</span>
        )}
      </div>
    </div>
  );
}

export default Timeline;
