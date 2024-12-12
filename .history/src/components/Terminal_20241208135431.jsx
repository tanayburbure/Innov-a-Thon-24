// TerminalText.js
import React, { useEffect, useState } from 'react';

const Terminal = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, speed);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [text, speed]);

  return (
    <div className="relative p-2 bg-black text-green-500 font-mono text-lg rounded-md w-fit">
      <span className="terminal-text">{displayedText}</span>
      {isTyping && <span className="absolute animate-blink text-green-500">|</span>}
    </div>
  );
};

export default Terminal;
