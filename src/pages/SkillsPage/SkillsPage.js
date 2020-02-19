import React from 'react'
import {
    SkillsWrapper, SkillsTitle, SectionTitle, UiSection, SkillsSection } from '../../styleComponents/index'
import { UsedSkills, OtherSkills } from '../../components/index'

export const SkillsPage = () => {
    return (
        <SkillsWrapper>
            <SkillsSection>
                <SectionTitle>Skills</SectionTitle>
                <SkillsTitle top>TECHNOLOGIES<br /> I USED:</SkillsTitle>
                <UsedSkills/>
            </SkillsSection>

            <UiSection>
                <SkillsTitle>OTHERS:</SkillsTitle>
                <OtherSkills/>
            </UiSection>
        </SkillsWrapper>
    )
}