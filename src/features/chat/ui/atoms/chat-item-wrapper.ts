import { Colors } from '@shared/constants'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ChatItemWrapper = styled(Link)<{ isChosen: boolean; isOpen: boolean }>`
    text-decoration: none;

    .chat-item-content {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 76px;
        color: ${({ isChosen }) => (isChosen ? '#fff' : 'var(--text)')};
        padding: 0 20px;
        background: ${({ isChosen }) => (isChosen ? Colors.blue.main : 'var(--block-content)')};
        overflow: hidden;
        position: relative;

        &:hover {
            filter: brightness(0.95);
        }

        .name-and-message {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            min-width: 250px;

            .subject {
                font-size: 0.67em;
                opacity: 0.85;
                background: var(--almostTransparent);
                padding: 4px;
                border-radius: 4px;
                font-weight: 600;
                width: fit-content;
            }

            & > b {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 0.85em;
                font-weight: 500;
            }

            .last-message {
                width: 100%;
                font-size: 0.8em;
                opacity: 0.7;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }

        .sent-time {
            min-height: 30px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
            font-size: 0.8em;
            opacity: 0.6;
            font-weight: 500;
        }
    }
`

export default ChatItemWrapper
