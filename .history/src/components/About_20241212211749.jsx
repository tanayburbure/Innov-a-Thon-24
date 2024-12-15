import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const paragraphRef = useRef(null);

  useEffect(() => {
    const paragraph = paragraphRef.current;

    // Wrap each character in a span
    paragraph.innerHTML = paragraph.textContent
      .split("")
      .map((char) => `<span>${char}</span>`)
      .join("");

    // Animate spans on scroll
    gsap.to(paragraph.querySelectorAll("span"), {
      opacity: 1,
      color: "#A1A1AA",
      y: 0,
      stagger: 0.03,
      scrollTrigger: {
        trigger: paragraph,
        start: "top 80%",
        end: "top 48%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="text-white h-[90vh] p-4 mt-32 flex flex-col items-center">
      <h1 className="w-[68vw] text-[10vw] mb-4 tracking-light text-center font-[100] text-zinc-400 leading-[3.5vh]">
        <span className="font-[font1] text-zinc-300 tracking-light font-semibold">
          About <span className="text-[#0D7C66] tracking-tighter">Us</span>
        </span>
      </h1>
      <p
        ref={paragraphRef}
        className="about-content font-[font6] mt-12 text-[1.6vh] text-left  text-zinc-800 leading-[3vh]"
      >
        Welcome to Innov-a-Thon 2024—the ultimate mix of creativity and technology! 
        Join us for a 24-hour coding marathon where brilliant minds unite to tackle 
        real-world challenges. Ready to make your mark? Address critical issues in 
        healthcare, space exploration, and defense. Whether it's Blockchain for 
        banking or AI-powered smart cities, the possibilities are endless! Collaborate 
        with like-minded individuals and industry experts who will guide you throughout 
        the event. This is not just a competition; it's an opportunity to learn, innovate, 
        and network. With exciting workshops and mentorship sessions, you'll gain valuable 
        insights and skills that will last a lifetime. Don't miss out on the chance to 
        showcase your talent and creativity! Sign up now and be part of a transformative 
        experience that could change your future!
      </p>
    </div>
  );
}

export default About;
