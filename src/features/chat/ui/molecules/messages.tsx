import { chatMessagesModel } from '@entities/chat-messages'
import scrollToBottom from '@features/chat/lib/scroll-to-bottom'
import { Loading } from '@ui/atoms'
import { useUnit } from 'effector-react'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import { MessageList } from '.'
import { chatModel } from '@entities/chats'

export const Messages = () => {
    const listRef = useRef<HTMLDivElement>(null)
    const userScrolledRef = useRef(false)

    const [messages, loading, isFirstFetched, inProgress, selectedChatId] = useUnit([
        chatMessagesModel.queries.chatMessages.$data,
        chatMessagesModel.queries.chatMessages.$pending,
        chatMessagesModel.stores.isFirstFetched,
        chatMessagesModel.stores.inProgressChatMessages,
        chatModel.stores.selectedChatId,
    ])

    const isFirstLoading = loading && !isFirstFetched

    useLayoutEffect(() => {
        if (!listRef.current) return

        const isScrolledToBottom =
            listRef.current.scrollTop + listRef.current.clientHeight >= listRef.current.scrollHeight

        if (messages && (!userScrolledRef.current || isScrolledToBottom) && !isFirstLoading) {
            scrollToBottom(listRef)
        }
    }, [messages])

    useEffect(() => {
        userScrolledRef.current = false
    }, [selectedChatId])

    useEffect(() => {
        if (listRef.current) {
            const updateScroll = () => {
                if (userScrolledRef.current) return

                userScrolledRef.current = true
            }
            listRef.current.addEventListener('scroll', updateScroll)

            return () => {
                listRef.current?.removeEventListener('scroll', updateScroll)
            }
        }
    }, [])

    useEffect(() => {
        scrollToBottom(listRef)
    }, [inProgress, messages?.length])

    // TODO: add spinner
    return (
        <MessagesWrapper data-is-loading={isFirstLoading} ref={listRef}>
            {isFirstLoading ? <Loading /> : <MessageList />}
        </MessagesWrapper>
    )
}

const MessagesWrapper = styled.div`
    width: 100%;
    position: relative;
    overflow-y: auto;
    flex: 1;

    padding: 10px;

    .loading-circle {
        max-height: 40px;
    }

    &[data-is-loading='true'] {
        display: flex;

        justify-content: center;
        align-items: center;
    }

    @media (max-width: 1000px) {
        button {
            position: fixed;
            right: 20px;
            bottom: 70px;
            border-radius: 100%;
        }
    }
`
