import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Landingpage from "./components/Landingpage";
import Past from "./components/Past";
import Sponsors from "./components/Sponsors";
import Faq from "./components/Faq";
import Feedback from "./components/Feedback";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
// import Slider from "./components/Slider";
import Prizes from "./components/Prizes";
import About from "./components/About";
import Registration from "./components/Registration";
import './index.css'; // Importing index.css

function App() {
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
  }, []);
  
  return (
    <div className="select-none font-Blackpast"> {/* Applying Blackpast font */}
      <Landingpage />
      <Prizes />
      <About />
      <Sponsors />
      <Schedule />
      <Past />
      <Faq />
      <Feedback />
      <Footer />
      {/* <Registration/> */}
    </div>
  );
}

export default App;