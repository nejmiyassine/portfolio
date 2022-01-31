import styled from 'styled-components';
import { smallFontSize, tinyFontSize } from '../../styles/font/font';

export const AboutContainer = styled.div`
  row-gap: 2.5rem;
`;

export const AboutData = styled.div`
  text-align: center;
`;

export const AboutInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

export const AboutBox = styled.div`
  background-color: ${({ theme }) => theme.containerColor};
  border-radius: 0.75rem;
  padding: 0.75rem 0.5rem;

  & svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.firstColor};
    margin-bottom: 0.5rem;
  }
`;

export const AboutTitle = styled.h2`
  font-size: ${smallFontSize};
`;

export const AboutSubtitle = styled.span`
  font-size: ${tinyFontSize};
`;

export const AboutDescription = styled.p`
  margin-bottom: 2rem;
  line-height: 1.4;
`;
