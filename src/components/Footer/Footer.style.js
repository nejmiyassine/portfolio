import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints/breakpoints';
import { smallerFontSize } from '../../styles/font/font';

export const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.firstColor};
  position: relative;
  margin-top: 8rem;
`;

export const FooterContainer = styled.div`
  padding: 2rem 0 6rem;
`;

export const FooterTitle = styled.h1`
  color: ${({ theme }) => theme.bodyColor};
  text-align: center;
  margin-bottom: 2rem;
`;

export const FooterList = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.bodyColor};
`;

export const FooterSocial = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 1.25rem;
`;

export const FooterSocialLink = styled.a`
  background-color: ${({ theme }) => theme.bodyColor};
  color: ${({ theme }) => theme.firstColor};
  padding: 0.25rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  display: flex;
  align-items: center;

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.25rem;
    padding: 0.4rem;
    border-radius: 0.5rem;
  }
`;

export const FooterCopy = styled.span`
  display: block;
  margin-top: 4.5rem;
  color: ${({ theme }) => theme.containerColor};
  text-align: center;
  font-size: ${smallerFontSize};
`;
