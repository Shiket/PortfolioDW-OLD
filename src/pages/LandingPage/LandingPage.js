import React from 'react'
import {
    LandingWrapper, Avatar, Title, Icon, IconColumn, IconsWrapper, IconText, IconRow,
    Line, AboutMe, SocialMediaIcon, SocialMediaWrapper, ColumnWrapper
} from '../../styleComponents/index'

import avatarImg from '../../assets/avatar.png'
import * as ICONS from '../../assets/index'
export const LandingPage = () => {

    return (
        <LandingWrapper>
            <Avatar src={avatarImg} alt="Avatar" />
            <Title>Hi, my name is Dominik!</Title>
            <IconsWrapper>
                <IconColumn>
                    <IconRow>
                        <Icon src={ICONS.IMAGES.nameIcon} alt='icon' />
                        <IconText>Dominik Wrona</IconText>
                    </IconRow>
                    <IconRow>
                        <Icon src={ICONS.IMAGES.locationIcon} alt='icon' />
                        <IconText>Wieliczka, Cracow, Poland</IconText>
                    </IconRow>
                </IconColumn>
                <IconColumn>
                    <IconRow>
                        <Icon src={ICONS.IMAGES.educationIcon} alt='icon' />
                        <IconText>
                            University of Economics, Cracow (5th year) IT
                        </IconText>
                    </IconRow>
                    <IconRow>
                        <Icon src={ICONS.IMAGES.jsIcon} alt='icon' />
                        <IconText>Javascript, react</IconText>
                    </IconRow>
                </IconColumn>
                <IconColumn>
                    <IconRow>
                        <Icon src={ICONS.IMAGES.calendarIcon} alt='icon' />
                        <IconText>24 years old</IconText>
                    </IconRow>
                    <IconRow>
                        <Icon src={ICONS.IMAGES.emailIcon} alt='icon' />
                        <IconText>dwrona9@gmail.com</IconText>
                    </IconRow>
                </IconColumn>
            </IconsWrapper>

            <Line />

            <AboutMe>Jestem studentem ostatniego roku na Uniwersytecie Ekonomicznym w Krakowie. <br />
                    Zajmuję się frontendem, głównie biblioteką React i z decydowanie w tym kierunku chciałbym się dalej rozwijać. <br />
                    Moim głównym projektem w portfolio jest aplikacja "Football-app". <br />
                    Wszystkie moje projekty (wizualnie oraz kod) tworzyłem samodzielnie.
            </AboutMe>

            <Line wide />

            <SocialMediaWrapper>
                <ColumnWrapper>
                    <SocialMediaIcon src={ICONS.IMAGES.fbIcon} alt='icon' />
                    <IconText>Facebook</IconText>
                </ColumnWrapper>
                <ColumnWrapper>
                    <SocialMediaIcon src={ICONS.IMAGES.emailSocialMediaIcon} alt='icon' />
                    <IconText>dwrona9@gmail.com</IconText>
                </ColumnWrapper>
                <ColumnWrapper>
                    <SocialMediaIcon src={ICONS.IMAGES.githubIcon} alt='icon' />
                    <IconText>Github</IconText>
                </ColumnWrapper>
                <ColumnWrapper>
                    <SocialMediaIcon src={ICONS.IMAGES.linkedIcon} alt='icon' />
                    <IconText>LinkedIn</IconText>
                </ColumnWrapper>
            </SocialMediaWrapper>
        </LandingWrapper>
    )
}