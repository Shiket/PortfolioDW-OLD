import React from 'react'
import { ContactWrapper, SectionTitle, Heading, ContactDescription, ContactMail } from '../../styleComponents'

export const ContactPage = () => {
    return (
      <ContactWrapper>
        <SectionTitle>Contact</SectionTitle>
        <Heading>CONTACT WITH ME</Heading>
        <ContactDescription>
          I'M LOOKING FOR A JOB/TRAINEE AS A <br /> FRONTEND DEVELOPER <br /> IN CRACOW OR
          SURROUNDINGS
        </ContactDescription>
        <ContactMail>DWRONA9@GMAIL.COM</ContactMail>
        <ContactMail>664-775-259</ContactMail>
      </ContactWrapper>
    );
}