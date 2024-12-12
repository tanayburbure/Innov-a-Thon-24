import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Animate the heading
    const heading = headingRef.current;

    if (heading) {
      // Wrap each word in a span
      const headingContent = heading.textContent;
      const wrappedHeading = headingContent
        .split(" ")
        .map((word) => `<span style="display: inline-block; opacity: 0;">${word} </span>`)
        .join("");
      heading.innerHTML = wrappedHeading;

      // GSAP animation for heading
      gsap.fromTo(
        heading.querySelectorAll("span"),
        { x: "-100vw", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.2, // Adjust stagger for speed
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
            markers: true, // Debug markers
          },
        }
      );
    }

    // Animate the paragraph
    const paragraph = paragraphRef.current;

    if (paragraph) {
      // Split the paragraph content into individual spans
      const content = paragraph.textContent;
      const wrappedContent = content
        .split("")
        .map((char) => `<span>${char}</span>`)
        .join("");
      paragraph.innerHTML = wrappedContent;

      // Apply GSAP animation for paragraph
      gsap.to(paragraph.querySelectorAll("span"), {
        opacity: 1,
        color: "#A1A1AA",
        y: 0,
        stagger: 0.03,
        scrollTrigger: {
          trigger: paragraph,
          start: "top 80%",
          end: "top 44%",
          scrub: 1,
          markers: true, // Debug markers
        },
      });
    }
  }, []);

  return (
    <div className='h-[70vh] mt-48 flex flex-col items-center'>
      <h1
        ref={headingRef}
        className='w-[68vw] mb-4 tracking-light font-[font1] text-[7.5vw] text-center font-[700] text-zinc-400 leading-[3.5vh]'
      >
        About <span className='text-[#0D7C66] tracking-tighter pl-12'>Us</span>
      </h1>
      <p
        ref={paragraphRef}
        className='about-content font-[font6] w-[68vw] mt-16 text-[2.5vh] text-center text-zinc-800 leading-[3.5vh]'
      >
        Welcome to Innov-a-Thon 2024—the ultimate mix of creativity and technology! Join us for a 24-hour coding marathon where brilliant minds unite to tackle real-world challenges. Ready to make your mark? Address critical issues in healthcare, space exploration, and defense. Whether it's Blockchain for banking or AI-powered smart cities, the possibilities are endless! Collaborate with like-minded individuals and industry experts who will guide you throughout the event. This is not just a competition; it's an opportunity to learn, innovate, and network. With exciting workshops and mentorship sessions, you'll gain valuable insights and skills that will last a lifetime. Don't miss out on the chance to showcase your talent and creativity! Sign up now and be part of a transformative experience that could change your future!
      </p>
    </div>
  );
}

export default About;
