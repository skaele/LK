import { chatMessagesModel } from '@entities/chat-messages'
import { chatModel } from '@entities/chats'
import scrollToBottom from '@features/chat/lib/scroll-to-bottom'
import { Wrapper } from '@ui/atoms'
import { useUnit } from 'effector-react'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { MessageList } from '.'

export const Messages = () => {
    const listRef = useRef<HTMLDivElement>(null)

    const [buttonVisible, setButtonVisible] = useState(false)

    const [chat, loading, inProgress] = useUnit([
        chatModel.stores.selectedChat,
        chatMessagesModel.queries.chatMessages.$pending,
        chatMessagesModel.stores.inProgressChatMessages,
    ])

    useEffect(() => {
        scrollToBottom(listRef)
    }, [chat?.id, loading, inProgress])

    const handleScroll = () => {
        if (!!listRef.current) {
            const isScrolledEnough =
                listRef.current.scrollHeight - listRef.current.offsetHeight - listRef.current?.scrollTop > 350
            setButtonVisible(isScrolledEnough)
        }
    }

    return (
        <MessagesWrapper ref={listRef} buttonVisible={buttonVisible} onScroll={handleScroll}>
            <Wrapper loading={loading} load={() => null} error={null} data={!loading}>
                <MessageList />
            </Wrapper>
            {/* <Button icon={<FiChevronDown />} onClick={() => scrollToBottom(listRef)} /> */}
        </MessagesWrapper>
    )
}

const MessagesWrapper = styled.div<{ buttonVisible: boolean }>`
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: auto;

    button {
        position: fixed;
        right: 0px;
        bottom: 0px;
        min-width: 35px;
        height: 35px;
        border-radius: 100%;
        padding: 0px;
        background: var(--settings);
        transition: 0.2s visibility, 0.2s opacity, 0.2s transform;
        visibility: ${({ buttonVisible }) => (buttonVisible ? 'visible' : 'hidden')};
        opacity: ${({ buttonVisible }) => (buttonVisible ? '1' : '0')};
        transform: scale(${({ buttonVisible }) => (buttonVisible ? '1' : '0.9')});

        svg {
            width: 22px;
            height: 22px;
        }
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
