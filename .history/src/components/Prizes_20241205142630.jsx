import React from 'react'

function Prizes() {
  const handleMouseEnter = (e) => {
    e.target.play();
  };

  const handleMouseLeave = (e) => {
    e.target.pause();
    e.target.currentTime = 0; // Reset video to start when mouse leaves
  };

  return (
    <div className='h-[100vh] mt-[28vw] flex text-white items-center flex-col w-full'>
        <h1 className='text-[8vw] text-zinc-400 text-center pr-2 tracking-tighter font-semibold'>Exciting <span className='text-[#0D7C66]'>Prizes</span></h1>
        <div className='flex justify-between items-center mt-20 w-full'>
          <video 
            className='h-[15vh] w-auto transform scale-150' 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
            muted
            style={{ display: 'block' }} // Ensure video is visible
          >
            <source src="public/video/Animation - 1733388438706.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='relative text-[4vh] font-bold text-[#0D7C66]'>
            <h3 className='absolute text-[6vh] top-[56vh] left-[21vw]'>₹ 25,000</h3>
            <h3 className='absolute top-[54.5vh] left-[5.8vw]'>₹ 15,000</h3>
            <h3 className='absolute top-[54vh] right-[5vw]'>₹ 10,000</h3>
            <img className=' w-[50vw]' src="public/images/rb_1580.png" alt="" /> 
          </div>
          <video 
            className='h-[15vh] w-auto transform scale-150' 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
            muted
            style={{ display: 'block' }} // Ensure video is visible
          >
            <source src="public/video/Animation - 1733388438706.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
    </div>
  )
}

export default Prizes