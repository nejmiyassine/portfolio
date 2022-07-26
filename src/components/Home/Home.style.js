import styled from 'styled-components';
import {
  bigFontSize,
  fontSize,
  smallerFontSize,
  smallFontSize,
} from '../../styles/font/font';

export const HomeContainer = styled.div`
  position: relative;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  row-gap: 4.5rem;
`;

export const HomeData = styled.div`
  text-align: center;

  span,
  h3 {
    font-size: ${smallFontSize};
    font-weight: ${fontSize};
  }
`;

export const HomeGreeting = styled.span`
  display: block;
  color: ${({ theme }) => theme.titleColor};
  margin-bottom: 0.25rem;
`;

export const HomeName = styled.h1`
  font-size: ${bigFontSize};
  margin-bottom: 0.25rem;
`;

export const HomeEducation = styled.h3`
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 2.5rem;
`;

export const HomeButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const HomeSocial = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 0;
  display: grid;
  row-gap: 0.5rem;

  &::after {
    content: '';
    width: 32px;
    height: 2px;
    background-color: ${({ theme }) => theme.firstColor};
    transform: rotate(90deg) translate(16px, 3px);
  }
`;

export const HomeSocialLink = styled.a`
  width: max-content;
  background-color: ${({ theme }) => theme.containerColor};
  color: ${({ theme }) => theme.firstColor};
  padding: 0.25rem;
  border-radius: 0.25rem;
  display: flex;
  font-size: 1rem;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.firstColor};
    color: #fff;
  }
`;

export const HomeScroll = styled.div`
  position: absolute;
  right: 0;
  bottom: 6rem;
`;

export const HomeScrollLink = styled.a`
  display: grid;
  row-gap: 2.25rem;
  justify-items: center;
  color: ${({ theme }) => theme.firstColor};

  & svg {
    font-size: 1.25rem;
  }
`;

export const HomeScrollName = styled.span`
  font-size: ${smallerFontSize};
  transform: rotate(-90deg);
`;
