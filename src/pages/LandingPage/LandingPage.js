import React from 'react'
import { LandingWrapper, Avatar, Title, Line, AboutMe } from '../../styleComponents/index'
import avatar from '../../assets/avatar.png'
import { Icons, SocialMedia } from '../../components/index'

export const LandingPage = () => {
  return (
    <LandingWrapper>
      <Avatar src={avatar} alt="Avatar" />
      <Title>Hi, my name is Dominik!</Title>
      <Icons />
      <Line />
      <AboutMe>
        I'm a last year student at University of Economics in Cracow. <br />
        I do frontend, mainly react library and in this field I would like to develop.<br />
        My main project in portfolio is Football-app. <br /> <br />
        Each of my projects (UI and code) I created on my own.
      </AboutMe>
      <Line wide />
      <SocialMedia />
    </LandingWrapper>
  );
};