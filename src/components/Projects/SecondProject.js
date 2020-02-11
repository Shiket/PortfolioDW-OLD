import React from 'react'
import {
    RowWrapper, ProjectPicture, ColumnProjectWrapper, ProjectTitle, ProjectDescription,
    TechnologiesWrapper, TechnologyIcon, TechnologyName, TechnologyColumn, VisitButton
} from '../../styleComponents/index'
import * as ICON from '../../assets/index'

export const SecondProject = () => (
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

        <ProjectPicture src={ICON.IMAGES.project2} />
    </RowWrapper>
)