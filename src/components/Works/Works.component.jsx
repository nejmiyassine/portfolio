import React from 'react';
import * as Ai from 'react-icons/ai';
import {
  Container,
  Grid,
  SectionSubtitle,
  SectionTitle,
} from '../GlobalStyle/GlobalStyle.style';
import { WorkButton, WorkCard, WorkTitle } from './Works.style';

const Works = () => {
  return (
    <section id='work'>
      <SectionSubtitle>My Portfolio</SectionSubtitle>
      <SectionTitle>Recent Works</SectionTitle>

      <Container>
        <Grid>
          <WorkCard>
            <img src='' alt='work__img' />
            <WorkTitle></WorkTitle>
            <WorkButton href='#'>
              Demo <Ai.AiOutlineArrowRight />
            </WorkButton>
            <WorkButton href='#'>
              Github <Ai.AiOutlineArrowRight />
            </WorkButton>
          </WorkCard>
        </Grid>
      </Container>
    </section>
  );
};

export default Works;
