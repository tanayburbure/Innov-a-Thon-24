import React, { useEffect, useRef } from 'react';
import Card from './Card';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const h3Ref = useRef(null);

  useEffect(() => {
    const element = h3Ref.current;

    gsap.fromTo(element, 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        delay: 0.2, // Added delay before the animation starts
        scrollTrigger: {
          trigger: element,
          start: "top 85%", // Start animation when the top of the element hits 85% of the viewport height
          end: "top 30%", // End animation when the top of the element hits 30% of the viewport height
          scrub: true, // Smoothly animate the transition
        }
      }
    );
  }, []);

  return (
    <div>
      <div><Card /> </div>
      <div className='text-white h-[78vh] mt-20 -mb-8 flex flex-col justify-center items-center '>
        <h3 ref={h3Ref} className='absolute top-[57vw] text-center leading-[3.5vw] text-[#B3C8CF] text-[3.7vh] font-[font7] w-[72vw]'>
          <br />
          VENUE:
          <br />
          Department of Electronics & Telecommunication, 
          <br />
          AISSMS IOIT
        </h3>
        <h2 className='w-[68vw] mb-20 font-regular font-[font6] tracking-light text-center text-[2.5vh] font-[100] text-zinc-400 leading-[3.5vh]'>
          <span className='text-[7vw] font-[font1] text-zinc-300 tracking-light font-semibold'>About <span className='text-[#0D7C66] tracking-tighter'>Us</span></span>
          <br />
          <br />
          <br />
          <br />
          Welcome to Innov-a-Thon 2024—the ultimate mix of creativity and technology! Join us for a 24-hour coding marathon where brilliant minds unite to tackle real-world challenges.

          Ready to make your mark? Address critical issues in healthcare, space exploration, and defense. Whether it's Blockchain for banking or AI-powered smart cities, the possibilities are endless!

          Collaborate with like-minded individuals and industry experts who will guide you throughout the event. This is not just a competition; it's an opportunity to learn, innovate, and network. 

          With exciting workshops and mentorship sessions, you'll gain valuable insights and skills that will last a lifetime. Don't miss out on the chance to showcase your talent and creativity!

          Sign up now and be part of a transformative experience that could change your future!
        </h2>
      </div>
    </div>
  )
}

export default About