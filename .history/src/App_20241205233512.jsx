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
import Registration from "./components/Registration"
function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      smooth: true, // Enable smooth scrolling
      duration: 1.8, // Increased scrolling duration for an even smoother effect
      easing: (t) => t * (1.2 - t) * (1.2 - t), // Enhanced custom easing function for a smoother transition
      direction: 'vertical', // Scroll direction ('vertical' or 'horizontal')
      gestureDirection: 'vertical', // Gesture scroll direction
      smoothTouch: true, // Enable smooth scrolling on touch devices
    });

    // Request Animation Frame function for Lenis
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up on component unmount
    };
  }, []);
  return (
    <div className="select-none">
      <Landingpage />
      <Prizes />
      <About />
      <Sponsors />
      {/* <Slider/> */}
      <Schedule />
      <Past />
      <Faq />
      <Feedback />
      <Footer />
      <Registration/>
    </div>
  );
}

export default App;