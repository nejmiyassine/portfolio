import React from 'react';
import * as Ai from 'react-icons/ai';
import {
  Container,
  SectionSubtitle,
  SectionTitle,
} from '../GlobalStyle/GlobalStyle.style';
import {
  WorkButton,
  WorkCard,
  WorkContainer,
  WorkImg,
  WorkTitle,
} from './Works.style';
import { worksData } from './worksData';

const Works = () => {
  return (
    <section id='work'>
      <SectionSubtitle>My Portfolio</SectionSubtitle>
      <SectionTitle>Recent Works</SectionTitle>

      <Container>
        <WorkContainer>
          {worksData.map((work) => (
            <WorkCard key={work.id}>
              <WorkImg src={work.img} alt={work.alt} />
              <WorkTitle>{work.title}</WorkTitle>
              <WorkButton href={work.demoLink} target='_blank'>
                Demo <Ai.AiOutlineArrowRight />
              </WorkButton>
              <WorkButton href={work.githubLink} target='_blank'>
                Github <Ai.AiFillGithub />
              </WorkButton>
            </WorkCard>
          ))}
        </WorkContainer>
      </Container>
    </section>
  );
};

export default Works;
