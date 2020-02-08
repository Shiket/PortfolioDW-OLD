import React from 'react'
import { ProjectsWrapper, SectionTitle, RowWrapper, ProjectPicture, ColumnProjectWrapper,
         ProjectTitle, ProjectDescription, TechnologiesWrapper, TechnologyIcon, TechnologyName,
         TechnologyColumn, VisitButton, ProjectBorder } from '../../styleComponents/index'
import firstProject from '../../assets/project1.png'
import secondProject from '../../assets/project2.png'
import * as ICON from '../../assets/index'
export const ProjectsPage = () => {
    return (
        <ProjectsWrapper>
            <SectionTitle>Projects</SectionTitle>
            <ProjectBorder />

            <RowWrapper>
                <ProjectPicture src={firstProject} />
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

            <ProjectBorder/>

            <RowWrapper>
                <ColumnProjectWrapper>
                    <ProjectTitle>KP Claudia</ProjectTitle>
                    <ProjectDescription>
                        Prosta strona apartamentów. <br />
                        Stworzona za pomocą HTML, CSS oraz biblioteki bootstrap.
                    </ProjectDescription>
                    <TechnologiesWrapper>
                        <TechnologyColumn>
                            <TechnologyIcon src={ICON.IMAGES.htmlIcon} />
                            <TechnologyName>HTML</TechnologyName>
                        </TechnologyColumn>

                        <TechnologyColumn>
                            <TechnologyIcon src={ICON.IMAGES.bootstrapIco} />
                            <TechnologyName>Bootstrap</TechnologyName>
                        </TechnologyColumn>
                        <TechnologyColumn>
                            <TechnologyIcon src={ICON.IMAGES.cssIco} />
                            <TechnologyName>CSS</TechnologyName>
                        </TechnologyColumn>
                        <TechnologyColumn>
                            <TechnologyIcon src={ICON.IMAGES.whiteJsIcon} />
                            <TechnologyName>JavaScript</TechnologyName>
                        </TechnologyColumn>
                    </TechnologiesWrapper>
                    <VisitButton>Visit</VisitButton>
                </ColumnProjectWrapper>

                <ProjectPicture src={secondProject} />
            </RowWrapper>
            <ProjectBorder />

        </ProjectsWrapper>
    )
}