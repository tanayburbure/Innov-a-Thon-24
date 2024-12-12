import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Past() {
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Ensure the paragraph is split into spans
    if (paragraphRef.current) {
      const paragraph = paragraphRef.current;
      const text = paragraph.textContent;
      const splittedText = text.split("");
      paragraph.innerHTML = splittedText
        .map((char, index) => `<span key=${index}>${char}</span>`)
        .join("");
    }

    // GSAP animation for paragraph spans
    gsap.to(paragraphRef.current.querySelectorAll("span"), {
      color: "#A1A1AA", // Customize as needed
      stagger: 0.1,
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 90%",
        end: "top 30%",
        scrub: 1,
        pin: false,
      },
    });
  }, []);

  return (
    <div className='h-[88vh] font-[font1] flex px-16 w-full'>
      <div className='relative w-1/2'>
        <div className='relative pl-16 py-2'>
          <h1 className='text-[7.3vw] -tracking-[5px] text-zinc-400 font-semibold'>
            OUR <span className='text-[#0D7C66] text-[7.5vw] pl-4 tracking-tight'>PAST</span>
          </h1>
          <p
            ref={paragraphRef}
            className='mt-4 w-[85%] font-[font6] text-zinc-800 text-[2.3vh] font-[100] leading-7'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, in distinctio! Incidunt
            tempore nihil nostrum obcaecati temporibus sed tempora porro unde, aperiam suscipit.
            Eligendi repellat mollitia voluptates fugit dicta blanditiis tempore! Reiciendis, rem
            vel eveniet sunt natus porro. Vero vel consequuntur eligendi sit quibusdam eum atque
            architecto repellendus tempora. Sequi ullam excepturi placeat sunt minus tempore
            voluptas reprehenderit incidunt, illum tempora dolores corrupti cumque quas! Fugit
            animi numquam autem? Fugiat perferendis iure, quia, natus aperiam animi saepe expedita
            quibusdam deserunt, similique tempora.
          </p>
        </div>
      </div>
      <div className='w-1/2 relative mt-16'>
        <div className='flex flex-wrap justify-center'>
          <img
            src="public/images/team.png"
            alt=""
            className='w-[40%] h-[24vh] border-[1px] border-[#0D7C66] absolute top-[28vh] left-[3.8vw] hover:scale-110 transition-transform duration-300 ease-in-out'
          />
          <img
            src="public/images/team.png"
            alt=""
            className='w-[34%] h-[21vh] border-[1px] border-[#0D7C66] absolute top-16 right-24 hover:scale-110 transition-transform duration-300 ease-in-out'
          />
          <img
            src="public/images/team.png"
            alt=""
            className='w-[38%] h-[24vh] border-[1px] border-[#0D7C66] absolute top-[30.7vh] right-20 hover:scale-110 transition-transform duration-300 ease-in-out'
          />
          <img
            src="public/images/team.png"
            alt=""
            className='w-[34%] h-auto border-[1px] border-[#0D7C66] absolute top-12 left-28 hover:scale-110 transition-transform duration-300 ease-in-out'
          />
        </div>
      </div>
    </div>
  );
}

export default Past;
