import React from "react";
import { PageDiv, Title, P } from "./styles/LandingPage.styled";

const LandingPage = () => {
  return (
    <PageDiv id="home">
      <Title data-aos="slide-up" data-aos-delay="50" data-aos-duration="1500">
        Hello , I'm Akash I build cool websites
      </Title>
      <P data-aos="slide-up" data-aos-delay="50" data-aos-duration="1500">
        Scroll down for more
      </P>
    </PageDiv>
  );
};

export default LandingPage;
