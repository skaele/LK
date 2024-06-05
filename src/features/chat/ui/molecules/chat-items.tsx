import { chatsModel } from '@entities/chats'
import { chatSidebarModel } from '@features/chat/model'
import { Title } from '@ui/atoms'
import useResize from '@utils/hooks/use-resize'
import { useUnit } from 'effector-react'
import React from 'react'
import styled from 'styled-components'
import { ChatItem, SkeletonLoading } from '../atoms'

export const ChatItems = () => {
    const { height } = useResize()

    const [loading, chats] = useUnit([chatsModel.queries.chat.$pending, chatSidebarModel.stores.foundChats])

    if (loading)
        return (
            <ChatItemsWrapper height={height}>
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
            </ChatItemsWrapper>
        )

    if (!chats) return null

    return (
        <ChatItemsWrapper height={height}>
            {!chats.length && <Title size={3}>Нет чатов</Title>}
            {chats.map((chat) => (
                <ChatItem {...chat} key={chat.id} />
            ))}
        </ChatItemsWrapper>
    )
}

const ChatItemsWrapper = styled.div<{ height: number }>`
    overflow-y: auto;
    max-height: ${({ height }) => height - 170 + 'px'};
`
