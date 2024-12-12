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
        color:
