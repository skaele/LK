import React from 'react'
import { FiMoreVertical } from 'react-icons/fi'

import { contextMenuModel } from '@entities/context-menu'

import { Colors, IColors } from '@shared/consts'
import { Page } from '@shared/routing'
import { Button } from '@shared/ui/button'

import ContextContent from './context-content'

type Props = {
    route: Page
}

const LinkMoreButton = ({ route }: Props) => {
    const textColor = Colors[(route?.color?.length ? route.color : 'blue') as keyof IColors].main

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        e.stopPropagation()
        contextMenuModel.events.open({
            e,
            height: 105,
            content: <ContextContent {...route} />,
        })
    }

    return (
        <Button
            icon={<FiMoreVertical />}
            textColor={textColor}
            className="more-button"
            background="transparent"
            onClick={handleClick}
        />
    )
}

export default LinkMoreButton
