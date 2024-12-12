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
    // Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});
  }, []);
  return (
    <div className="select-none">
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