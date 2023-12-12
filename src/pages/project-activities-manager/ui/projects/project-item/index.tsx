import React, { useCallback, useState } from 'react'
import { Title } from '@ui/title'
import Flex from '@ui/flex'
import { LinkAppearance } from './ui'
import ProjectTable from './project-table'
import { ProjectItemStateProvider, useProjectItemState } from './use-project-item-state'

type Props = {
    order: number
    project: { id: number; name: string }
}

const ProjectItem = ({ order, project }: Props) => {
    const state = useProjectItemState()

    const [isTableOpen, setIsTableOpen] = useState(false)

    const toggleOpenTable = useCallback(() => {
        setIsTableOpen((prev) => !prev)
    }, [])

    return (
        <ProjectItemStateProvider state={state}>
            <Flex jc="space-between" w="100%" h="40px">
                <Title size={4} align="left" weight={400}>
                    {order}. <LinkAppearance onClick={toggleOpenTable}>{project.name}</LinkAppearance>
                </Title>
            </Flex>
            {isTableOpen && <ProjectTable projectId={project.id} />}
        </ProjectItemStateProvider>
    )
}

export default ProjectItem
