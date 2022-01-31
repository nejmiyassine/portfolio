import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints/breakpoints';
import { fontMedium, fontSize, smallerFontSize } from '../../styles/font/font';

export const WorkContainer = styled.div`
  padding-top: 1rem;
  display: grid;
  justify-content: center;
  row-gap: 3rem;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, max-content);
    column-gap: 3rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    gap: 3rem;
  }
`;

export const WorkCard = styled.div`
  background-color: ${({ theme }) => theme.containerColor};
  padding: 1rem;
  border-radius: 1rem;

  @media (min-width: ${breakpoints.desktop}) {
    padding: 1.25rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, max-content);
  }
`;

export const WorkImg = styled.img`
  border-radius: 1rem;
  margin-bottom: 0.75rem;

  @media (min-width: ${breakpoints.mobile}) {
    width: 295px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    margin-bottom: 1rem;
  }
`;

export const WorkTitle = styled.h3`
  font-size: ${fontSize};
  font-weight: ${fontMedium};
  margin-bottom: 0.25rem;

  @media (min-width: ${breakpoints.desktop}) {
    margin-bottom: 0.5rem;
  }
`;

export const WorkButton = styled.a`
  width: max-content;
  color: ${({ theme }) => theme.firstColor};
  font-size: ${smallerFontSize};
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
  margin-bottom: 0.25rem;

  &:hover svg {
    transform: translateX(0.25rem);
  }

  svg {
    font-size: 1rem;
    transition: 0.3s;
  }
`;
