import React, { useState, useEffect } from 'react';

function Timeline() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const eventDate = new Date('2024-12-22T12:00:00');
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  return (
    <div className="absolute flex flex-col items-center text-center z-50">
      <h1 className="text-zinc-400 font-[font3] text-[2.6vw] mt-36">HACKETHON BEGINS IN...</h1>
      <div className="text-white text-[2vw] mt-4 font-bold">
        {timeLeft.days !== undefined ? (
          <div className="flex space-x-2 items-center gap-4 text-black justify-center">
            <span className="w-[5.5vw] py-[0.8vh] rounded-2xl bg-[#0D7C66]">{timeLeft.days} <span className='text-[1.5vw]'>D</span> </span>
            <span className="w-[5.5vw] py-[0.8vh] rounded-2xl bg-[#0D7C66]">{timeLeft.hours} <span className='text-[1.5vw]'>H</span></span>
            <span className="w-[5.5vw] py-[0.8vh] rounded-2xl bg-[#0D7C66]">{timeLeft.minutes} <span className='text-[1.5vw]'>M</span></span>
            <span className="w-[5.5vw] py-[0.8vh] rounded-2xl bg-[#0D7C66]">{timeLeft.seconds} <span className='text-[1.5vw]'>S</span></span>
          </div>
        ) : (
          <span>Event has started!</span>
        )}
      </div>
    </div>
  );
}

export default Timeline;
