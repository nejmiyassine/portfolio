import React from 'react';
import {
    Container,
    SectionSubtitle,
    SectionTitle,
} from '../GlobalStyle/GlobalStyle.style';
import WorkCardContainer from '../WorkCard/WorkCardContainer.component';
import { worksData } from './worksData';
import { WorkSection, WorkContainer } from './Works.style';

const Works = () => {
    return (
        <WorkSection id='work'>
            <SectionSubtitle>My Portfolio</SectionSubtitle>
            <SectionTitle>Recent Works</SectionTitle>

            <Container>
                <WorkContainer>
                    {worksData.map(
                        (
                            {
                                img,
                                alt,
                                title,
                                demoLink,
                                githubLink,
                                technologies,
                            },
                            idx
                        ) => (
                            <WorkCardContainer
                                key={idx}
                                img={img}
                                alt={alt}
                                title={title}
                                demoLink={demoLink}
                                githubLink={githubLink}
                                technologies={technologies}
                            />
                        )
                    )}
                </WorkContainer>
            </Container>
        </WorkSection>
    );
};

export default Works;
