import React from 'react'
import Navbar from './Navbar'
export const Landingpage = () => {
  return (
    <div>
        <div className='relative h-[100vh] w-full overflow-hidden'>
            <video className='h-full w-full object-cover brightness-[50%]' autoPlay muted src="public\video\back.mp4"></video>
            <div className='absolute inset-0 leading-normal flex flex-col '>
                <Navbar/>
                <h1 className='flex-grow tracking-tighter mr-4 font-semibold text-[9vw] text-center mt-[19vh] bg-[#0D7C66] to-green-100 text-transparent bg-clip-text'>Innov-a-Thon'24</h1>
                <h4 className='text-transparent text-[2.7vh] font-semibold text-center ml-[40vw] mb-[65vh] bg-gradient-to-r from-green-900 to-green-100 bg-clip-text'>Igniting Innovation, Fueling the Future</h4>
                <h3 className='p-12 absolute bottom-0 text-zinc-400 text-[2.3vh]'>
                  DATE:
                  <br />
                  22nd December 2024</h3>

                <h3 className='p-12 absolute -bottom-8 right-0 text-zinc-400 text-[2.3vh] text-right w-[30vw]'>
                VENUE:
                <br />
                 Department of Electronics & Telecommunication, 
                <br />
                 AISSMS IOIT
                </h3>
            </div>
        </div>
    </div>
  )
}

export default Landingpage