import React, { useState, useEffect, useRef } from "react";

const Magnet = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const elementRef = useRef(null);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (elementRef.current) {
      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const distanceX = mousePosition.x - (rect.left + rect.width / 2);
      const distanceY = mousePosition.y - (rect.top + rect.height / 2);

      const magnetStrength = 0.3; // Adjust the strength
      element.style.transform = `translate(${distanceX * magnetStrength}px, ${distanceY * magnetStrength}px)`;
    }
  }, [mousePosition]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div
        ref={elementRef}
        className="w-24 h-24 bg-blue-500 text-white font-bold flex justify-center items-center rounded-full transition-transform duration-200"
      >
        Hover Me
      </div>
    </div>
  );
};

export default Magnet;
