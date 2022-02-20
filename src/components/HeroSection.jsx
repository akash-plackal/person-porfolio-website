import React from "react";
import {
  GreetingDiv,
  GreetingText,
  HeroCard,
  HeroDiv,
  HeroImg,
  ImgSrc,
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

        <picture>
          <ImgSrc media="(max-width: 525px)" srcSet={HeroCropped} />
          <HeroImg
            data-aos="fade-right"
            data-aos-delay="20"
            data-aos-duration="1500"
            src={HeroImage}
            alt="hero img"
          />
        </picture>
      </HeroCard>
    </HeroDiv>
  );
};

export default HeroSection;
