import React from 'react'
import { IoCheckmarkDoneOutline, IoCheckmarkOutline } from 'react-icons/io5'

import { LastMessage } from '@entities/chats'

import { Tooltip } from '@shared/ui/tooltip'

type Props = {
    lastMessage: LastMessage
}

export const ChatItemLastMessageStatus = ({ lastMessage }: Props) => {
    if (lastMessage.from === 'you') {
        if (lastMessage.readed_opponent) {
            return (
                <Tooltip direction="left" text="Прочитано">
                    <IoCheckmarkDoneOutline />
                </Tooltip>
            )
        }

        return (
            <Tooltip direction="left" text="Отправлено">
                <IoCheckmarkOutline />
            </Tooltip>
        )
    }

    return null
}
