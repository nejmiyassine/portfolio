import styled, { createGlobalStyle } from 'styled-components';
import {
  fontFamily,
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
`;

export const Container = styled.div`
  max-width: ${breakpoints.desktop};
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const Grid = styled.div`
  display: grid;
  gap: 1.25rem;
`;

export const Main = styled.main`
  padding: 4.5rem 0 1rem;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const Subtitle = styled.h3`
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: ${fontSizeH2};
  color: ${({ theme }) => theme.firstColor};
  margin-bottom: 2rem;
`;

export const SectionSubtitle = styled.h3`
  display: block;
  font-size: ${smallFontSize};
  color: ${({ theme }) => theme.textColorLight};
`;

export default GlobalStyle;
