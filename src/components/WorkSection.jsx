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

import first from "../assets/cryptoverse.png";
import second from "../assets/real-estate.png";
import third from "../assets/weather-app.png";
import forth from "../assets/momentum-clone.png";

const WorkSection = () => {
  return (
    <>
      <CardDiv id="work">
        <ProjectCard
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1500"
        >
          <ProjectImg src={first} />
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
                <ProjectLinks
                  target="_blank"
                  href="https://cryptoverse-react-redux-toolkit-app.netlify.app/"
                >
                  Website
                </ProjectLinks>
                &#x2022;
                <ProjectLinks
                  target="_blank"
                  href="https://github.com/akash-plackal/cryptoverse-app"
                >
                  Github
                </ProjectLinks>
              </ProjectDiscLink>
            </ProjectDiscCard>
          </ProjectDiscDiv>
        </ProjectCard>

        <ProjectCard
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1500"
        >
          <ProjectImg src={second} />
          <ProjectDiscDiv bgColor="#bfe0d6">
            <ProjectDiscCard>
              <ProjectDiscTech txtColor="#31636e">
                React js / styled-components / router-dom
              </ProjectDiscTech>
              <ProjectDiscMain txtColor="#31636e">
                A real-estate website built using react js and
                styled-components.
              </ProjectDiscMain>
              <ProjectDiscLink txtColor="#31636e">
                <ProjectLinks
                  target="_blank"
                  href="https://elixr-real-estate-react.netlify.app/"
                >
                  Website
                </ProjectLinks>
                &#x2022;
                <ProjectLinks
                  target="_blank"
                  href="https://github.com/akash-plackal/real-estate-site-react"
                >
                  Github
                </ProjectLinks>
              </ProjectDiscLink>
            </ProjectDiscCard>
          </ProjectDiscDiv>
        </ProjectCard>
      </CardDiv>

      {/* ========== */}

      <CardDiv id="work">
        <ProjectCard
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1500"
        >
          <ProjectImg src={third} />
          <ProjectDiscDiv bgColor="#f0ebf5">
            <ProjectDiscCard>
              <ProjectDiscTech txtColor="#3c053c">
                React js / Weather-api / Bootstrap
              </ProjectDiscTech>
              <ProjectDiscMain txtColor="#3c053c">
                A weather app that gives weather report on major cities
              </ProjectDiscMain>
              <ProjectDiscLink txtColor="#3c053c">
                <ProjectLinks
                  target="_blank"
                  href="https://world-wide-weather-app.netlify.app/"
                >
                  Website
                </ProjectLinks>
                &#x2022;
                <ProjectLinks
                  target="_blank"
                  href="https://github.com/akash-plackal/weather-app"
                >
                  Github
                </ProjectLinks>
              </ProjectDiscLink>
            </ProjectDiscCard>
          </ProjectDiscDiv>
        </ProjectCard>

        <ProjectCard
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1500"
        >
          {console.log(" MADE BY |'L'| WITH <3'")}
          <ProjectImg src={forth} />
          <ProjectDiscDiv bgColor="#fbd6b7">
            <ProjectDiscCard>
              <ProjectDiscTech txtColor="#a03516">
                React js / styled-components / quotes api
              </ProjectDiscTech>
              <ProjectDiscMain txtColor="#a03516">
                Clone of a popular chrome extension called momentum build with
                react js
              </ProjectDiscMain>
              <ProjectDiscLink txtColor="#a03516">
                <ProjectLinks
                  target="_blank"
                  href="https://new-tab-momentum.netlify.app/"
                >
                  Website
                </ProjectLinks>
                &#x2022;
                <ProjectLinks
                  target="_blank"
                  href="https://github.com/akash-plackal/Momentum-clone"
                >
                  Github
                </ProjectLinks>
              </ProjectDiscLink>
            </ProjectDiscCard>
          </ProjectDiscDiv>
        </ProjectCard>
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

export default WorkSection;
