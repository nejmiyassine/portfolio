import React from 'react';
import * as Bs from 'react-icons/bs';
import { Container, Grid, Button } from '../GlobalStyle/GlobalStyle.style';
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
import { homeData } from './homeData';

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
                <Button
                  download=''
                  href='./assets/pdf/'
                  className='button--ghost'
                >
                  Download CV
                </Button>
                <Button href='#about'>About me</Button>
              </HomeButtons>
            </HomeData>

            <HomeSocial>
              {homeData.map(({ id, icon, link }) => (
                <HomeSocialLink key={id} href={link}>
                  {icon}
                </HomeSocialLink>
              ))}
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
