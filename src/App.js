import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const App = () => {
  return (
    <>
      <NavBar />
      <LandingPage />
    </>
  );
};

export default App;
