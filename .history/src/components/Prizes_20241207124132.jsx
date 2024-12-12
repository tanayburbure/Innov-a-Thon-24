import React from 'react'

function Prizes() {
  return (
    <div className='h-[100vh] mt-[32vw] flex text-white items-center flex-col w-full'>
        <h1 className='text-[7.5vw] font-[font1] text-zinc-400 text-center pr-2 tracking-tight font-semibold'>Exciting <span className='text-[#0D7C66]'>Prizes</span></h1>
          <div className='relative font-[font1] text-[4vh] mt-8 font-bold text-[#0D7C66]'>
            <h3 className='absolute text-[6vh] top-[56vh] left-[19.2vw]'>₹ 25,000</h3>
            <h3 className='absolute top-[54.1vh] left-[5.4vw]'>₹ 15,000</h3>
            <h3 className='absolute top-[53.9vh] right-[5.9vw]'>₹ 10,000</h3>
            <img className=' w-[50vw]' src="public/images/rb_1580.png" alt="" /> 
          </div>
    </div>
  )
}

export default Prizes