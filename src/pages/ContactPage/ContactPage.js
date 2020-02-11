import React from 'react'
import { ContactWrapper, SectionTitle, Heading, ContactDescription, ContactMail } from '../../styleComponents'

export const ContactPage = () => {
    return (
        <ContactWrapper>
            <SectionTitle>Contact</SectionTitle>
            <Heading>CONTACT WITH ME</Heading>
            <ContactDescription>SZUKAM PRACY JAKO JUNIOR/TRAINEE
            FRONTEND DEVELOPER <br /> NA TERENIE KRAKOWA I OKOLIC</ContactDescription>
            <ContactMail>DWRONA9@GMAIL.COM</ContactMail>
            <ContactMail>664-775-259</ContactMail>
        </ContactWrapper>
    )
}