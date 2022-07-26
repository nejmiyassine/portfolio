import React from 'react';
import { Container } from '../GlobalStyle/GlobalStyle.style';
import { homeData } from '../Home/homeData';
import {
  FooterContainer,
  FooterCopy,
  FooterLink,
  FooterList,
  FooterSection,
  FooterSocial,
  FooterSocialLink,
  FooterTitle,
} from './Footer.style';

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterContainer>
          <FooterTitle>Yassine</FooterTitle>

          <FooterList>
            <li>
              <FooterLink href='#home'>Home</FooterLink>
            </li>
            <li>
              <FooterLink href='#about'>About</FooterLink>
            </li>
            <li>
              <FooterLink href='#skills'>Projects</FooterLink>
            </li>
          </FooterList>

          <FooterSocial>
            {homeData.map((item) => (
              <FooterSocialLink key={item.id} href={item.link} target='_blank'>
                {item.icon}
              </FooterSocialLink>
            ))}
          </FooterSocial>

          <FooterCopy>
            &copy; NEJMI YASSINE. All rights reserved.{' '}
            {new Date().getFullYear()}.
          </FooterCopy>
        </FooterContainer>
      </Container>
    </FooterSection>
  );
};

export default Footer;
