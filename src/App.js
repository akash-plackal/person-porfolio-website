import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import WorkSection from "./components/WorkSection";
import Dropdown from "./components/Dropdown";

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <NavBar toggle={toggle} setToggle={setToggle} />
      <LandingPage />
      <Dropdown toggle={toggle} setToggle={setToggle} />
      {/* <HeroSection />
      <AboutMe />
      <WorkSection />
      <Footer /> */}
    </>
  );
};

export default App;
