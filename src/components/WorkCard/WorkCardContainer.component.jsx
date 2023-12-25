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

const WorkCardContainer = ({ img, alt, title, demoLink, githubLink }) => {
    return (
        <WorkCard>
            <WorkImg src={img} alt={alt} />
            <WorkTitle>{title}</WorkTitle>

            <WorkTechnologies>
                <span>Technologies:</span>
                <img
                    src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
                    alt='React'
                    width={18}
                    height={18}
                />
                <img
                    src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redux-icon.png'
                    alt='Redux'
                    width={18}
                    height={18}
                />
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png'
                    alt='Node js'
                    width={18}
                    height={18}
                />
                <img
                    src='https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png'
                    alt='Mongo DB'
                    width={18}
                    height={18}
                />
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png'
                    alt='GraphQl'
                    width={18}
                    height={18}
                />
                <img
                    src='https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png'
                    alt='Typescript'
                    width={18}
                    height={18}
                />
                <img
                    src='https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png'
                    alt='Firebase'
                    width={18}
                    height={18}
                />
                <img
                    src='https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png'
                    alt='Spring boot'
                    width={18}
                    height={18}
                />
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
