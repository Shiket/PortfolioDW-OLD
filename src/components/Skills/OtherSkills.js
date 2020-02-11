import React from 'react'
import { SkillsRow, SkillsColumn, SkillIcon, SkillName } from '../../styleComponents/index'
import * as ICON from '../../assets/index';

export const OtherSkills = () => (
    <SkillsRow>
        <SkillsColumn>
            <SkillIcon src={ICON.IMAGES.whiteGithub} alt="icon" />
            <SkillName white>Github</SkillName>
        </SkillsColumn>
        <SkillsColumn>
            <SkillIcon src={ICON.IMAGES.xdIcon} alt="icon" />
            <SkillName white>Adobe XD</SkillName>
        </SkillsColumn>
        <SkillsColumn>
            <SkillIcon src={ICON.IMAGES.photoshopIcon} alt="icon" />
            <SkillName white>Photoshop</SkillName>
        </SkillsColumn>
    </SkillsRow>
)