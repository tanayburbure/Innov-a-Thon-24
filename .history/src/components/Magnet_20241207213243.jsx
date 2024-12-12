import React, { useEffect, useRef } from "react";

const Magnet = ({ children, className }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!elementRef.current) return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const distanceX = e.clientX - (rect.left + rect.width / 2);
      const distanceY = e.clientY - (rect.top + rect.height / 2);

      const magnetStrength = 0.3; // Adjust the strength
      element.style.transform = `translate(${distanceX * magnetStrength}px, ${distanceY * magnetStrength}px)`;
    };

    const resetTransform = () => {
      if (elementRef.current) {
        elementRef.current.style.transform = "translate(0, 0)";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    elementRef.current?.addEventListener("mouseleave", resetTransform);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      elementRef.current?.removeEventListener("mouseleave", resetTransform);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-transform duration-200 ${className}`}
    >
      {children}
    </div>
  );
};

export default Magnet;
