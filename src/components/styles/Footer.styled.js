import styled from "styled-components";
import { NavItems } from "./NavBar.styled";
import { size } from "../../data/breakpoint";

export const FooterDiv = styled.div`
  height: 48vh;
  padding: 6% 6%;
  overflow: hidden;

  /* @media (max-width: ${size.mobileL}) {
    padding: none;
  } */
`;

export const GreyText = styled.p`
  color: #808080;
`;

export const FooterLinksDiv = styled.div`
  margin-right: auto;
  width: 50%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${size.mobileL}) {
    width: 90%;
  }
`;

export const FooterLinkItems = styled(NavItems)`
  color: #111111;
  font-size: 1.7rem;
  font-weight: 400;

  @media (max-width: ${size.mobileL}) {
    font-size: 1.1rem;
  }
`;

export const FooterCreditDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60%;
`;

export const FooterCreditText = styled.span`
  font-weight: 600;
`;
