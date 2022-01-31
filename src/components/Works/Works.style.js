import styled from 'styled-components';
import { fontMedium, fontSize, smallerFontSize } from '../../styles/font/font';

export const WorkContainer = styled.div`
  padding-top: 1rem;
`;

export const WorkCard = styled.div`
  background-color: ${({ theme }) => theme.containerColor};
  padding: 1rem;
  border-radius: 1rem;
`;

export const WorkImg = styled.img`
  border-radius: 1rem;
  margin-bottom: 0.75rem;
`;

export const WorkTitle = styled.h3`
  font-size: ${fontSize};
  font-weight: ${fontMedium};
  margin-bottom: 0.25rem;
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
