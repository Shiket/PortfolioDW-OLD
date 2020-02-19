import React from 'react'
import {
    RowWrapper, ProjectPicture, ColumnProjectWrapper, ProjectDescription,
    TechnologiesWrapper, TechnologyIcon, TechnologyName, TechnologyColumn, VisitButton
} from '../../styleComponents/index'
import * as ICON from '../../assets/index'

export const FirstProject = () => (
         <RowWrapper>
           <ProjectPicture src={ICON.IMAGES.project1} />
           <ColumnProjectWrapper>
             <ProjectDescription>
               App that uses external API, created using/with React,<br /> which
               allows user to check last and upcomming matches, squads and short
               description of each team from leading european football leagues.<br />
               Any signed in user can add his favourite teams to the favourite
               list.
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
       );