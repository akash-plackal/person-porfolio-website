import styled from "styled-components";
// import { AboutMeDisc } from "./AboutMe.styled";

// export const WorkText = styled(AboutMeDisc)`
//   text-align: start;
//   margin-left: 1rem;
// `;

export const CardDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3.5% 5%;
  overflow: hidden;
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
  font-family: "Poppins", sans-serif;
`;

export const ProjectDiscMain = styled.h5`
  color: ${(props) => props.txtColor};
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
`;

export const ProjectDiscLink = styled.p`
  color: ${(props) => props.txtColor};
  font-size: 0.9rem;
  font-family: "Poppins", sans-serif;
`;

export const ShowMoreButton = styled.a`
  background-color: #f6f6f6;
  margin: auto;
  height: 2rem;
  width: 5rem;
`;
