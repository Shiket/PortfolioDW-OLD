import React from 'react'
import {
    NavigationWrapper, NavigationContentWrapper, NavigationButton,
    Author, NavigationIcon, ButtonWrapper
} from '../../styleComponents/index'
import * as ICON from '../../assets/index'
import * as ROUTES from '../../constants/Routes/routes'
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <NavigationWrapper>
            <NavigationContentWrapper>

                <ButtonWrapper name marginBottom>
                    <NavigationButton>Dominik Wrona</NavigationButton>
                    <NavigationButton small>DW</NavigationButton>
                </ButtonWrapper>

                <ButtonWrapper as={Link} to={ROUTES.LANDING}>
                    <NavigationIcon src={ICON.IMAGES.whiteAccountIcon} alt="icon" />
                    <NavigationButton>About me</NavigationButton>
                </ButtonWrapper>

                <ButtonWrapper as={Link} to={ROUTES.PROJECTS}>
                    <NavigationIcon src={ICON.IMAGES.whiteProjectsIcon} alt="icon" />
                    <NavigationButton>Projects</NavigationButton>
                </ButtonWrapper>

                <ButtonWrapper as={Link} to={ROUTES.SKILLS}>
                    <NavigationIcon src={ICON.IMAGES.whiteSkillsIcon} alt="icon" />
                    <NavigationButton>Skills</NavigationButton>
                </ButtonWrapper>

                <ButtonWrapper as={Link} to={ROUTES.CONTACT}>
                    <NavigationIcon src={ICON.IMAGES.whiteEmailIcon} alt="icon" />
                    <NavigationButton>Contact</NavigationButton>
                </ButtonWrapper>

            </NavigationContentWrapper>
            <Author>®2020 Dominik Wrona</Author>
        </NavigationWrapper>
    )
}