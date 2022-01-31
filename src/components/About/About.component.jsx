import React from 'react';
import {
  Button,
  Container,
  Grid,
  SectionSubtitle,
  SectionTitle,
} from '../GlobalStyle/GlobalStyle.style';
import {
  AboutBox,
  AboutContainer,
  AboutData,
  AboutDescription,
  AboutInfo,
  AboutSubtitle,
  AboutTitle,
} from './About.style';
import { aboutData } from './aboutData';

const About = () => {
  return (
    <section className='about section' id='about'>
      <SectionSubtitle>My Intro</SectionSubtitle>
      <SectionTitle>About Me</SectionTitle>

      <Container>
        <AboutContainer>
          <Grid>
            <AboutData>
              <AboutInfo>
                {aboutData.map(({ id, icon, title, subtitle }) => (
                  <AboutBox key={id}>
                    {icon}
                    <AboutTitle>{title}</AboutTitle>
                    <AboutSubtitle>{subtitle}</AboutSubtitle>
                  </AboutBox>
                ))}
              </AboutInfo>

              <AboutDescription>
                Frontend Developer, I create web pages with React and PHP. I
                have experience with many clients are happy with the project
                carried out.
              </AboutDescription>

              <Button href='#contact'>Contact Me</Button>
            </AboutData>
          </Grid>
        </AboutContainer>
      </Container>
    </section>
  );
};

export default About;
