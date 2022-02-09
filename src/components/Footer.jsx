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
    <FooterDiv>
      <GreyText>Let's connect </GreyText>
      <FooterLinksDiv>
        <FooterLinkItems>Github</FooterLinkItems>
        <FooterLinkItems>Twitter</FooterLinkItems>
        <FooterLinkItems>Email</FooterLinkItems>
        <FooterLinkItems>Linkedin</FooterLinkItems>
      </FooterLinksDiv>
      <FooterCreditDiv>
        <FooterLinkItems>
          Made with ❤️ by <FooterCreditText>Akash Plackal</FooterCreditText>
        </FooterLinkItems>
        <FooterLinkItems style={{ color: "#bbbbbb" }}>
          Go to top &#8679;
        </FooterLinkItems>
      </FooterCreditDiv>
    </FooterDiv>
  );
};

export default Footer;
