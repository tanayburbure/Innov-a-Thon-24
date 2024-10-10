import React from 'react'

function Prizes() {
  return (
    <div className='h-[100vh] flex text-white items-center flex-col w-full'>
        <h1 className='text-[8vw] text-zinc-400 text-center pr-2 tracking-tighter font-semibold'>Exciting <span className='text-[#0D7C66]'>Prizes</span></h1>
        <div className='mt-20 pl-8 relative text-[4vh] font-bold text-[#0D7C66]'>
          <h3 className='absolute text-[6vh] top-[41vh] left-[31.5vw]'>₹ 25,000</h3>
          <h3 className='absolute top-[42.5vh] left-[7.8vw]'>₹ 15,000</h3>
          <h3 className='absolute top-[42.2vh] right-[6.5vw]'>₹ 10,000</h3>
          <img className='h-[50vh]' src="public\images\prize.png" alt="" /> 
        </div>
    </div>
  )
}

export default Prizes