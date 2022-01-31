import React from 'react';
import * as Ai from 'react-icons/ai';
import * as Bs from 'react-icons/bs';
import { Container, Grid } from '../GlobalStyle/GlobalStyle.style';
import {
  HomeButtons,
  HomeContainer,
  HomeData,
  HomeEducation,
  HomeGreeting,
  HomeName,
  HomeSocial,
  HomeSocialLink,
  HomeSroll,
  HomeSrollName,
} from './Home.style';

const Home = () => {
  return (
    <section className='home section' id='home'>
      <Container>
        <HomeContainer>
          <Grid>
            <HomeData>
              <HomeGreeting>Hello, I'm</HomeGreeting>
              <HomeName>Nejmi Yassine</HomeName>
              <HomeEducation>Frontend Developer</HomeEducation>

              <HomeButtons>
                <a
                  download=''
                  href='./assets/pdf/'
                  className='button button--ghost'
                >
                  Download CV
                </a>
                <a href='#about' className='button'>
                  About me
                </a>
              </HomeButtons>
            </HomeData>

            <HomeSocial>
              <HomeSocialLink href='https://www.linkedin.com/in/yassine-nejmi/'>
                <Ai.AiFillLinkedin />
              </HomeSocialLink>

              <HomeSocialLink href='https://github.com/letsCode20'>
                <Ai.AiFillGithub />
              </HomeSocialLink>

              <HomeSocialLink href='https://www.instagram.com/yassinecode/'>
                <Ai.AiOutlineInstagram />
              </HomeSocialLink>
            </HomeSocial>

            <HomeSroll href='#about'>
              <Bs.BsMouse />
              <HomeSrollName>Scroll Down</HomeSrollName>
            </HomeSroll>
          </Grid>
        </HomeContainer>
      </Container>
    </section>
  );
};

export default Home;
