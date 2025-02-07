import React from 'react'

import { useUnit } from 'effector-react'
import styled from 'styled-components'
import { TutorialComponent } from 'widgets/tutorial/lib/with-tutorial'

import { chatSidebarModel } from '@features/chat/model'

import { chatsModel } from '@entities/chats'

import { Title } from '@ui/atoms'

import { ChatItem, SkeletonLoading } from '../atoms'

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
            {chats?.map((chat) => <ChatItem {...chat} key={chat.id} />)}
        </ChatItemsWrapper>
    )
}

const ChatItemsWrapper = styled.div`
    overflow-y: auto;
    height: 100%;
`
