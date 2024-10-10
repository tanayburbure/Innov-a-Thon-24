import React from "react";
import { Landingpage } from "./components/Landingpage";
import Card from "./components/Card";
import Timeline from "./components/Timeline";
import Past from "./components/Past"
import Sponsors from "./components/Sponsors";
import Faq from "./components/Faq";
import Feedback from "./components/Feedback"
import Schedule from "./components/Schedule"
import Footer from "./components/Footer"
import Slider from "./components/Slider";
import Prizes from "./components/Prizes";


function App(){
  return (<div className="select-none">
      <Landingpage/>
      {/* <Card/>
      <Timeline/>
      <Prizes/>
      <Sponsors/>
      <Slider/>
      <Schedule/>
      <Past/>
      <Faq/>
      <Feedback/>
      <Footer/> */}
    </div>
  );
}

export default App;