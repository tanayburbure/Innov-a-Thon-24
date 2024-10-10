import React from 'react';

function Card() {

  return (
    <div className=' w-full  flex mt-8 justify-center'>
      <div className='w-[30vw] h-[36vh]'>
        <div className="relative flex flex-col justify-between items-center w-full h-full shadow-md rounded-xl relative bg-[#27DFB3] bg-cover bg-center" style={{ backgroundImage: "url('public/images/programmer.png')", filter: "brightness(70%)" }}>
          {/* Content */}
          <div className="mt-10 flex flex-col justify-center gap-20 items-center z-50 hover:opacity-100 transition-opacity duration-300 brightness-105">
            <h1 className="text-3xl font-bold">Application Open</h1>
            <h3 className="text-[2.2vh] font-medium -mt-[10vh] text-gray-900">We are open to apply till 15'th of December</h3>
            <button className="bg-[#0D7C66] mt-6 text-black font-bold py-2 px-4 rounded-xl text-[2.4vh] transition-transform duration-300 transform hover:scale-110">Apply to Participate</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
