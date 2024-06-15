import { contextMenuModel } from '@entities/context-menu'
import { userModel } from '@entities/user'
import { RawChatMessage } from '@features/chat/type'
import { Colors } from '@shared/constants'
import Flex from '@shared/ui/flex'
import { useUnit } from 'effector-react'
import React from 'react'
import styled from 'styled-components'
import { MessageContextMenu } from '.'
import Subtext from '../../../../shared/ui/subtext'
import { getTimeFromDate } from '../../lib/get-time-from-date'
import { FileView } from './file-view'
import { ReadStatusIcon } from './read-status-icon'

interface Props {
    name: string
    message: RawChatMessage
    isLast: boolean
}

function linkifyString(s: string) {
    return s.replace(/(https?:\/\/[^\s|)|<]+)/g, '<a href="$1">$1</a>')
}

export const MessageItem = ({ name, message, isLast }: Props) => {
    const [user] = useUnit([userModel.stores.user])
    const time = getTimeFromDate(message.datetime)

    return (
        <MessageItemWrapper
            isYourMessage={message.author_id === user.currentUser?.id.toString()}
            isLast={isLast}
            onContextMenu={(e) => {
                contextMenuModel.events.open({ e, content: <MessageContextMenu message={message} />, height: 70 })
            }}
        >
            <div className="name-and-message">
                <div className="name-and-time">
                    <b>{name}</b>
                </div>
                <span className="message" dangerouslySetInnerHTML={{ __html: linkifyString(message.html) }} />

                {!!message.files.length && (
                    <Flex d="column" gap="4px">
                        {message.files.map((file) => {
                            return <FileView file={file} key={file.name} />
                        })}
                    </Flex>
                )}
                <Flex jc="flex-end" gap="4px" h="2px">
                    <Subtext fontSize="0.65rem">{time}</Subtext>
                    <ReadStatusIcon message={message} />
                </Flex>
            </div>
        </MessageItemWrapper>
    )
}

const MessageItemWrapper = styled.div<{ isYourMessage: boolean; isLast: boolean }>`
    display: flex;
    align-items: flex-end;
    padding: ${({ isLast }) => (!isLast ? '4px 0' : '4px 0 4px 0')};
    position: static;

    .message-avatar {
        width: 32px;
        height: 32px;

        position: sticky;
        bottom: 0px;
        top: 0px;
    }

    .name-and-message {
        display: flex;
        flex-direction: column;
        gap: 8px;
        background: ${({ isYourMessage }) => (isYourMessage ? 'var(--reallyBlue)' : 'var(--message-item)')};
        color: ${({ isYourMessage }) => (isYourMessage ? '#fff' : 'var(--text)')};
        padding: 12px;
        border-radius: ${({ isLast }) => (!isLast ? '10px' : '10px 10px 10px 0')};
        margin-left: 16px;
        max-width: 430px;
        width: 100%;
        position: relative;

        &::before {
            content: '';
            display: ${({ isLast }) => (!isLast ? 'none' : 'block')};
            position: absolute;
            width: 12px;
            height: 17px;
            bottom: 0px;
            left: -12px;
            background: ${({ isYourMessage }) => (isYourMessage ? Colors.blue.main : 'var(--message-item)')};
        }

        &::after {
            content: '';
            display: ${({ isLast }) => (!isLast ? 'none' : 'block')};
            position: absolute;
            width: 16px;
            height: 25px;
            bottom: 0px;
            left: -16px;
            border-radius: 0 0 30px;
            background: var(--block);
        }

        a {
            text-decoration: underline;
        }

        .name-and-time {
            b {
                color: ${({ isYourMessage }) => (isYourMessage ? '#fff' : 'var(--text)')};
                font-size: 0.8em;
                margin-bottom: 5px;
                margin-right: 10px;
                font-weight: 600;
            }

            span {
                font-size: 0.7em;
                opacity: 0.8;
            }
        }

        .message {
            font-size: 0.85em;
            word-break: break-word;
            line-height: 1.3rem;

            & p {
                line-height: 1.4rem;
            }
        }

        .red {
            color: ${Colors.red.main};
        }
    }

    @media (max-width: 1000px) {
        .name-and-message {
            max-width: 70%;
        }
    }
`
