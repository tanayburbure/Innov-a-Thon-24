import React from 'react'

function Navbar() {
  return (
    <div className='relative'>
      <div className='p-4 fixed'>
        <img className='w-[4vw] z-50' src="public\images\lobo.png" alt="" />
      </div>
      <div className='text-white flex justify-end mr-36 m-4 space-x-8'>
        <h3>About</h3>
        <h3>FAQ</h3>
        <h3>Sponsors</h3>
        <h3>Prizes</h3>
        <span className="overflow-hidden">
          <button className='px-4 py-1 bg-[#0D7C66] text-black font-semibold rounded-full z-50 fixed'>
            <span className="inline-block animate-marquee whitespace-nowrap">Register here</span>
          </button>
        </span>
        <style jsx>{`
          .animate-marquee {
            display: inline-block;
            animation: marquee 10s linear infinite;
          }

          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}</style>
        <input type="range" min="1" max="20" defaultValue="10" className="absolute top-16 left-4" onChange={(e) => {
          const speed = e.target.value;
          document.querySelector('.animate-marquee').style.animationDuration = `${speed}s`;
        }} />
      </div>
    </div>
  )
}

export default Navbar