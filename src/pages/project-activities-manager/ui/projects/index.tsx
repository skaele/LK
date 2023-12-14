import React from 'react'
import { Title } from '@ui/title'
import { FullWidth } from '../ui'
import { Caption } from './ui'
import { Spacing } from '@ui/atoms'
import ProjectItem from './project-item'
import { projectActivitiesManagerStore } from '@pages/project-activities-manager/model'

const Projects = () => {
    const { data } = projectActivitiesManagerStore.selectors.useData()

    if (!data) {
        return null
    }

    return (
        <FullWidth>
            <Title size={3} align="left">
                Список курируемых проектов:
            </Title>
            <Spacing size={12} />
            <Caption>Нажмите на название проекта для постановки оценок участникам проекта</Caption>
            {data.projects.map((item, index) => (
                <ProjectItem key={item.id} order={index + 1} project={item} />
            ))}
        </FullWidth>
    )
}

export default Projects
