import React from 'react';
import * as Bi from 'react-icons/bi';
import * as Ai from 'react-icons/ai';

import {
  Button,
  Container,
  SectionSubtitle,
  SectionTitle,
} from '../GlobalStyle/GlobalStyle.style';
import {
  ContactButton,
  ContactCard,
  ContactCardData,
  ContactCardTitle,
  ContactContainer,
  ContactContent,
  ContactForm,
  ContactFormArea,
  ContactFormDiv,
  ContactFormInput,
  ContactFormTag,
  ContactInfo,
  ContactSection,
  ContactTitle,
} from './Contact.style';

const Contact = () => {
  return (
    <ContactSection id='contact'>
      <SectionSubtitle>Get in touch</SectionSubtitle>
      <SectionTitle>Contact me</SectionTitle>

      <Container>
        <ContactContainer>
          <ContactContent>
            <ContactTitle>Talk to me</ContactTitle>

            <ContactInfo>
              <ContactCard>
                <Bi.BiMailSend />
                <ContactCardTitle>Email</ContactCardTitle>
                <ContactCardData>nejmi.yassine01@gmail.com</ContactCardData>

                <ContactButton
                  href='mailto:nejmi.yassine01@gmail.com'
                  target='_blank'
                >
                  Write to me
                  <Ai.AiOutlineArrowRight />
                </ContactButton>
              </ContactCard>
            </ContactInfo>
          </ContactContent>

          <ContactContent>
            <ContactTitle>Write to Me</ContactTitle>

            <ContactForm>
              <ContactFormDiv>
                <ContactFormTag htmlFor='name'>Names</ContactFormTag>
                <ContactFormInput
                  id='name'
                  name='name'
                  type='text'
                  placeholder='Insert your name'
                />
              </ContactFormDiv>
              <ContactFormDiv>
                <ContactFormTag htmlFor='mail'>Mail</ContactFormTag>
                <ContactFormInput
                  id='mail'
                  name='mail'
                  type='email'
                  placeholder='Insert your Email'
                />
              </ContactFormDiv>
              <ContactFormDiv>
                <ContactFormTag htmlFor='message'>
                  How can I help you?
                </ContactFormTag>
                <ContactFormArea
                  id='message'
                  name='message'
                  cols='30'
                  rows='10'
                  type='text'
                  placeholder='Write your message'
                />
              </ContactFormDiv>

              <Button>Send Message</Button>
            </ContactForm>
          </ContactContent>
        </ContactContainer>
      </Container>
    </ContactSection>
  );
};

export default Contact;
