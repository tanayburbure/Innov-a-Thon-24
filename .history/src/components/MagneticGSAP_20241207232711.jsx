import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MagneticGSAP({ children }) {
  const magnetic = useRef(null);

  useEffect(() => {
    if (!magnetic.current) {
      console.error('Ref not assigned to a valid DOM element.');
      return;
    }

    const xTo = gsap.quickTo(magnetic.current, 'x', { duration: 0.2, ease: 'power3.out' }); // Increased duration for reduced magnetic strength
    const yTo = gsap.quickTo(magnetic.current, 'y', { duration: 0.2, ease: 'power3.out' }); // Increased duration for reduced magnetic strength

    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = magnetic.current.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) * 0.5; // Reduced magnetic effect by scaling down the x value
      const y = (clientY - (top + height / 2)) * 0.5; // Reduced magnetic effect by scaling down the y value

      xTo(x);
      yTo(y);
    };

    const mouseLeave = () => {
      gsap.to(magnetic.current, { x: 0, y: 0, duration: 0.5, ease: 'power3.out' }); // Increased duration for smoother return
    };

    magnetic.current.addEventListener('mousemove', mouseMove);
    magnetic.current.addEventListener('mouseleave', mouseLeave);

    return () => {
      magnetic.current.removeEventListener('mousemove', mouseMove);
      magnetic.current.removeEventListener('mouseleave', mouseLeave);
    };
  }, []);

  if (!React.isValidElement(children)) {
    console.error('The `children` prop must be a valid React element.');
    return null;
  }

  return React.cloneElement(children, { ref: magnetic });
}