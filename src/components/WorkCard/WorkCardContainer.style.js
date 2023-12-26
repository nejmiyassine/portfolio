import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints/breakpoints';
import {
    fontBold,
    fontSize,
    fontSizeH3,
    smallFontSize,
    smallerFontSize,
} from '../../styles/font/font';

export const WorkCard = styled.div`
    background-color: ${({ theme }) => theme.containerColor};
    border-radius: 1rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    @media (min-width: ${breakpoints.tablet}) {
        grid-template-columns: repeat(2, max-content);
    }
`;

export const WorkImg = styled.img`
    border-radius: 1rem;
    margin-bottom: 0.75rem;
    height: 300px;
    width: 100%;
    object-fit: cover;

    @media (min-width: ${breakpoints.desktop}) {
        margin-bottom: 1rem;
    }
`;

export const WorkTitle = styled.h3`
    font-size: ${fontSize};
    font-weight: ${fontBold};
    margin-bottom: 0.25rem;
    padding: 0 1rem;

    @media (min-width: ${breakpoints.desktop}) {
        font-size: ${fontSizeH3};
        padding: 0 1.5rem;
        margin-bottom: 0.5rem;
    }
`;

export const WorkTechnologies = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-bottom: 0.25rem;
    padding: 0 1rem;

    & span {
        font-size: ${smallFontSize};
    }

    @media (min-width: ${breakpoints.desktop}) {
        padding: 0 1.5rem;
        margin-bottom: 0.5rem;
    }
`;

export const WorkButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

export const WorkButton = styled.a`
    width: max-content;
    color: ${({ theme }) => theme.firstColor};
    font-size: ${smallerFontSize};
    display: flex;
    align-items: center;
    column-gap: 0.25rem;
    margin-bottom: 0.25rem;
    padding: 0 1rem;

    @media (min-width: ${breakpoints.desktop}) {
        padding: 0 1.5rem;
    }

    &:hover svg {
        transform: translateX(0.25rem);
    }

    svg {
        font-size: 1rem;
        transition: 0.3s;
    }
`;
