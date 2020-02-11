import React from 'react'
import {
    SkillsWrapper, SkillsTitle, SectionTitle, UiSection, SkillsSection } from '../../styleComponents/index'
import { UsedSkills, OtherSkills } from '../../components/index'

export const SkillsPage = () => {
    return (
        <SkillsWrapper>
            <SkillsSection>
                <SectionTitle>Skills</SectionTitle>
                <SkillsTitle top>TECHNOLOGIE<br /> Z KTÓRYCH KORZYSTAŁEM:</SkillsTitle>
                <UsedSkills/>
            </SkillsSection>

            <UiSection>
                <SkillsTitle>INNE:</SkillsTitle>
                <OtherSkills/>
            </UiSection>
        </SkillsWrapper>
    )
}