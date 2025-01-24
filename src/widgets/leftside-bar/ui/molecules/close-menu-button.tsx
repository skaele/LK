import React from 'react'
import { FiX } from 'react-icons/fi'

import { Button } from '@ui/atoms'

import { menuModel } from '@entities/menu'

const CloseMenuButton = () => {
    const { isOpen } = menuModel.selectors.useMenu()
    return (
        <>
            <Button
                icon={<FiX />}
                onClick={() => menuModel.events.changeOpen({ isOpen: !isOpen })}
                text={'Закрыть меню'}
                width={'100%'}
            />
        </>
    )
}

export default CloseMenuButton
