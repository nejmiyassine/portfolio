import React from 'react';
import * as Ai from 'react-icons/ai';
import {
  WorkCard,
  WorkButton,
  WorkImg,
  WorkTitle,
} from './WorkCardContainer.style';

const WorkCardContainer = ({ img, alt, title, demoLink, githubLink }) => {
  return (
    <WorkCard>
      <WorkImg src={img} alt={alt} />
      <WorkTitle>{title}</WorkTitle>
      <WorkButton href={demoLink} target='_blank'>
        Demo <Ai.AiOutlineArrowRight />
      </WorkButton>
      <WorkButton href={githubLink} target='_blank'>
        Github <Ai.AiFillGithub />
      </WorkButton>
    </WorkCard>
  );
};

export default WorkCardContainer;
