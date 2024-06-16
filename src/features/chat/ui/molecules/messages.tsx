import { chatMessagesModel } from '@entities/chat-messages'
import scrollToBottom from '@features/chat/lib/scroll-to-bottom'
import { Wrapper } from '@ui/atoms'
import { useUnit } from 'effector-react'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { MessageList } from '.'

export const Messages = () => {
    const listRef = useRef<HTMLDivElement>(null)

    const [messages, loading, isFirstFetched, inProgress] = useUnit([
        chatMessagesModel.queries.chatMessages.$data,
        chatMessagesModel.queries.chatMessages.$pending,
        chatMessagesModel.stores.isFirstFetched,
        chatMessagesModel.stores.inProgressChatMessages,
    ])

    useEffect(() => {
        if (messages?.length) scrollToBottom(listRef)
    }, [messages?.length, inProgress])

    const isFirstLoading = loading && !isFirstFetched

    return (
        <MessagesWrapper ref={listRef}>
            <Wrapper loading={isFirstLoading} load={() => null} error={null} data={!isFirstLoading}>
                <MessageList />
            </Wrapper>
        </MessagesWrapper>
    )
}

const MessagesWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: auto;

    @media (max-width: 1000px) {
        button {
            position: fixed;
            right: 20px;
            bottom: 70px;
            border-radius: 100%;
        }
    }
`
