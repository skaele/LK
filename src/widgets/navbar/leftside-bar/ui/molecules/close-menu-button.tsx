import React from 'react'
import { FiX } from 'react-icons/fi'

import { menuModel } from '@entities/menu'

<<<<<<<< HEAD:src/widgets/navbar/leftside-bar/ui/molecules/close-menu-button.tsx
import { Button } from '@shared/ui/atoms'
========
import { Button } from '@ui/atoms'
>>>>>>>> master:src/widgets/leftside-bar/ui/molecules/close-menu-button.tsx

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
