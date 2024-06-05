import { Button } from '@shared/ui/atoms'
import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { useModal } from 'widgets'
import { modalModel } from 'widgets/modal/model'

export const AddNewChat = () => {
    const { open } = useModal()

    const handleClick = () => {}

    return (
        <>
            <Button icon={<FiPlus />} text={'Написать'} />
        </>
    )
}
