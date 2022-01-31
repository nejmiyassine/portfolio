import React from 'react';
import * as Ai from 'react-icons/ai';
import {
  Container,
  Grid,
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
          <Grid>
            {worksData.map((work) => (
              <WorkCard key={work.id}>
                <WorkImg src='' alt='work__img' />
                <WorkTitle>{work.title}</WorkTitle>
                <WorkButton href={work.demoLink}>
                  Demo <Ai.AiOutlineArrowRight />
                </WorkButton>
                <WorkButton href={work.githubLink}>
                  Github <Ai.AiFillGithub />
                </WorkButton>
              </WorkCard>
            ))}
          </Grid>
        </WorkContainer>
      </Container>
    </section>
  );
};

export default Works;
