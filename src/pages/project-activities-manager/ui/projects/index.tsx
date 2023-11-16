import React from 'react'
import { Title } from '@ui/title'
import { FullWidth } from '../ui'
import { Caption } from './ui'
import { Spacing } from '@ui/atoms'
import ProjectItem from '@pages/project-activities-manager/ui/projects/project-item'

const MOCK_PROJECTS: { id: number; name: string; hasDataToSave: boolean }[] = [
    { id: 1, name: 'bla bla bla 1', hasDataToSave: false },
    { id: 2, name: 'bla bla bla 2', hasDataToSave: true },
    { id: 3, name: 'bla bla bla 3', hasDataToSave: false },
    { id: 4, name: 'bla bla bla 4', hasDataToSave: false },
]

const Projects = () => {
    return (
        <FullWidth>
            <Title size={3} align="left">
                Список курируемых проектов:
            </Title>
            <Spacing size={12} />
            <Caption>Нажмите на название проекта для постановки оценок участникам проекта</Caption>
            {MOCK_PROJECTS.map((item, index) => (
                <ProjectItem key={item.id} order={index + 1} project={item} />
            ))}
        </FullWidth>
    )
}

export default Projects
