import React, { useState } from 'react';
import {
    Container,
    SectionSubtitle,
    SectionTitle,
} from '../GlobalStyle/GlobalStyle.style';
import {
    AboutContainer,
    AboutTabs,
    AboutTimeLine,
    AboutWrapper,
    DetailsItem,
    DetailsItemAddress,
    DetailsItemCompany,
    DetailsItemDescription,
    DetailsItemTitle,
} from './About.style';
import LiIcon from './LiIcon';

const Details = ({ position, company, time, address, work }) => {
    return (
        <DetailsItem>
            <LiIcon />
            <DetailsItemTitle>
                {position}&nbsp;
                <DetailsItemCompany>@{company}</DetailsItemCompany>
                <DetailsItemAddress>
                    <span>
                        {time} | {address}
                    </span>
                </DetailsItemAddress>
                <DetailsItemDescription>{work}</DetailsItemDescription>
            </DetailsItemTitle>
        </DetailsItem>
    );
};

const About = () => {
    const [tab, setTab] = useState(0);

    const handleChangeTabEducation = () => setTab(0);
    const handleChangeTabExperience = () => setTab(1);

    return (
        <section className='about section' id='about'>
            <SectionSubtitle>My Intro</SectionSubtitle>
            <SectionTitle>About Me</SectionTitle>

            <Container>
                <AboutTabs>
                    <span
                        style={{
                            textDecoration: `${
                                tab === 0 ? 'underline' : 'none'
                            }`,
                        }}
                        onClick={handleChangeTabEducation}
                    >
                        Education
                    </span>
                    <span
                        style={{
                            textDecoration: `${
                                tab === 1 ? 'underline' : 'none'
                            }`,
                        }}
                        onClick={handleChangeTabExperience}
                    >
                        Experiences
                    </span>
                </AboutTabs>

                <AboutWrapper>
                    <AboutTimeLine />
                    {tab === 1 ? (
                        <AboutContainer>
                            <Details
                                position='Full Stack (MERN)'
                                company='ARKx Academy'
                                time='July 2023 - December 2023 (5 mois)'
                                address='Casablanca'
                                work='Throughout the internship, I gained hands-on experience in designing and implementing features, optimizing performance, and collaborating with a multidisciplinary team to deliver a seamless and engaging e-commerce experience.'
                            />

                            <Details
                                position='Freelance Web Developer (Travel Website)'
                                company='Freelance'
                                time='May 2023 - June 2023 (1 month)'
                                address='Casablanca'
                                work='Part-time freelancer for a Canadian client, I created a standout landing page using Vue.js and Laravel. Delivered a visually appealing, responsive solution, showcasing proficiency in both frameworks and effective project management.'
                            />
                        </AboutContainer>
                    ) : (
                        <AboutContainer>
                            <Details
                                position='Bootcamp Full Stack JavaScript (MERN)'
                                company='JobInTech'
                                time='July 2022 - December 2023 (5 months)'
                                address='Casablanca'
                            />
                            <Details
                                position='Bachelor of Energy'
                                company='Ain Chock Faculty of Science'
                                time='July 2021 - December 2022 (1 Year)'
                                address='Casablanca'
                            />
                            <Details
                                position='Technology and Industrial Sciences'
                                company='CPGE Mohammedia'
                                time='September 2018 - July 2021 (3 years)'
                                address='Mohammedia'
                            />
                        </AboutContainer>
                    )}
                </AboutWrapper>
            </Container>
        </section>
    );
};

export default About;
