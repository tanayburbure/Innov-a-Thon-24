import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const headingRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;

    // Split the heading content by words and wrap each word in a span
    if (heading) {
      const headingContent = heading.textContent;
      const wrappedHeading = headingContent
        .split(" ")
        .map((word) => `<span style="display: inline-block; opacity: 0;">${word}</span>`)
        .join(" ");
      heading.innerHTML = wrappedHeading;

      // GSAP animation for each word
      gsap.fromTo(
        heading.querySelectorAll("span"),
        { x: "-100vw", opacity: 0 }, // Starting position (off-screen)
        {
          x: 0,  // Final position (center)
          opacity: 1,  // Make the word visible
          stagger: 0.3, // Stagger the words (adjust for speed)
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
            markers: true,  // Debugging markers (optional)
          },
        }
      );
    }
  }, []);

  return (
    <div className='text-white h-[70vh] mt-48 flex flex-col items-center'>
      <h1
        ref={headingRef}
        className='w-[68vw] mb-4 text-[7.5vw] tracking-light text-center font-[100] text-zinc-400 leading-[3.5vh]'
      >
        About <span className='text-[#0D7C66] tracking-tighter'>Us</span>
      </h1>
      <p className='about-content font-[font6] w-[68vw] mt-16 text-[2.5vh] text-center text-zinc-800 leading-[3.5vh]'>
        Welcome to Innov-a-Thon 2024—the ultimate mix of creativity and technology! Join us for a 24-hour coding marathon where brilliant minds unite to tackle real-world challenges. Ready to make your mark? Address critical issues in healthcare, space exploration, and defense. Whether it's Blockchain for banking or AI-powered smart cities, the possibilities are endless! Collaborate with like-minded individuals and industry experts who will guide you throughout the event. This is not just a competition; it's an opportunity to learn, innovate, and network. With exciting workshops and mentorship sessions, you'll gain valuable insights and skills that will last a lifetime. Don't miss out on the chance to showcase your talent and creativity! Sign up now and be part of a transformative experience that could change your future!
      </p>
    </div>
  );
}

export default About;
