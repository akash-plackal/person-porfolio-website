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
    height: 100vh;
    width: 100%;
    flex-direction: column;
    overflow: hidden;
  }
`;

export const GreetingDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  text-align: left;
  padding-left: 2rem;
  padding-top: 3rem;

  @media (max-width: ${size.mobileL}) {
    padding-right: 2rem;
    text-align: right;
  }
`;

export const GreetingText = styled.h1`
  font-weight: 500;
  font-style: italic;
  font-size: min(64px, 10.9vw);
  color: #1c0002;

  @media (max-width: ${size.mobileL}) {
    text-align: right;
  }
`;

export const HeroImg = styled.img`
  height: 100%;

  @media (max-width: ${size.mobileL}) {
    height: 35rem;
  }
`;

export const ImgSrc = styled.source``;
