import styled from "styled-components";
import { size } from "../../data/breakpoint";

export const HeroDiv = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroCard = styled.div`
  height: 37rem;
  width: max(60vw, 1040px);
  background-color: #fff0f1;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${size.mobileL}) {
    height: 90vh;
    flex-direction: column;
  }
`;

export const GreetingDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-left: 2rem;
  padding-top: 3rem;
`;

export const GreetingText = styled.h1`
  font-weight: 500;
  font-style: italic;
  /* font-size: 9.9vh; */
  font-size: min(64px, 10.9vw);
  color: #1c0002;
`;

export const HeroImg = styled.img`
  height: 100%;

  @media (max-width: ${size.mobileL}) {
    display: none;
    width: 100%;
  }
`;

export const HeroImgCropped = styled.img`
  display: none;

  @media (max-width: ${size.mobileL}) {
    display: inline-block;
    width: 100%;
  }
`;
