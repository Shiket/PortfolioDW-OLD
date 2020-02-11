import React from 'react'
import {
    SkillsWrapper, SkillsTitle, SectionTitle, UiSection,
    SkillsRow, SkillsColumn, SkillIcon, SkillName, SkillsSection
} from '../../styleComponents/index'
import * as ICON from '../../assets/index';

export const SkillsPage = () => {
    return (
        <SkillsWrapper>
            <SkillsSection>
                <SectionTitle>Skills</SectionTitle>
                <SkillsTitle top>TECHNOLOGIE<br /> Z KTÓRYCH KORZYSTAŁEM:</SkillsTitle>
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

            </SkillsSection>
            <UiSection>
                <SkillsTitle>INNE:</SkillsTitle>
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
            </UiSection>
        </SkillsWrapper>
    )
}