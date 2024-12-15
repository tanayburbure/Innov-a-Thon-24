import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Past = () => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Splitting paragraph text into individual spans for animation
    if (paragraphRef.current) {
      const paragraph = paragraphRef.current;
      const text = paragraph.textContent;
      const splittedText = text.split("");
      paragraph.innerHTML = splittedText
        .map((char, index) => `<span key=${index}>${char}</span>`)
        .join("");
    }

    // Animating individual spans using GSAP
    gsap.to(paragraphRef.current.querySelectorAll("span"), {
      color: "#A1A1AA", // Target color for animation
      stagger: 0.2, // Delay between animations of each character
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 85%",
        end: "top 44%",
        scrub: 2, // Smooth scrolling effect
      },
    });
  }, []);

  return (
    // <div className="h-[88vh] font-[font1] flex px-16 w-full">
    //   {/* Left Section */}
    //   <div className="relative w-1/2">
    //     <div className="relative pl-16 py-2">
    //       {/* Section Title */}
    //       <h1 className="text-[7.3vw] -tracking-[5px] text-zinc-400 font-semibold">
    //         OUR <span className="text-[#0D7C66] text-[7.5vw] pl-4 tracking-tight">PAST</span>
    //       </h1>
    //       {/* Animated Paragraph */}
    //       <p
    //         ref={paragraphRef}
    //         className="mt-4 w-[85%] font-[font6] text-zinc-800 text-[2.3vh] font-light leading-7"
    //       >
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, in distinctio! Incidunt
    //         tempore nihil nostrum obcaecati temporibus sed tempora porro unde, aperiam suscipit.
    //         Eligendi repellat mollitia voluptates fugit dicta blanditiis tempore! Reiciendis, rem
    //         vel eveniet sunt natus porro. Vero vel consequuntur eligendi sit quibusdam eum atque
    //         architecto repellendus tempora. Sequi ullam excepturi placeat sunt minus tempore
    //         voluptas reprehenderit incidunt, illum tempora dolores corrupti cumque quas! Fugit
    //         animi numquam autem? Fugiat perferendis iure, quia, natus aperiam animi saepe expedita
    //         quibusdam deserunt, similique tempora.
    //       </p>
    //     </div>
    //   </div>

    //   {/* Right Section with Images */}
    //   <div className="w-1/2 relative mt-16">
    //     <div className="flex flex-wrap justify-center">
    //       {[
    //         { top: "27vh", left: "3.8vw", size: "40%", height: "24vh" },
    //         { top: "8.3vh", right: "12vh", size: "34%", height: "21vh" },
    //         { top: "30.5vh", right: "10.5vh", size: "38%", height: "24vh" },
    //         { top: "5.5vh", left: "15.1vh", size: "34%", height: "auto" },
    //       ].map((image, index) => (
    //         <img
    //           key={index}
    //           src="public/images/team.png"
    //           alt="Team Image"
    //           className={`absolute border-[1px] border-[#0D7C66] hover:scale-110 transition-transform duration-300 ease-in-out`}
    //           style={{
    //             top: image.top,
    //             left: image.left,
    //             right: image.right,
    //             width: image.size,
    //             height: image.height,
    //           }}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="h-[88vh] font-[font1] flex justify-center items-center w-full">
      {/* Left Section */}
      <div className="f">
        <div className="flex flex-col">
          {/* Section Title */}
          <h1 className="text-[10.5vw] text-zinc-400 font-semibold">
            OUR <span className="text-[#0D7C66]  pl-4 tracking-tight">PAST</span>
          </h1>
          {/* Animated Paragraph */}
          <p
            ref={paragraphRef}
            className="mt-4 w-[85%] font-[font6] text-zinc-800 text-[2.3vh] font-light leading-7"
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

      {/* Right Section with Images */}
      {/* <div className="w-1/2 relative mt-16">
        <div className="flex flex-wrap justify-center">
          {[
            { top: "27vh", left: "3.8vw", size: "40%", height: "24vh" },
            { top: "8.3vh", right: "12vh", size: "34%", height: "21vh" },
            { top: "30.5vh", right: "10.5vh", size: "38%", height: "24vh" },
            { top: "5.5vh", left: "15.1vh", size: "34%", height: "auto" },
          ].map((image, index) => (
            <img
              key={index}
              src="public/images/team.png"
              alt="Team Image"
              className={`absolute border-[1px] border-[#0D7C66] hover:scale-110 transition-transform duration-300 ease-in-out`}
              style={{
                top: image.top,
                left: image.left,
                right: image.right,
                width: image.size,
                height: image.height,
              }}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Past;
