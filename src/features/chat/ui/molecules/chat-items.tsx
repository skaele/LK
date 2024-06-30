import { chatsModel } from '@entities/chats'
import { chatSidebarModel } from '@features/chat/model'
import { Title } from '@ui/atoms'
import { useUnit } from 'effector-react'
import React from 'react'
import styled from 'styled-components'
import { ChatItem, SkeletonLoading } from '../atoms'
import { TutorialComponent } from 'widgets/tutorial/lib/with-tutorial'

export const ChatItems = ({ forwardedRef }: TutorialComponent) => {
    const [loading, chats, isFirstFetched] = useUnit([
        chatsModel.queries.chats.$pending,
        chatSidebarModel.stores.foundChats,
        chatsModel.stores.isFirstFetched,
    ])

    if (loading && !isFirstFetched)
        return (
            <ChatItemsWrapper>
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
            </ChatItemsWrapper>
        )

    return (
        <ChatItemsWrapper ref={forwardedRef}>
            {!chats?.length && <Title size={3}>Нет чатов</Title>}
            {chats?.map((chat) => (
                <ChatItem {...chat} key={chat.id} />
            ))}
        </ChatItemsWrapper>
    )
}

const ChatItemsWrapper = styled.div`
    overflow-y: auto;
    height: 100%;
`
