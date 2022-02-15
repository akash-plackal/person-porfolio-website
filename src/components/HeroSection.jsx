import React from "react";
import {
  GreetingDiv,
  GreetingText,
  HeroCard,
  HeroDiv,
  HeroImg,
  HeroImgCropped,
} from "./styles/HeroSection.styled";
import HeroImage from "../assets/hero-img.png";
import HeroCropped from "../assets/hero-img-croped.png";

const HeroSection = () => {
  return (
    <HeroDiv>
      <HeroCard>
        <GreetingDiv>
          <GreetingText
            data-aos="fade-left"
            data-aos-delay="20"
            data-aos-duration="1500"
          >
            Great seeing you.
          </GreetingText>
        </GreetingDiv>
        <HeroImg
          data-aos="fade-right"
          data-aos-delay="20"
          data-aos-duration="1500"
          src={HeroImage}
        />
        <HeroImgCropped src={HeroCropped} />
      </HeroCard>
    </HeroDiv>
  );
};

export default HeroSection;
