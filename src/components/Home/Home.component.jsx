import React from 'react';
import * as Bs from 'react-icons/bs';
import { Container, Grid, Button } from '../GlobalStyle/GlobalStyle.style';
import {
    HomeButtons,
    HomeContainer,
    HomeData,
    HomeDescription,
    HomeEducation,
    HomeGreeting,
    HomeImage,
    HomeName,
    HomeScroll,
    HomeScrollLink,
    HomeScrollName,
    HomeSocial,
    HomeSocialLink,
} from './Home.style';
import { homeData } from './homeData';
import MyProfileImage from '../../assets/myProfileImage.jpg';

const Home = () => {
    return (
        <div id='home'>
            <Container>
                <HomeContainer>
                    <Grid>
                        <HomeData>
                            <HomeImage
                                src={MyProfileImage}
                                alt='MyProfileImage'
                            />
                            <HomeGreeting>Hello, I'm</HomeGreeting>
                            <HomeName>Nejmi Yassine</HomeName>
                            <HomeEducation>
                                FullStack JAVASCRIPT (MERN)
                            </HomeEducation>
                            <HomeDescription>
                                As a skilled full-stack developer, I am
                                dedicated to turning ideas into innovative web
                                applications. Explore my latest projects,
                                showcasing my expertise in Javascript,
                                Typescript, React.js, Redux, Node.js, Express.js
                                and MongoDb.
                            </HomeDescription>

                            <HomeButtons>
                                <Button href='#work' className='button--ghost'>
                                    My projects
                                </Button>
                                <Button href='#about'>About me</Button>
                            </HomeButtons>
                        </HomeData>

                        <HomeSocial>
                            {homeData.map(({ id, icon, link }) => (
                                <HomeSocialLink
                                    key={id}
                                    href={link}
                                    target='_blank'
                                >
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
