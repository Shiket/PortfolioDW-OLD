import React from 'react'
import {
    NavigationWrapper, NavigationContentWrapper, NavigationButton,
    Author, NavigationIcon, ButtonWrapper
} from '../../styleComponents/index'
import * as ICON from '../../assets/index'

export const Navigation = () => {
    return (
        <NavigationWrapper>
            <NavigationContentWrapper>

                <ButtonWrapper name marginBottom>
                    <NavigationIcon logo src={ICON.IMAGES.whiteBackicon} alt="icon" />
                    <NavigationButton>Dominik Wrona</NavigationButton>
                </ButtonWrapper>

                <ButtonWrapper>
                    <NavigationIcon src={ICON.IMAGES.whiteAccountIcon} alt="icon" />
                    <NavigationButton>About me</NavigationButton>
                </ButtonWrapper>

                <ButtonWrapper>
                    <NavigationIcon src={ICON.IMAGES.whiteProjectsIcon} alt="icon" />
                    <NavigationButton>Projects</NavigationButton>
                </ButtonWrapper>

                <ButtonWrapper>
                    <NavigationIcon src={ICON.IMAGES.whiteSkillsIcon} alt="icon" />
                    <NavigationButton>Skills</NavigationButton>
                </ButtonWrapper>

                <ButtonWrapper>
                    <NavigationIcon src={ICON.IMAGES.whiteEmailIcon} alt="icon" />
                    <NavigationButton>Contact</NavigationButton>
                </ButtonWrapper>

            </NavigationContentWrapper>
            <Author>® 2020 Dominik Wrona</Author>
        </NavigationWrapper>
    )
}