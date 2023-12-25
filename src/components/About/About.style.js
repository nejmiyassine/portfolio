import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints/breakpoints';
import { fontSize, fontSizeH2, smallFontSize } from '../../styles/font/font';

export const AboutWrapper = styled.div`
    position: relative;
    width: 75%;
`;

export const AboutTabs = styled.div`
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-around;
    font-weight: bold;
    color: ${({ theme }) => theme.textColor};

    span {
        cursor: pointer;
    }
`;

export const AboutTimeLine = styled.div`
    position: absolute;
    left: 8;
    top: 0;
    transform-origin: top;
    background-color: ${({ theme }) => theme.firstColor};
    width: 4px;
    height: 100%;
`;

export const AboutContainer = styled.ul`
    row-gap: 1.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-left: 1rem;
`;

export const DetailsItem = styled.li`
    padding: 0 10px;
    width: 90%;
    margin: 0 auto;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 2rem;
`;

export const DetailsItemTitle = styled.h3`
    font-size: ${fontSizeH2};
    text-transform: capitalize;
    font-weight: bold;
`;

export const DetailsItemCompany = styled.span`
    color: ${({ theme }) => theme.firstColor};
    text-transform: capitalize;
`;

export const DetailsItemAddress = styled.p`
    font-size: ${fontSize};
    font-weight: 600;
    color: ${({ theme }) => theme.textColor};
    padding: 0.5rem 0;
`;

export const DetailsItemDescription = styled.p`
    font-size: ${smallFontSize};
    font-weight: 400;
`;

export const AboutDescription = styled.p`
    margin-bottom: 2rem;
    line-height: 1.4;

    @media (min-width: ${breakpoints.mobile}) {
        padding: 0 5rem;
    }
`;
