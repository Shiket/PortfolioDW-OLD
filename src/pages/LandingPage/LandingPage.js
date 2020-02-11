import React from 'react'
import { LandingWrapper, Avatar, Title, Line, AboutMe } from '../../styleComponents/index'
import avatar from '../../assets/avatar.png'
import { Icons, SocialMedia } from '../../components/index'

export const LandingPage = () => {
    return (
        <LandingWrapper>
            <Avatar src={avatar} alt="Avatar" />
            <Title>Hi, my name is Dominik!</Title>
            <Icons/>
            <Line />
            <AboutMe>
                Jestem studentem ostatniego roku na Uniwersytecie Ekonomicznym w Krakowie. <br />
                Zajmuję się frontendem, głównie biblioteką React i z decydowanie w tym kierunku chciałbym się dalej rozwijać. <br />
                Moim głównym projektem w portfolio jest aplikacja "Football-app". <br /> <br />
                Wszystkie projekty (wizualnie oraz kod) tworzyłem samodzielnie.
            </AboutMe>
            <Line wide />
            <SocialMedia/>
        </LandingWrapper>
    )
}