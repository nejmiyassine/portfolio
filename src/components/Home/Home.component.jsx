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
  HomeScroll,
  HomeScrollLink,
  HomeScrollName,
  HomeSocial,
  HomeSocialLink,
} from './Home.style';
import { homeData } from './homeData';

const Home = () => {
  return (
    <div id='home'>
      <Container>
        <HomeContainer>
          <Grid>
            <HomeData>
              <HomeGreeting>Hello, I'm</HomeGreeting>
              <HomeName>Nejmi Yassine</HomeName>
              <HomeEducation>Frontend Developer</HomeEducation>

              <HomeButtons>
                <Button href='#work' className='button--ghost'>
                  My projects
                </Button>
                <Button href='#about'>About me</Button>
              </HomeButtons>
            </HomeData>

            <HomeSocial>
              {homeData.map(({ id, icon, link }) => (
                <HomeSocialLink key={id} href={link} target='_blank'>
                  {icon}
                </HomeSocialLink>
              ))}
            </HomeSocial>

            <HomeScroll>
              <HomeScrollLink href='#about'>
                <Bs.BsMouse />
                <HomeScrollName>Scroll Down</HomeScrollName>
              </HomeScrollLink>
            </HomeScroll>
          </Grid>
        </HomeContainer>
      </Container>
    </div>
  );
};

export default Home;
