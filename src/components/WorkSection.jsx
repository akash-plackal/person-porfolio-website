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
  ShowMoreButton,
} from "./styles/WorkSection.styled";

import first from "../assets/cryptoverse.png";
import second from "../assets/real-estate.png";
import third from "../assets/weather-app.png";
import forth from "../assets/momentum-clone.png";

const WorkSection = () => {
  return (
    <>
      <CardDiv id="work">
        <ProjectCard>
          <ProjectImg
            src={first}
            data-aos="fade-right"
            data-aos-delay="20"
            data-aos-duration="1500"
          />
          <ProjectDiscDiv bgColor="#fff7c7">
            <ProjectDiscCard>
              <ProjectDiscTech txtColor="#e29400">
                React js / Redux / Antd
              </ProjectDiscTech>
              <ProjectDiscMain txtColor="#e29400">
                A Cryptocurrency platform build using react js , redux tooltip
                and Antd.
              </ProjectDiscMain>
              <ProjectDiscLink txtColor="#e29400">
                Website &#x2022; Github
              </ProjectDiscLink>
            </ProjectDiscCard>
          </ProjectDiscDiv>
        </ProjectCard>

        <ProjectCard>
          <ProjectImg
            src={second}
            data-aos="fade-left"
            data-aos-delay="20"
            data-aos-duration="1500"
          />
          <ProjectDiscDiv bgColor="#bfe0d6">
            <ProjectDiscCard>
              <ProjectDiscTech txtColor="#31636e">
                React js / Redux / Antd
              </ProjectDiscTech>
              <ProjectDiscMain txtColor="#31636e">
                Join a developer community, attend virtual meetups and
                collaborate online.
              </ProjectDiscMain>
              <ProjectDiscLink txtColor="#31636e">
                Website &#x2022; Github
              </ProjectDiscLink>
            </ProjectDiscCard>
          </ProjectDiscDiv>
        </ProjectCard>
      </CardDiv>

      {/* ========== */}

      <CardDiv id="work">
        <ProjectCard>
          <ProjectImg
            src={third}
            data-aos="fade-right"
            data-aos-delay="20"
            data-aos-duration="1500"
          />
          <ProjectDiscDiv bgColor="#f0ebf5">
            <ProjectDiscCard>
              <ProjectDiscTech txtColor="#3c053c">
                React js / Redux / Antd
              </ProjectDiscTech>
              <ProjectDiscMain txtColor="#3c053c">
                A Cryptocurrency platform build using react js , redux tooltip
                and Antd.
              </ProjectDiscMain>
              <ProjectDiscLink txtColor="#3c053c">
                Website &#x2022; Github
              </ProjectDiscLink>
            </ProjectDiscCard>
          </ProjectDiscDiv>
        </ProjectCard>

        <ProjectCard>
          <ProjectImg
            src={forth}
            data-aos="fade-left"
            data-aos-delay="20"
            data-aos-duration="1500"
          />
          <ProjectDiscDiv bgColor="#fbd6b7">
            <ProjectDiscCard>
              <ProjectDiscTech txtColor="#a03516">
                React js / Redux / Antd
              </ProjectDiscTech>
              <ProjectDiscMain txtColor="#a03516">
                Join a developer community, attend virtual meetups and
                collaborate online.
              </ProjectDiscMain>
              <ProjectDiscLink txtColor="#a03516">
                Website &#x2022; Github
              </ProjectDiscLink>
            </ProjectDiscCard>
          </ProjectDiscDiv>
        </ProjectCard>
      </CardDiv>

      {/* <ShowMoreButton>Show more</ShowMoreButton> */}
    </>
  );
};

export default WorkSection;
