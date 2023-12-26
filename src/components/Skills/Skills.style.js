import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints/breakpoints';
import { fontMedium, fontSize, smallFontSize } from '../../styles/font/font';

export const SkillsSection = styled.section`
    padding: 1.5rem 0;
`;

export const SkillsContainer = styled.div`
    row-gap: 2rem;
    padding-top: 1rem;
    display: grid;

    @media (min-width: ${breakpoints.mobile}) {
        justify-content: center;
    }

    @media (min-width: ${breakpoints.desktop}) {
        grid-template-columns: repeat(2, 350px);
        column-gap: 3rem;
    }
`;

export const SkillsContent = styled.div`
    background-color: ${({ theme }) => theme.containerColor};
    padding: 1.5rem;
    border-radius: 1.25rem;

    @media (min-width: ${breakpoints.mobile}) {
        padding: 2rem 4rem;
    }
`;

export const SkillsTitle = styled.h3`
    font-size: ${fontSize};
    font-weight: ${fontMedium};
    color: ${({ theme }) => theme.firstColor};
    text-align: center;
    margin-bottom: 1.5rem;
`;

export const SkillsBox = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    @media (max-width: 320px) {
        column-gap: 1.5rem;
    }
`;

export const SkillsGroup = styled.div`
    display: grid;
    align-content: flex-start;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`;

export const SkillsData = styled.div`
    display: flex;
    column-gap: 0.5rem;

    & svg {
        color: ${({ theme }) => theme.firstColor};
    }
`;

export const SkillsName = styled.h3`
    font-size: ${fontSize};
    font-weight: ${fontMedium};
    line-height: 18px;

    @media (max-width: 320px) {
        font-size: ${smallFontSize};
    }
`;
