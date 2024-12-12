import React from 'react';

function Card() {
  return (
    <button className="bg-[#0D7C66] cursor-pointer absolute top-[60vh] left-[44vw] tracking-wider text-zinc-300 font-bold py-1 px-4 rounded-full text-[2.6vh] z-[9999] transition-transform transform hover:scale-110 border-4 border-transparent animate-border">
      Register Now
      <style jsx>{`
        @keyframes borderAnimation {
          0% {
            border-color: red;
          }
          25% {
            border-color: yellow;
          }
          50% {
            border-color: green;
          }
          75% {
            border-color: blue;
          }
          100% {
            border-color: red;
          }
        }
        .animate-border {
          animation: borderAnimation 4s linear infinite;
        }
      `}</style>
    </button>
  );
}

export default Card;
