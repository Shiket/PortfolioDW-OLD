import React from 'react'
import {
    RowWrapper, ProjectPicture, ColumnProjectWrapper, ProjectTitle, ProjectDescription,
    TechnologiesWrapper, TechnologyIcon, TechnologyName, TechnologyColumn, VisitButton
} from '../../styleComponents/index'
import * as ICON from '../../assets/index'

export const FirstProject = () => (
    <RowWrapper>
        <ProjectPicture src={ICON.IMAGES.project1} />
        <ColumnProjectWrapper>
            <ProjectTitle>Football app</ProjectTitle>
            <ProjectDescription>
                Aplikacja wykorzystująca zewnętrzne API, stworzona za pomocą biblioteki React
                umożliwiaja sprawdzenie rozegranych i nadchodzących
                spotkań, składów oraz zawierająca krótki opis każdego z zespołów w sześćiu czołowych ligach europy. <br />
                Każdy zalogowany użytkownik może dodawać swoje ulubione zespoły do listy i mieć do nich szybki dostęp.
            </ProjectDescription>
            <TechnologiesWrapper>
                <TechnologyColumn>
                    <TechnologyIcon src={ICON.IMAGES.whiteJsIcon} />
                    <TechnologyName>JavaScript</TechnologyName>
                </TechnologyColumn>
                <TechnologyColumn>
                    <TechnologyIcon src={ICON.IMAGES.reactIcon} />
                    <TechnologyName>React</TechnologyName>
                </TechnologyColumn>
                <TechnologyColumn>
                    <TechnologyIcon src={ICON.IMAGES.styledIcon} />
                    <TechnologyName>Styled</TechnologyName>
                </TechnologyColumn>
                <TechnologyColumn>
                    <TechnologyIcon src={ICON.IMAGES.htmlIcon} />
                    <TechnologyName>HTML</TechnologyName>
                </TechnologyColumn>
                <TechnologyColumn>
                    <TechnologyIcon src={ICON.IMAGES.firebaseIcon} />
                    <TechnologyName>Firebase</TechnologyName>
                </TechnologyColumn>
            </TechnologiesWrapper>
            <VisitButton>Visit</VisitButton>
        </ColumnProjectWrapper>
    </RowWrapper>
)