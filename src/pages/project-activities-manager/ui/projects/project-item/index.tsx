import React from 'react'
import { Title } from '@ui/title'
import Flex from '@ui/flex'
import { Button } from '@ui/button'
import { Colors } from '@shared/constants'
import { LinkAppearance } from './ui'

type Props = {
    order: number
    project: { id: number; name: string; hasDataToSave: boolean }
}

const ProjectItem = ({ order, project }: Props) => {
    return (
        <Flex jc="space-between" w="100%" h="40px">
            <Title size={4} align="left" weight={400}>
                {order}. <LinkAppearance>{project.name}</LinkAppearance>
            </Title>
            {project.hasDataToSave && (
                <Button
                    text="Сохранить"
                    background={Colors.green.light2}
                    textColor={Colors.grey.dark3}
                    minWidth="120px"
                />
            )}
        </Flex>
    )
}

export default ProjectItem
