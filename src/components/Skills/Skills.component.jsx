import React from 'react';
import {
  Container,
  SectionSubtitle,
  SectionTitle,
} from '../GlobalStyle/GlobalStyle.style';
import SkillsDataContainer from '../SkillsData/SkillsDataContainer.component';
import {
  SkillsSection,
  SkillsContent,
  SkillsData,
  SkillsBox,
  SkillsGroup,
  SkillsLevel,
  SkillsName,
  SkillsTitle,
  SkillsContainer,
} from './Skills.style';
import { frontEndSkillsData, backEndSkillsData } from './skillsData';

const Skills = () => {
  return (
    <SkillsSection id='skills'>
      <SectionSubtitle>My Abilities</SectionSubtitle>
      <SectionTitle>My Experience</SectionTitle>

      <Container>
        <SkillsContainer>
          {/* <Grid> */}
          <SkillsContent>
            <SkillsTitle>Frontend Developer</SkillsTitle>

            <SkillsBox>
              <SkillsGroup>
                {frontEndSkillsData
                  .slice(0, 3)
                  .map(({ id, icon, name, level }) => (
                    <SkillsDataContainer
                      key={id}
                      icon={icon}
                      name={name}
                      level={level}
                    />
                  ))}
              </SkillsGroup>

              <SkillsGroup>
                {frontEndSkillsData
                  .slice(3, frontEndSkillsData.length)
                  .map(({ id, icon, name, level }) => (
                    <SkillsDataContainer
                      key={id}
                      icon={icon}
                      name={name}
                      level={level}
                    />
                  ))}
              </SkillsGroup>
            </SkillsBox>
          </SkillsContent>

          <SkillsContent>
            <SkillsTitle>Backend Developer</SkillsTitle>

            <SkillsBox>
              <SkillsGroup>
                {backEndSkillsData.map(({ id, icon, name, level }) => (
                  <SkillsData key={id}>
                    {icon}
                    <div>
                      <SkillsName>{name}</SkillsName>
                      <SkillsLevel>{level}</SkillsLevel>
                    </div>
                  </SkillsData>
                ))}
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
