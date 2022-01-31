import styled, { createGlobalStyle } from 'styled-components';
import {
  fontFamily,
  fontMedium,
  fontSemiBold,
  fontSize,
  fontSizeH2,
  smallFontSize,
} from '../../styles/font/font';
import { breakpoints } from '../../styles/breakpoints/breakpoints';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  ${'' /* Scroll Bar */}
  ::-webkit-scrollbar {
    width: .6rem;
    border-radius: .5rem;
    background-color:	#595f69;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #3d4148;
    border-radius: .5rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #2f3237;
  }

  body {
    font-family: ${fontFamily}, sans-serif;
    font-size: ${fontSize};
    background: ${({ theme }) => theme.bodyColor};
    color: ${({ theme }) => theme.textColor};
  }

  h1, h2, h3 {
    color: ${({ theme }) => theme.titleColor};
    font-weight: ${fontSemiBold};
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media (min-width: ${breakpoints.desktop}) {
    section {
      padding: 6.5rem 0 1rem;
    }
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 0.75rem;

  @media (min-width: ${breakpoints.desktop}) {
    max-width: ${breakpoints.desktop};
  }

  @media (min-width: ${breakpoints.tablet}) {
    max-width: ${breakpoints.tablet};
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 1.25rem;
`;

export const Main = styled.main`
  padding: 4.5rem 0 1rem;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: ${fontSizeH2};
  color: ${({ theme }) => theme.firstColor};
  margin-bottom: 2rem;

  @media (min-width: ${breakpoints.desktop}) {
    margin-bottom: 3.5rem;
  }
`;

export const SectionSubtitle = styled.h3`
  display: block;
  font-size: ${smallFontSize};
  color: ${({ theme }) => theme.textColorLight};
  text-align: center;
`;

export const Button = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.firstColor};
  color: ${({ theme }) => theme.bodyColor};
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-weight: ${fontMedium};
  transition: 0.3s;

  &.button--ghost {
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.firstColor};
    color: ${({ theme }) => theme.firstColor};
  }

  &:hover {
    background-color: ${({ theme }) => theme.firstColorAlt};
    color: ${({ theme }) => theme.bodyColor};
  }
`;

export default GlobalStyle;
