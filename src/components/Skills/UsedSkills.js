import React from 'react'
import { SkillsRow, SkillsColumn, SkillIcon, SkillName } from '../../styleComponents/index'
import * as ICON from '../../assets/index';

export const UsedSkills = () => (
    <SkillsRow>
        <SkillsColumn>
            <SkillIcon src={ICON.IMAGES.jsIcon} alt="icon" />
            <SkillName>JavaScript</SkillName>
        </SkillsColumn>
        <SkillsColumn>
            <SkillIcon src={ICON.IMAGES.reactIcon} alt="icon" />
            <SkillName>React</SkillName>
        </SkillsColumn>
        <SkillsColumn>
            <SkillIcon src={ICON.IMAGES.htmlIcon} alt="icon" />
            <SkillName>HTML</SkillName>
        </SkillsColumn>
        <SkillsColumn>
            <SkillIcon src={ICON.IMAGES.cssIco} alt="icon" />
            <SkillName>CSS</SkillName>
        </SkillsColumn>
        <SkillsColumn>
            <SkillIcon src={ICON.IMAGES.bootstrapIco} alt="icon" />
            <SkillName>Bootstrap</SkillName>
        </SkillsColumn>
        <SkillsColumn>
            <SkillIcon src={ICON.IMAGES.styledIcon} alt="icon" />
            <SkillName>Styled</SkillName>
        </SkillsColumn>
        <SkillsColumn>
            <SkillIcon src={ICON.IMAGES.firebaseIcon} alt="icon" />
            <SkillName>Firebase</SkillName>
        </SkillsColumn>
    </SkillsRow>
)