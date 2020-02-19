import React from 'react'
import { ProjectsWrapper, SectionTitle, ProjectBorder, ProjectTitle } from '../../styleComponents/index'
import { FirstProject, SecondProject } from '../../components/index'

export const ProjectsPage = () => {
    return (
        <ProjectsWrapper>
            <SectionTitle>Projects</SectionTitle>
            <ProjectBorder />

            <ProjectTitle>Football app</ProjectTitle>
            <FirstProject/>
            <ProjectBorder/>
            <ProjectTitle>KP Claudia</ProjectTitle>
            <SecondProject/>
            <ProjectBorder />
        </ProjectsWrapper>
    )
}