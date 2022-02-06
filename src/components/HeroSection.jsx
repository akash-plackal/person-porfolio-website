import React from "react";
import {
  GreetingDiv,
  GreetingText,
  HeroCard,
  HeroDiv,
  HeroImg,
} from "./styles/HeroSection.styled";
import HeroImage from "../assets/hero-img.png";

const HeroSection = () => {
  return (
    <HeroDiv>
      <HeroCard>
        <GreetingDiv>
          <GreetingText
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1500"
          >
            Great seeing you.
          </GreetingText>
        </GreetingDiv>
        <HeroImg
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1500"
          src={HeroImage}
        />
      </HeroCard>
    </HeroDiv>
  );
};

export default HeroSection;
