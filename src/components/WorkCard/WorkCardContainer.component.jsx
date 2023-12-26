import React from 'react';
import * as Ai from 'react-icons/ai';
import {
    WorkCard,
    WorkButton,
    WorkImg,
    WorkTitle,
    WorkButtons,
    WorkTechnologies,
} from './WorkCardContainer.style';

const WorkCardContainer = ({
    img,
    alt,
    title,
    demoLink,
    githubLink,
    technologies,
}) => {
    return (
        <WorkCard>
            <WorkImg src={img} alt={alt} />
            <WorkTitle>{title}</WorkTitle>

            <WorkTechnologies>
                <span>Technologies:</span>
                {technologies.map(({ imageUrl, name }, idx) => (
                    <img
                        key={idx}
                        src={imageUrl}
                        alt={name}
                        width={18}
                        height={18}
                    />
                ))}
            </WorkTechnologies>

            <WorkButtons>
                <WorkButton href={demoLink} target='_blank'>
                    Demo <Ai.AiOutlineArrowRight />
                </WorkButton>
                <WorkButton href={githubLink} target='_blank'>
                    Github <Ai.AiFillGithub />
                </WorkButton>
            </WorkButtons>
        </WorkCard>
    );
};

export default WorkCardContainer;
