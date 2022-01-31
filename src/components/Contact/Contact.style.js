import styled from 'styled-components';
import {
  fontMedium,
  fontSizeH3,
  smallerFontSize,
  smallFontSize,
} from '../../styles/font/font';

export const ContactSection = styled.section`
  padding-top: 1rem;
`;

export const ContactContainer = styled.div`
  display: grid;
  row-gap: 3rem;
  padding-bottom: 3rem;
`;

export const ContactContent = styled.div``;

export const ContactTitle = styled.h3`
  text-align: center;
  font-size: ${fontSizeH3};
  margin-bottom: 1.5rem;
`;

export const ContactInfo = styled.div`
  display: grid;
  gap: 1rem;
`;

export const ContactCard = styled.div`
  background-color: ${({ theme }) => theme.containerColor};
  padding: 1rem;
  border-radius: 0.75rem;
  text-align: center;

  & svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.titleColor};
    margin-bottom: 0.25rem;
  }

  h3,
  span {
    font-size: ${smallFontSize};
  }
`;

export const ContactCardTitle = styled.h3`
  font-weight: ${fontMedium};
`;

export const ContactCardData = styled.span`
  display: block;
  margin-bottom: 0.75rem;
`;

export const ContactButton = styled.a`
  color: ${({ theme }) => theme.firstColor};
  font-size: ${smallFontSize};
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.25rem;

  &:hover svg {
    transform: translateX(0.25rem);
  }

  svg {
    font-size: 1rem;
    transition: 0.3s;
    color: ${({ theme }) => theme.firstColor};
  }
`;

export const ContactForm = styled.form`
  position: relative;

  & a {
    position: absolute;
    left: 0;
    bottom: -11rem;
    /* margin-top: 6rem; */
  }
`;

export const ContactFormDiv = styled.div`
  position: relative;
  margin-bottom: 2rem;
  height: 4rem;
`;

export const ContactFormTag = styled.label`
  position: absolute;
  top: -0.75rem;
  left: 1.25rem;
  font-size: ${smallerFontSize};
  padding: 0.25rem;
  background-color: ${({ theme }) => theme.bodyColor};
  z-index: 10;
`;

export const ContactFormInput = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 2px solid ${({ theme }) => theme.textColorLight};
  background: none;
  color: ${({ theme }) => theme.textColor};
  outline: none;
  padding: 1.5rem;
  border-radius: 0.75rem;
  z-index: 1;
`;

export const ContactFormArea = styled.textarea`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 2px solid ${({ theme }) => theme.textColorLight};
  background: none;
  color: ${({ theme }) => theme.textColor};
  outline: none;
  padding: 1.5rem;
  border-radius: 0.75rem;
  z-index: 1;
  height: 11rem;
  resize: none;
`;
