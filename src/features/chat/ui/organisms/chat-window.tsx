import React from 'react'
import styled from 'styled-components'
import { ChatHeader, Messages } from '../molecules'
import { ChatInput } from '../molecules/chat-input'

const ChatWindow = () => {
    return (
        <ChatWindowWrapper>
            <ChatHeader />
            <Messages />
            <ChatInput />
        </ChatWindowWrapper>
    )
}

export default ChatWindow

const ChatWindowWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 20px;

    & > img {
        position: absolute;
        width: 200px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.4;
    }
`
