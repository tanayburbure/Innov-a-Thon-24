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
    <div className="h-[90vh] w-full flex flex-col items-center text-center mb-40 mt-[30vh] z-50">
      <div className='text-white text-center pb-28 px-12 '>
        <h2 className='w-[65vw] text-md font-normal text-zinc-400 leading-7 '><span className='text-[4.5vw] text-zinc-400 tracking-tight font-semibold'>About</span><span className='text-[5.5vw] ml-8 font-bold tracking-tighter text-[#0D7C66]'>Innov-a-Thon'24</span>
        <br />
        <br />
        <br />
          Welcome to Innov-a-Thon 2024—the ultimate mix of creativity and technology! Join us for a 24-hour coding marathon where brilliant minds unite to tackle real-world challenges.

          Ready to make your mark? Address critical issues in healthcare, space exploration, and defense. Whether it's Blockchain for banking or AI-powered smart cities, the possibilities are endless!

        </h2>
      </div>
      <h1 className="text-zinc-400 text-[4.5vw] mt-28">HACKETHON BEGINS IN...</h1>
      <div className="text-white text-[2.8vw] mt-4 font-bold">
        {timeLeft.days !== undefined ? (
          <div className="flex space-x-2 items-center gap-4 text-black justify-center">
            <span className="p-2 w-[7vw] rounded-2xl bg-[#0D7C66]">{timeLeft.days} <span className='text-[2vw]'>D</span> </span>
            <span className="p-2 w-[7vw] rounded-2xl bg-[#0D7C66]">{timeLeft.hours} <span className='text-[2vw]'>H</span></span>
            <span className="p-2 w-[7vw] rounded-2xl bg-[#0D7C66]">{timeLeft.minutes} <span className='text-[2vw]'>M</span></span>
            <span className="p-2 w-[7vw] rounded-2xl bg-[#0D7C66]">{timeLeft.seconds} <span className='text-[2vw]'>S</span></span>
          </div>
        ) : (
          <span>Event has started!</span>
        )}
      </div>
    </div>
  );
}

export default Timeline;
