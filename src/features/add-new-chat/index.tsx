import { Button } from '@shared/ui/atoms'
import React from 'react'
import { HiOutlinePlusCircle } from 'react-icons/hi'
import { useModal } from 'widgets'
import { Modal } from './ui/modal'

export const AddNewChat = () => {
    const { open } = useModal()

    const handleClick = () => {
        open(<Modal />, 'Новое сообщение')
    }

    return <Button icon={<HiOutlinePlusCircle />} width="200px" height="36px" text={'Написать'} onClick={handleClick} />
}
