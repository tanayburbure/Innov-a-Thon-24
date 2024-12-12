import React, { useEffect } from "react";
import { Lenis } from '@studio-freight/react-lenis';
import Landingpage from "./components/Landingpage";
import Past from "./components/Past";
import Sponsors from "./components/Sponsors";
import Faq from "./components/Faq";
import Feedback from "./components/Feedback";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Prizes from "./components/Prizes";
import About from "./components/About";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="select-none">
      <Landingpage />
      {/* <Card/> */}
      <Prizes />
      <About />
      <Sponsors />
      {/* <Slider/> */}
      <Schedule />
      <Past />
      <Faq />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;