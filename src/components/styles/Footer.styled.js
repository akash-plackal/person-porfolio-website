import styled from "styled-components";
import { NavItems } from "./NavBar.styled";

export const FooterDiv = styled.div`
  height: 48vh;
  padding: 6% 6%;
  overflow: hidden;
`;

export const GreyText = styled.p`
  color: #808080;
  font-family: "Poppins", sans-serif;
`;

export const FooterLinksDiv = styled.div`
  margin-right: auto;
  width: 50%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterLinkItems = styled(NavItems)`
  color: #111111;
  font-size: 1.7rem;
  font-weight: 400;
`;

export const FooterCreditDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60%;
`;

export const FooterCreditText = styled.span`
  font-weight: 600;
  font-family: "Poppins", sans-serif;
`;
