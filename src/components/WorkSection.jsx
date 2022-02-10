import React from "react";
import {
  ProjectImg,
  ProjectCard,
  CardDiv,
  ProjectDiscDiv,
  ProjectDiscTech,
  ProjectLinks,
  ProjectDiscCard,
  ProjectDiscMain,
  ProjectDiscLink,
  ShowMoreDiv,
  ShowMoreButton,
} from "./styles/WorkSection.styled";
import { ProjectData, ProjectData2 } from "../data/projects";

const WorkNew = () => {
  return (
    <>
      <CardDiv id="work">
        {ProjectData.map((project, idx) => (
          <ProjectCard
            key={idx}
            data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay="50"
            data-aos-duration="1500"
          >
            <ProjectImg src={project.image} />
            <ProjectDiscDiv bgColor={project.bgColor}>
              <ProjectDiscCard>
                <ProjectDiscTech txtColor={project.txtColor}>
                  {project.tech}
                </ProjectDiscTech>
                <ProjectDiscMain txtColor={project.txtColor}>
                  {project.discMain}
                </ProjectDiscMain>
                <ProjectDiscLink txtColor={project.txtColor}>
                  <ProjectLinks target="_blank" href={project.website}>
                    Website
                  </ProjectLinks>
                  &#x2022;
                  <ProjectLinks target="_blank" href={project.github}>
                    Github
                  </ProjectLinks>
                </ProjectDiscLink>
              </ProjectDiscCard>
            </ProjectDiscDiv>
          </ProjectCard>
        ))}
      </CardDiv>

      {/* ------------------------ */}

      <CardDiv>
        {ProjectData2.map((project, idx) => (
          <ProjectCard
            key={idx}
            data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay="50"
            data-aos-duration="1500"
          >
            <ProjectImg src={project.image} />
            <ProjectDiscDiv bgColor={project.bgColor}>
              <ProjectDiscCard>
                <ProjectDiscTech txtColor={project.txtColor}>
                  {project.tech}
                </ProjectDiscTech>
                <ProjectDiscMain txtColor={project.txtColor}>
                  {project.discMain}
                </ProjectDiscMain>
                <ProjectDiscLink txtColor={project.txtColor}>
                  <ProjectLinks target="_blank" href={project.website}>
                    Website
                  </ProjectLinks>
                  &#x2022;
                  <ProjectLinks target="_blank" href={project.github}>
                    Github
                  </ProjectLinks>
                </ProjectDiscLink>
              </ProjectDiscCard>
            </ProjectDiscDiv>
          </ProjectCard>
        ))}
      </CardDiv>

      <ShowMoreDiv
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="2500"
      >
        <ShowMoreButton
          target={"_blank"}
          href="https://github.com/akash-plackal"
        >
          Veiw all projects &#8680;
        </ShowMoreButton>
      </ShowMoreDiv>
    </>
  );
};

export default WorkNew;
