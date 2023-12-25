import React from 'react';
import { SkillsData, SkillsName } from '../Skills/Skills.style';

const SkillsDataContainer = ({ icon, name }) => {
    return (
        <SkillsData>
            {icon}
            <div>
                <SkillsName>{name}</SkillsName>
            </div>
        </SkillsData>
    );
};

export default SkillsDataContainer;
