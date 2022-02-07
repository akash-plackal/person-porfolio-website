import React from "react";
import { AboutMeDisc, AboutMeDiv } from "./styles/AboutMe.styled";

const AboutMe = () => {
  return (
    <AboutMeDiv>
      <AboutMeDisc>
        <span data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000">
          I'm a passionate developer from India , skilled at writing
        </span>
        <br />
        <span
          data-aos="fade-left"
          data-aos-delay="150"
          data-aos-duration="2000"
        >
          well-designed and efficient code using current best
        </span>
        <br />
        <span
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="2000"
        >
          practices in Web development.
        </span>
      </AboutMeDisc>
    </AboutMeDiv>
  );
};

export default AboutMe;
