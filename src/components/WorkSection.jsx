import React from "react";

import {
  ProjectImg,
  ProjectCard,
  CardDiv,
  ProjectDiscDiv,
  ProjectDiscTech,
  ProjectDiscCard,
  ProjectDiscMain,
  ProjectDiscLink,
} from "./styles/WorkSection.styled";

import first from "../assets/cryptoverse.png";
import second from "../assets/real-estate.png";

const WorkSection = () => {
  return (
    <CardDiv id="work">
      <ProjectCard>
        <ProjectImg src={first} />
        <ProjectDiscDiv bgColor="#fff7c7">
          <ProjectDiscCard>
            <ProjectDiscTech txtColor="#e29400">
              React js / Redux / Antd
            </ProjectDiscTech>
            <ProjectDiscMain txtColor="#e29400">
              A Cryptocurrency platform build using react js , redux tool tip
              and redux.
            </ProjectDiscMain>
            <ProjectDiscLink txtColor="#e29400">
              Website &#x2022; Github
            </ProjectDiscLink>
          </ProjectDiscCard>
        </ProjectDiscDiv>
      </ProjectCard>

      <ProjectCard>
        <ProjectImg src={second} />
        <ProjectDiscDiv bgColor="#bfe0d6">
          <ProjectDiscCard>
            <ProjectDiscTech txtColor="#31636e">
              React js / Redux / Antd
            </ProjectDiscTech>
            <ProjectDiscMain txtColor="#31636e">
              Join a developer community, attend virtual meetups and collaborate
              online.
            </ProjectDiscMain>
            <ProjectDiscLink txtColor="#31636e">
              Website &#x2022; Github
            </ProjectDiscLink>
          </ProjectDiscCard>
        </ProjectDiscDiv>
      </ProjectCard>
    </CardDiv>
  );
};

export default WorkSection;
