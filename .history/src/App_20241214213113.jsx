import React, { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { FaArrowUp } from 'react-icons/fa'; // Importing the scroll-to-top icon
import Landingpage from "./components/Landingpage";
import Past from "./components/Past";
import Sponsors from "./components/Sponsors";
import Faq from "./components/Faq";
import Feedback from "./components/Feedback";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Prizes from "./components/Prizes";
import About from "./components/About";
import Registration from "./components/Registration";
import './index.css';

function App() {
  const audioRef = useRef(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(true); // Default music to play on load

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Auto-play background audio
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error('Error playing audio:', error);
      });
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  const scrollToTop = () => {
    // Smoothly scroll to the top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="select-none overflow-hidden">
      {/* Background Audio */}
      <audio ref={audioRef} src="public/video/relaxed.mp3" loop></audio>

      {/* Music Toggle Button */}
      <div className="fixed bottom-6 right-6 text-[2.5vh] z-50">
        <button
          onClick={toggleMusic}
          className={`bg-transparent font-[font7] writing-vertical-rl text-center hover:text-none border-none shadow-none hover:shadow-none !hover:bg-transparent focus:outline-none ${isMusicPlaying ? 'text-yellow-500' : 'text-[#219B9D]'}
            }`}
          style={{
            writingMode: 'vertical-rl', // Makes text vertical
            transform: 'rotate(360deg)', // Rotates text to read top to bottom
          }}
        >
          {isMusicPlaying ? 'Sound OFF' : 'Sound ON'}
        </button>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-6 right-20 text-[2.5vh] z-50">
        <button
          onClick={scrollToTop} // This triggers scroll to top on single click
          className="bg-transparent text-[#219B9D] hover:text-yellow-500 border-none shadow-none focus:outline-none"
        >
          <FaArrowUp size={30} />
        </button>
      </div>

      {/* Components */}
      <Landingpage />
      <Card />
      <Prizes />
      <About />
      <Sponsors />
      <Schedule />
      <Past />
      <Faq />
      <Feedback />
      <Footer />
      {/* <Registration /> */}
    </div>
  );
}

export default App;
