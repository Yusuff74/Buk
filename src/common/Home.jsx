import React from "react";
import VideoComponent from "./VideoComponent";
import Main from "./Main";
import Rankings from "./Rankings";
import Academic from "./AcademicList";
import Testimonials from "./Testimonials";
import Summary from "./Summary";
import Events from "./Events";
import Senate from "./Senate";
import Programms from "./Programms";
import Footer from "./Footer";

function Home(props) {
  return (
    <div>
      <VideoComponent />
      <Events />
      <Main />
      <Rankings />
      <Academic />
      <Testimonials />
      <Summary />
      <Senate />
      <Programms />
      <Footer />
    </div>
  );
}

export default Home;
