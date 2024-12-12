import React, { useEffect } from 'react';
import Card from './Card';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  useEffect(() => {
    const titleAnimation = gsap.from('.about-title', {
      scrollTrigger: {
        trigger: '.about-title',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      duration: 1.5,
      y: -50,
      opacity: 0,
      ease: 'power3.out',
    });

    const contentAnimation = gsap.from('.about-content', {
      scrollTrigger: {
        trigger: '.about-content',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      duration: 1.5,
      y: 50,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.5,
    });

    return () => {
      titleAnimation.kill();
      contentAnimation.kill();
    };
  }, []);

  return (
    <div className='text-white h-[78vh] mt-20 -mb-8 flex flex-col justify-center items-center'>
      <h2 className='about-title w-[68vw] mb-20 font-regular font-[font6] tracking-light text-center text-[2.5vh] font-[100] text-zinc-400 leading-[3.5vh]'>
        <span className='text-[7vw] font-[font1] text-zinc-300 tracking-light font-semibold'>About <span className='text-[#0D7C66] tracking-tighter'>Us</span></span>
        <br />
        <br />
        <br />
        <br />
        <span className='about-content'>
          Welcome to Innov-a-Thon 2024—the ultimate mix of creativity and technology! Join us for a 24-hour coding marathon where brilliant minds unite to tackle real-world challenges.

          Ready to make your mark? Address critical issues in healthcare, space exploration, and defense. Whether it's Blockchain for banking or AI-powered smart cities, the possibilities are endless!

          Collaborate with like-minded individuals and industry experts who will guide you throughout the event. This is not just a competition; it's an opportunity to learn, innovate, and network. 

          With exciting workshops and mentorship sessions, you'll gain valuable insights and skills that will last a lifetime. Don't miss out on the chance to showcase your talent and creativity!

          Sign up now and be part of a transformative experience that could change your future!
        </span>
      </h2>
    </div>
  );
}

export default About;