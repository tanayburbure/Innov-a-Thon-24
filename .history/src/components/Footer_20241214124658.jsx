import React from 'react';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaLinkedinIn, FaDiscord, FaMapLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    // <div className="h-[32vw] w-full overflow-hidden">
    //   {/* Divider Line */}
    //   <div className="h-[1px] bg-zinc-700 mt-12 mx-20"></div>

    //   <div className="flex py-[3vh]">
    //     {/* Logo Section */}
    //     <div className="p-20 py-[10vh] text-zinc-400 font-[font15] select-none">
    //       <img
    //         className="h-[10vw] mb-2 pl-[3.5vh] select-none transition-transform duration-300"
    //         src="public/images/lobo.png"
    //         alt="TESA Logo"
    //       />
    //       <h3 className="text-[1.3vh]">TELECOM ENGINEER'S STUDENT ASSOCIATION</h3>
    //       <h2 className="text-[1.5vh] pl-[3vh]">WE CREATE.YOU CELEBRATE</h2>
    //     </div>

    //     {/* Socials Section */}
    // <div className="relative top-[9.8vh] left-[12.3vw]">
    //   <h2 className="text-zinc-400 font-[font15] select-none text-[3vh] text-center mb-11">
    //     SOCIALS
    //   </h2>
    //   <div className="flex text-[1.5vw]  gap-8">
    //     <a
    //       className="relative p-8 border-[1px] border-[#2A2929] overflow-hidden hover:scale-110 rounded-full bg-[#2A2929] text-white transition-all duration-300 group"
    //       href=""
    //     >
    //       <IoLogoInstagram className="relative z-10" />
    //       <span className="absolute -inset-1 bg-[#FF2648] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
    //     </a>
    //     <a
    //       className="relative p-8 border-[1px] border-[#2A2929] overflow-hidden hover:scale-110 rounded-full bg-[#2A2929] text-white transition-all duration-300 group"
    //       href=""
    //     >
    //       <FaLinkedinIn className="relative z-10" />
    //       <span className="absolute -inset-1 bg-blue-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
    //     </a>
    //     <a
    //       className="relative p-8 border-[1px] border-[#2A2929] overflow-hidden hover:scale-110 rounded-full bg-[#2A2929] text-white transition-all duration-300 group"
    //       href=""
    //     >
    //       <FaDiscord className="relative z-10" />
    //       <span className="absolute -inset-1 bg-[#6228d7] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
    //     </a>
    //   </div>
    // </div>

    //     {/* Address Section */}
    //     <div className="relative w-[25vw] left-[29.4vw] top-[9.6vh]">
    //       <h2 className="font-[font15] text-zinc-400 text-[3vh] pl-[11.5vh] mb-[5vh]">
    //         ADDRESS
    //       </h2>
    //       <div className="text-zinc-400 font-[font6] flex text-[2.8vh] gap-[6px] mb-3">
    //         <FaMapLocationDot className="mt-[2px] mr-1 text-[#0D7C66]" />
    //         <h3 className="text-[2vh]">
    //           AISSMS IOIT, <br /> Kennedy Rd, near RTO, Sangamvadi
    //           <br /> Pune, Maharashtra 411001
    //         </h3>
    //       </div>
    //       <div className="text-zinc-400 font-[font6] flex items-center gap-1">
    //         <MdEmail className="mt-1 text-[3vh] mr-2 text-[#0D7C66]" />
    //         <h3 className="text-[2vh] cursor-pointer">entctesa@gmail.com</h3>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Footer Bottom Section */}
    //   <div className="h-[1px] bg-[#2A2929] mx-16 relative bottom-3"></div>
    //   <div className="flex justify-between items-center font-[font1] text-zinc-600 px-16">
    //     <h3>All Rights Reserved © 2024</h3>
    //     <button className="px-4 border border-black rounded-full">
    //       contact developer
    //     </button>
    //     <h3>WEBSITE BY TESA TECH TEAM</h3>
    //   </div>
    // </div>
    <div className="h-[78vh] overflow-hidden">
      {/* Divider Line */}
      <div className="h-[1px] bg-zinc-700 mx-2 lg:mx-16"></div>

      <div className=" py-[3vh] lg:flex lg:justify-between lg:items-center lg:pl-20">
        {/* Logo Section */}
        <div className="py-[5vh] flex flex-col items-center text-zinc-400 font-[font15]">
          <img
            className="h-[20vw] lg:h-[10vw] mb-2 select-none transition-transform duration-300"
            src="public/images/lobo.png"
            alt="TESA Logo"
          />
          <h3 className="text-[1.3vh]">TELECOM ENGINEER'S STUDENT ASSOCIATION</h3>
          <h2 className="text-[1.5vh]">WE CREATE.YOU CELEBRATE</h2>
        </div>

        {/* Socials Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-zinc-400 font-[font15] text-[3vh] text-center mb-8 lg:text-[4vh]">
            SOCIALS
          </h2>
          <div className="flex gap-8 text-[5.5vw] lg:text-[1.5vw]">
            <a
              className="relative text-white lg:p-8 lg:border-[1px] lg:border-[#2A2929] lg:overflow-hidden lg:hover:scale-110 lg:rounded-full lg:bg-[#2A2929] transition-all duration-300 group"
              href=""
            >
              <IoLogoInstagram className="relative z-10" />
              <span className="lg:absolute lg:-inset-1 lg:bg-[#FF2648] lg:transform lg:translate-y-full lg:group-hover:translate-y-0 lg:transition-transform lg:duration-300 lg:z-0"></span>
            </a>
            <a
              className="relative text-white lg:p-8 lg:border-[1px] lg:border-[#2A2929] lg:overflow-hidden lg:hover:scale-110 lg:rounded-full lg:bg-[#2A2929] transition-all duration-300 group"
              href=""
            >
              <FaLinkedinIn className="relative z-10" />
              <span className="lg:absolute lg:-inset-1 lg:bg-blue-500 lg:transform lg:translate-y-full lg:group-hover:translate-y-0 lg:transition-transform lg:duration-300 lg:z-0"></span>
            </a>
            <a
              className="relative text-white lg:p-8 lg:border-[1px] lg:border-[#2A2929] lg:overflow-hidden lg:hover:scale-110 lg:rounded-full lg:bg-[#2A2929] transition-all duration-300 group"
              href=""
            >
              <FaDiscord className="relative z-10" />
              <span className="lg:absolute lg:-inset-1 lg:bg-[#6228d7] lg:transform lg:translate-y-full lg:group-hover:translate-y-0 lg:transition-transform lg:duration-300 lg:z-0"></span>
            </a>
          </div>
        </div>

        {/* Address Section */}
        <div className="flex flex-col items-center mt-12 lg:mt-0 lg:pr-16 lg:items-start">
          <h2 className="font-[font15] text-zinc-400 text-[3vh] lg:text-[4vh] mb-7 lg:pl-16">
            ADDRESS
          </h2>
          <div className="text-zinc-400 font-[font6] flex text-[2.4vh] gap-[8px] mb-3">
            <FaMapLocationDot className="mt-[1px] text-[2.4vh]  mr-1 text-[#0D7C66]" />
            <h3 className="text-[1.5vh] lg:text-[2vh]">
              AISSMS IOIT, <br /> Kennedy Rd, near RTO, Sangamvadi
              <br /> Pune, Maharashtra 411001
            </h3>
          </div>
          <div className="text-zinc-400 font-[font6] flex items-center gap-[13px] mr-[23vw] lg:mr-0">
            <MdEmail className="mt-1 text-[2.5vh] text-[#0D7C66]" />
            <h3 className="text-[1.5vh] lg:text-[2vh] cursor-pointer">entctesa@gmail.com</h3>
          </div>
        </div>

      </div>
      {/* Footer Bottom Section */}
      <div>
        <div className="h-[1px] bg-[#2A2929] mx-8 relative bottom-3 lg:mx-16"></div>
        <div className="flex flex-col items-center font-[font1] text-zinc-600 px-8 gap-4 lg:flex-row lg:justify-between lg:items-center lg:px-16">
          <h3 className="text-center lg:text-left">All Rights Reserved © 2024</h3>
          <button className="px-4 py-2 border border-black rounded-full bg-transparent text-sm lg:text-base">
            contact developer
          </button>
          <h3 className="text-center lg:text-right">WEBSITE BY TESA TECH TEAM</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
