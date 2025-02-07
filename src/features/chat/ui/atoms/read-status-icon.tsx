import React from 'react'
import { HiOutlineClock, HiOutlineExclamationCircle } from 'react-icons/hi'
import { IoCheckmarkDoneOutline, IoCheckmarkOutline } from 'react-icons/io5'

import { useUnit } from 'effector-react'

import { RawChatMessage } from '@features/chat/type'

import { userModel } from '@shared/session'
import { Tooltip } from '@shared/ui/tooltip'

type Props = {
    message: RawChatMessage
}

export const ReadStatusIcon = ({ message }: Props) => {
    const [user] = useUnit([userModel.stores.user])

    if (message.status === 'inProgress') {
        return <HiOutlineClock className="icon" />
    }

    if (message.status === 'error') {
        return <HiOutlineExclamationCircle className="icon red" />
    }

    if (
        (message.author_id === user?.id.toString() && message.readed_opponent) ||
        message.author_id !== user?.id.toString()
    ) {
        return (
            <Tooltip text="Прочитано" direction="left">
                <IoCheckmarkDoneOutline className="icon" />
            </Tooltip>
        )
    }

    return (
        <Tooltip text="Отправлено" direction="left">
            <IoCheckmarkOutline className="icon" />
        </Tooltip>
    )
}
