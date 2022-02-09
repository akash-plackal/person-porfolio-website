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
      <GreyText>Let's connect </GreyText>
      <FooterLinksDiv>
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
      <FooterCreditDiv>
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
