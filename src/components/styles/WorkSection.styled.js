import styled from "styled-components";
import { size } from "../../data/breakpoint";

export const CardDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3.5% 5%;
  overflow: hidden;

  /* @media (max-width: ${size.mobileL}) {
    flex-direction: column;
  } */
`;

export const ProjectCard = styled.div`
  width: fit-content;
`;

export const ProjectImg = styled.img`
  width: 37.5rem;
  border-radius: 1.5px;
`;

export const ProjectDiscDiv = styled.div`
  height: 13.8rem;
  width: 37.5rem;
  background-color: ${(prop) => prop.bgColor};
  margin-top: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProjectDiscCard = styled.div`
  width: 89%;
  height: 69%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProjectDiscTech = styled.p`
  color: ${(props) => props.txtColor};
  font-size: 0.9rem;
`;

export const ProjectLinks = styled.a`
  color: inherit;
  padding: 0 1%;
`;

export const ProjectDiscMain = styled.h5`
  color: ${(props) => props.txtColor};

  font-size: 1.5rem;
  font-weight: 400;
`;

export const ProjectDiscLink = styled.p`
  color: ${(props) => props.txtColor};
  font-size: 0.9rem;
`;

export const ShowMoreDiv = styled.div`
  background-color: #ebebeb;
  margin: 6rem auto;
  height: 4.375rem;
  width: 16.913rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShowMoreButton = styled.a`
  text-decoration: none;
  color: #001142;
`;
