import React from 'react'
import { IoLogoInstagram } from 'react-icons/io5'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa6'
import { FaMapLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
function Footer() {
  return (
    <div className=" h-[32vw] w-full overflow-hidden">
      <h4 className="h-[1px] max-width-screen-xl bg-zinc-700 mt-12 mx-20"></h4>
      <div className="flex py-[3vh]">
        <div className="p-20 py-[10vh] text-zinc-400 font-[font15] select-none">
          <img className="h-[10vw] mb-2 pl-[3.5vh] select-none transition-transform duration-300 " src="public\images\lobo.png" alt="" />
          <h3 className="text-[1.3vh]">TELECOM ENGINEER'S STUDENT ASSOCIATION</h3>
          <h2 className="text-[1.5vh] pl-[3vh]">WE CREATE.YOU CELEBRATE</h2>
        </div>
        <div className="relative top-[9.8vh] left-[12.3vw] ">
          <h2 className="text-zinc-400 font-[font15] select-none text-[3vh] text-center mb-11">SOCIALS</h2>
          <div className="flex text-[1.5vw] gap-8">
          <a
              className="relative p-8  border-[1px] border-[#2A2929] hover:scale-110 rounded-full bg-[#2A2929] text-white overflow-hidden transition-all duration-300 group"
              href="">
              <IoLogoInstagram className="relative z-10  " />
              <span className="absolute -inset-1 bg-[#FF2648]  transform translate-y-full group-hover:translate-y-0  transition-transform duration-300 z-0"></span>
            </a>
            <a
              className="relative p-8 border-[1px] border-[#2A2929] hover:scale-110 rounded-full bg-[#2A2929] text-white overflow-hidden transition-all duration-300 group"
              href="">
              <FaLinkedinIn className="relative z-10" />
              <span className="absolute -inset-1 bg-blue-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
            </a>
            <a
              className="relative p-8 border-[1px] border-[#2A2929] hover:scale-110 rounded-full bg-[#2A2929] text-white overflow-hidden transition-all duration-300 group"
              href="">
              <FaDiscord className="relative z-10" />
              <span className="absolute -inset-1 bg-[#6228d7] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
            </a>
          </div>
        </div>
        <div className="relative w-[25vw]  left-[29.4vw] top-[9.6vh]">
          <h2 className="relative font-[font15] text-zinc-400 text-[3vh] pl-[11.5vh] mb-[5vh]">ADDRESS</h2>
          <div className="text-zinc-400 font-regular font-[font6] flex text-[2.8vh] gap-[6px] mb-3 ">
            <FaMapLocationDot className="mt-[2px] mr-1 text-[#0D7C66]" />
            <h3 className='text-[2vh]'>AISSMS IOIT, <br /> Kennedy Rd, near RTO, Sangamvadi<br /> Pune, Maharashtra 411001</h3>
          </div>

          <div className="text-zinc-400 font-regular font-[font6] flex items-center gap-1">
            <MdEmail className='mt-1 text-[3vh] mr-2 text-[#0D7C66]' />
            <h3 className='text-[2vh]'>entctesa@gmail.com</h3>
          </div>
        </div>
      </div>
      <h4 className="h-[1px] mx-16 max-width-screen-xl bg-[#2A2929] relative bottom-3"></h4>
      <div className='flex justify-between items-center font-[font1] text-zinc-600 px-16'>
        <h3>All Rights Reserved © 2024</h3>
        <h3 className='pr-12'>contact developer</h3>
        <h3>WEBSITE BY TESA TECH TEAM</h3>
      </div>
    </div>
  )
}

export default Footer
