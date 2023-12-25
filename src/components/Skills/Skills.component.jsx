import React from 'react';

import SkillsDataContainer from '../SkillsData/SkillsDataContainer.component';
import { frontEndSkillsData, backEndSkillsData } from './skillsData';

import {
    Container,
    SectionSubtitle,
    SectionTitle,
} from '../GlobalStyle/GlobalStyle.style';
import {
    SkillsSection,
    SkillsContent,
    SkillsBox,
    SkillsGroup,
    SkillsTitle,
    SkillsContainer,
} from './Skills.style';

const Skills = () => {
    return (
        <SkillsSection id='skills'>
            <SectionSubtitle>My Abilities</SectionSubtitle>
            <SectionTitle>My Skills</SectionTitle>

            <Container>
                <SkillsContainer>
                    {/* <Grid> */}
                    <SkillsContent>
                        <SkillsTitle>Frontend</SkillsTitle>

                        <SkillsBox>
                            <SkillsGroup>
                                {frontEndSkillsData.map(
                                    ({ icon, name, level }, idx) => (
                                        <SkillsDataContainer
                                            key={idx}
                                            icon={icon}
                                            name={name}
                                            level={level}
                                        />
                                    )
                                )}
                            </SkillsGroup>
                        </SkillsBox>
                    </SkillsContent>

                    <SkillsContent>
                        <SkillsTitle>Backend</SkillsTitle>

                        <SkillsBox>
                            <SkillsGroup>
                                {backEndSkillsData.map(
                                    ({ icon, name, level }, idx) => (
                                        <SkillsDataContainer
                                            key={idx}
                                            icon={icon}
                                            name={name}
                                            level={level}
                                        />
                                    )
                                )}
                            </SkillsGroup>
                        </SkillsBox>
                    </SkillsContent>
                    {/* </Grid> */}
                </SkillsContainer>
            </Container>
        </SkillsSection>
    );
};

export default Skills;
