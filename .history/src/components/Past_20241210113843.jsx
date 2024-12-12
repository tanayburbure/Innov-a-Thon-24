import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Past() {
  const paragraphRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    // Split paragraph text into spans
    if (paragraphRef.current) {
      const paragraph = paragraphRef.current;
      const text = paragraph.textContent;
      const splittedText = text.split('');
      paragraph.innerHTML = splittedText
        .map((char, index) => `<span key=${index}>${char}</span>`)
        .join('');
    }

    // GSAP animation for paragraph spans
    gsap.to(paragraphRef.current.querySelectorAll('span'), {
      color: '#A1A1AA',
      stagger: 0.2,
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: 'top 85%',
        end: 'top 40%',
        scrub: 2,
      },
    });

    // GSAP animation for images
    imagesRef.current.forEach((image, index) => {
      gsap.fromTo(
        image,
        { x: '100vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          delay: index * 0.3,
          scrollTrigger: {
            trigger: image,
            start: 'top 95%',
            end: 'top 70%',
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <div className="h-[88vh] font-[font1] flex px-16 w-full">
      <div className="relative w-1/2">
        <div className="relative pl-16 py-2">
          <h1 className="text-[7.3vw] -tracking-[5px] text-zinc-400 font-semibold">
            OUR{' '}
            <span className="text-[#0D7C66] text-[7.5vw] pl-4 tracking-tight">PAST</span>
          </h1>
          <p
            ref={paragraphRef}
            className="mt-4 w-[85%] font-[font6] text-zinc-800 text-[2.3vh] font-[100] leading-7"
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
      <div className="w-1/2 relative overflow-x-hidden mt-16">
        <div className="flex flex-wrap  justify-center">
          {['team.png', 'team.png', 'team.png', 'team.png'].map((src, index) => (
            <img
              key={index}
              ref={(el) => (imagesRef.current[index] = el)}
              src={`public/images/${src}`}
              alt={`Team ${index + 1}`}
              className={`w-[${index % 2 === 0 ? '40%' : '34%'}] h-[24vh] border-[1px] border-[#0D7C66] absolute 
                hover:scale-110 transition-transform duration-300 ease-in-out`}
              style={{
                top: index === 0 ? '28vh' : index === 1 ? '16vh' : index === 2 ? '30.7vh' : '12vh',
                left: index % 2 === 0 ? '3.8vw' : undefined,
                right: index % 2 !== 0 ? '20px' : undefined,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Past;
