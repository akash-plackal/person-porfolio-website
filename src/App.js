import AboutMe from "./components/AboutMe";
import HeroSection from "./components/HeroSection";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <LandingPage />
      <HeroSection />
      <AboutMe />
    </>
  );
};

export default App;
