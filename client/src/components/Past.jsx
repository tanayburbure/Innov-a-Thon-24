import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Past = () => {
  const paragraphRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Check screen size and update state
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Adjust breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      color: "#A1A1AA",
      stagger: 0.2,
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 85%",
        end: "top 44%",
        scrub: 2,
      },
    });
  }, []);

  const images = [
    {
      top: "2vh",
      left: "7vw",
      size: "40%",
      height: "13vh",
      lg: { top: "0vh", right: "26vw", size: "75%", height: "21vh" },
    },
    {
      top: "16vh",
      right: "6vh",
      size: "34%",
      height: "12vh",
      lg: { top: "25vh", right: "17.1vh", size: "85%", height: "24vh" },
    },
    {
      top: "3vh",
      right: "4vh",
      size: "38%",
      height: "11vh",
      lg: { top: "22.4vh", right: "54vh", size: "90%", height: "24vh" },
    },
    {
      top: "17vh",
      left: "6vh",
      size: "34%",
      height: "auto",
      lg: { top: "3vh", right: "18.8vh", size: "75%", height: "auto" },
    },
  ];

  return (
    <div className="h-[110vh] font-[font1] w-full flex flex-col lg:h-[100vh] lg:ml-4">
      {/* Section Title */}
      <h1 className="text-[10.5vw] text-zinc-400 font-semibold pl-[25vw] lg:text-[8vw] lg:pl-[30vw]">
        OUR <span className="text-[#0D7C66] pl-4 tracking-tight">PAST</span>
      </h1>
      <div className="lg:flex lg:justify-between lg:mt-6">
        {/* Left Section */}
        <div className="">
          {/* Animated Paragraph */}
          <p
            ref={paragraphRef}
            className="mt-12 lg:pt-8 w-[100vw] font-[font6] text-zinc-800 text-[1.6vh] lg:text-[2.5vh] font-light leading-7 lg:w-[55%] lg:pl-28 px-8"
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

        {/* Right Section with Images */}
        <div className="relative mt-16 lg:w-[100%]">
          <div className="flex flex-wrap justify-center items-center">
            {images.map((image, index) => (
              <img
                key={index}
                src="/images/team.png"
                alt="Team Image"
                className={`absolute border-[1px] border-[#0D7C66] hover:scale-110 transition-transform duration-300 ease-in-out`}
                style={{
                  top: isLargeScreen ? image.lg.top : image.top,
                  left: isLargeScreen ? image.lg.left : image.left,
                  right: isLargeScreen ? image.lg.right : image.right,
                  width: isLargeScreen ? image.lg.size : image.size,
                  height: isLargeScreen ? image.lg.height : image.height,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Past;
