import React from 'react'

function Navbar() {
  return (
    <div className='relative px-4 pr-8'>
      <div className='p-4 fixed z-50'>
        <img className='w-[4vw]' src="public\images\lobo.png" alt="" />
      </div>
      <div className='text-white text-lg flex justify-end mr-36 pt-1 m-6 space-x-8'>
        <h3 className='cursor-pointer' onClick={() => window.scrollTo({ top: 2.5 * window.innerHeight, behavior: 'smooth' })}>About</h3>
        <h3 className='cursor-pointer' onClick={() => window.scrollTo({ top: 1.55 * window.innerHeight, behavior: 'smooth' })}>Prizes</h3>
        <h3 className='cursor-pointer' onClick={() => window.scrollTo({ top: 2.5 * window.innerHeight, behavior: 'smooth' })}>Sponsors</h3>
        <h3 className='cursor-pointer' onClick={() => window.scrollTo({ top: 2.5 * window.innerHeight, behavior: 'smooth' })}>FAQ</h3>
        
        <span className="overflow-hidden whitespace-nowrap">
          <button className='px-2 ml-4 py-1 pb-[0.8vh] bg-[#0D7C66] overflow-hidden text-black font-semibold rounded-full z-50 fixed'>
            <span className="inline-block animate-marquee">Register Here</span>
          </button>
        </span>
        <style jsx>{`
          .animate-marquee {
            display: inline-block;
            animation: marquee 7s linear infinite; /* Increased duration for smoother transition */
          }

          @keyframes marquee {
            0% {
              transform: translateX(110%);
            }
            100% {
              transform: translateX(-110%);
            }
          }
        `}</style>
      </div>
    </div>
  )
}

export default Navbar