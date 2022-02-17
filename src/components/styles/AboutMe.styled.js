import styled from "styled-components";
import { Title } from "./LandingPage.styled";
import { size } from "../../data/breakpoint";

export const AboutMeDiv = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${size.mobileL}) {
    padding: 0 1.4rem;
  }
`;

export const AboutMeDisc = styled(Title)`
  font-size: 2rem;
  color: #000;

  @media (max-width: ${size.mobileL}) {
    font-size: 1.5rem;
  }
`;
