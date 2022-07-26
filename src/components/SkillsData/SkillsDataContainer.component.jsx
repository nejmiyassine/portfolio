import React from 'react';
import { SkillsData, SkillsLevel, SkillsName } from '../Skills/Skills.style';

const SkillsDataContainer = ({ icon, name, level }) => {
  return (
    <SkillsData>
      {icon}
      <div>
        <SkillsName>{name}</SkillsName>
        <SkillsLevel>{level}</SkillsLevel>
      </div>
    </SkillsData>
  );
};

export default SkillsDataContainer;
