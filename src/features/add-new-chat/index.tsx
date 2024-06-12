import { Button } from '@shared/ui/atoms'
import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { useModal } from 'widgets'
import { Modal } from './ui/modal'

export const AddNewChat = () => {
    const { open } = useModal()

    const handleClick = () => {
        open(<Modal />, 'Новое сообщение')
    }

    return <Button icon={<FiPlus />} text={'Написать'} onClick={handleClick} />
}
