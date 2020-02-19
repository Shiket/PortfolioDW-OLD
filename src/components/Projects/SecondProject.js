import React from 'react'
import {
    RowWrapper, ProjectPicture, ColumnProjectWrapper, ProjectDescription,
    TechnologiesWrapper, TechnologyIcon, TechnologyName, TechnologyColumn, VisitButton
} from '../../styleComponents/index'
import * as ICON from '../../assets/index'

export const SecondProject = () => (
    <RowWrapper>
        <ColumnProjectWrapper>
            <ProjectDescription>
                Simple apartments website. <br />
                Created using HTML, CSS and bootstrap library.
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

        <ProjectPicture src={ICON.IMAGES.project2} alt='project img'/>
    </RowWrapper>
)