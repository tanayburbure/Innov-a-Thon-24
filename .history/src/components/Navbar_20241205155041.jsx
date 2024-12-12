import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    navigate(`/${section}`);
  };

  return (
    <Router>
      <div className='relative px-4 pr-8'>
        <div className='p-4 fixed z-50'>
          <img className='w-[4vw]' src="public/images/lobo.png" alt="" />
        </div>
        <div className='text-white text-lg flex justify-end mr-36 pt-1 m-6 space-x-8'>
          <h3 onClick={() => handleNavigation('about')} className="cursor-pointer">About</h3>
          <h3 onClick={() => handleNavigation('prizes')} className="cursor-pointer">Prizes</h3>
          <h3 onClick={() => handleNavigation('sponsors')} className="cursor-pointer">Sponsors</h3>
          <h3 onClick={() => handleNavigation('faq')} className="cursor-pointer">FAQ</h3>
          
          <span className="overflow-hidden whitespace-nowrap">
            <button className='px-2 ml-4 py-1 pb-[0.8vh] bg-[#0D7C66] overflow-hidden text-black font-semibold rounded-full z-50 fixed'>
              <span className="inline-block animate-marquee">Register Here</span>
            </button>
          </span>
          <style jsx>{`
            .animate-marquee {
              display: inline-block;
              animation: marquee 7s linear infinite;
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
    </Router>
  )
}

export default Navbar