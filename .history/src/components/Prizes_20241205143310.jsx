import React from 'react'

function Prizes() {
  return (
    <div className='h-screen mt-0 flex text-white items-center flex-col w-full'>
        <h1 className='text-4xl text-zinc-400 text-center pr-2 tracking-tighter font-semibold'>Exciting <span className='text-[#0D7C66]'>Prizes</span></h1>
        <div className='flex justify-between items-center mt-20 w-full'>
          <img className='h-1/4 w-auto' src="public/video/Animation - 1733388438706.gif" alt="Prize Animation" />
          <div className='relative text-2xl font-bold text-[#0D7C66]'>
            <h3 className='absolute text-3xl top-56 left-1/4'>₹ 25,000</h3>
            <h3 className='absolute top-54.5 left-1/12'>₹ 15,000</h3>
            <h3 className='absolute top-54 right-1/12'>₹ 10,000</h3>
            <img className='w-1/2' src="public/images/rb_1580.png" alt="" /> 
          </div>
          <img className='h-1/4 w-auto' src="public/video/Animation - 1733388438706.gif" alt="Prize Animation" />
        </div>
    </div>
  )
}

export default Prizes