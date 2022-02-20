import { useState, useEffect } from "react";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import WorkSection from "./components/WorkSection";
import Dropdown from "./components/Dropdown";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    AOS.init();

    return AOS.refresh();
  }, []);

  return (
    <>
      <NavBar toggle={toggle} setToggle={setToggle} />
      <LandingPage />
      <Dropdown toggle={toggle} setToggle={setToggle} />
      <HeroSection />
      <AboutMe />
      <WorkSection />
      <Footer />
    </>
  );
};

export default App;
