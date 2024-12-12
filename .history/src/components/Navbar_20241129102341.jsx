import React from 'react'

function Navbar() {
  return (
    <div className='relative px-4 pr-8'>
      <div className='p-4 fixed z-50'>
        <img className='w-[4vw]' src="public\images\lobo.png" alt="" />
      </div>
      <div className='text-white flex justify-end mr-36 m-6 space-x-8'>
        <h3>About</h3>
        <h3>Prizes</h3>
        <h3>Sponsors</h3>
        <h3>FAQ</h3>
        
        <span className="overflow-hidden whitespace-nowrap">
          <button className='px-2 ml-4 py-1 pb-[0.8vh] bg-[#0D7C66] overflow-hidden text-black font-semibold rounded-full z-50 fixed'>
            <span className="inline-block animate-marquee">Register Here</span>
          </button>
        </span>
        <style jsx>{`
          .animate-marquee {
            display: inline-block;
            animation: marquee 8s linear infinite; /* Increased duration for smoother transition */
          }

          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            50% {
              transform: translateX(0); /* Pause in the middle for a smoother effect */
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}</style>
      </div>
    </div>
  )
}

export default Navbar