import styled from "styled-components";
import { size } from "../../data/breakpoint";

export const PageDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background-color: #dedede;
  min-height: 100vh;
  padding-top: 10rem;
  overflow: hidden;
`;

export const Title = styled.h1`
  color: #001142;
  font-size: clamp(1.7rem, 234%, 4rem);
  font-weight: 500;
  letter-spacing: -1px;
  text-align: center;

  /* @media (min-width: ${size.laptopL}) {
    font-size: 3rem;
  }

  @media (max-width: ${size.mobileL}) {
    font-size: 1.7rem;
    padding: 2.5rem;
  } */
`;

export const P = styled.p`
  font-weight: 400;
  color: #001142;
  font-size: clamp(0.669rem, 0.769rem, 0.869rem);
`;
