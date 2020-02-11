import React from 'react'
import { ProjectsWrapper, SectionTitle, ProjectBorder } from '../../styleComponents/index'
import { FirstProject, SecondProject } from '../../components/index'

export const ProjectsPage = () => {
    return (
        <ProjectsWrapper>
            <SectionTitle>Projects</SectionTitle>
            <ProjectBorder />
            <FirstProject/>
            <ProjectBorder/>
            <SecondProject/>
            <ProjectBorder />
        </ProjectsWrapper>
    )
}