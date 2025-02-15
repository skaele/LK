import React from 'react'
import { FiMessageCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { useUnit } from 'effector-react'

import { chatsModel } from '@entities/chats'

import { CHAT_ROUTE } from '@shared/routing'
import { Button } from '@shared/ui/atoms'
import { useModal } from '@shared/ui/modal'

import { SendFirstMessageProps } from './type'
import { SendMessageModal } from './ui/send-first-message-modal'

export const SendMessage = (props: SendFirstMessageProps) => {
    const { open, close } = useModal()
    const [chats] = useUnit([chatsModel.queries.chats.$data])

    const handleClick = () => {
        open(<SendMessageModal {...props} />)
    }

    const chat =
        'userId' in props
            ? chats?.find((chat) => chat.opponent?.id === props.userId && !chat.subject)
            : 'group' in props
              ? chats?.find((chat) => {
                    const [prefix, chatGroup] = chat.subject.split(' ')

                    if (prefix === 'Группе' && chatGroup === props.group && chat.lastmessage.from === 'you') return true
                })
              : null

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!props['group'] && !props['userId']) return null

    if (chat) {
        return (
            <Link to={CHAT_ROUTE + `/${chat?.id}`}>
                <Button
                    icon={<FiMessageCircle />}
                    text={'Перейти к чату'}
                    onClick={() => {
                        close()
                    }}
                    background="var(--theme-4)"
                    width="100%"
                />
            </Link>
        )
    }

    return (
        <Button
            icon={<FiMessageCircle />}
            text={'Написать'}
            onClick={handleClick}
            width="100%"
            background="var(--theme-4)"
        />
    )
}
