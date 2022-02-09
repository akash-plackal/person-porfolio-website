import React from "react";
import {
  FooterDiv,
  GreyText,
  FooterLinksDiv,
  FooterLinkItems,
  FooterCreditDiv,
  FooterCreditText,
} from "./styles/Footer.styled";

const Footer = () => {
  return (
    <FooterDiv id="contact">
      <GreyText
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="2000"
      >
        Let's connect
      </GreyText>
      <FooterLinksDiv
        data-aos="fade-left"
        data-aos-delay="150"
        data-aos-duration="2000"
      >
        <FooterLinkItems
          target="_blank"
          href="https://github.com/akash-plackal"
        >
          Github
        </FooterLinkItems>
        <FooterLinkItems
          target="_blank"
          href="https://twitter.com/AkashPlackal"
        >
          Twitter
        </FooterLinkItems>
        <FooterLinkItems target="_blank" href="mailto:akashplackal@gmail.com">
          Email
        </FooterLinkItems>
        <FooterLinkItems target="_blank" href="https://example.com">
          Linkedin
        </FooterLinkItems>
      </FooterLinksDiv>
      <FooterCreditDiv
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-duration="2000"
      >
        <FooterLinkItems>
          Made with ❤️ by <FooterCreditText>Akash Plackal</FooterCreditText>
        </FooterLinkItems>
        <FooterLinkItems href="#home" style={{ color: "#bbbbbb" }}>
          Go to top &#8679;
        </FooterLinkItems>
      </FooterCreditDiv>
    </FooterDiv>
  );
};

export default Footer;
