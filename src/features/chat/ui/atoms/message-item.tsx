import { contextMenuModel } from '@entities/context-menu'
import { userModel } from '@entities/user'
import { RawChatMessage } from '@features/chat/type'
import { Colors } from '@shared/constants'
import Flex from '@shared/ui/flex'
import { useUnit } from 'effector-react'
import React from 'react'
import { IoCheckmarkDoneOutline, IoCheckmarkOutline } from 'react-icons/io5'
import { MdOutlineAvTimer, MdOutlineWarningAmber } from 'react-icons/md'
import styled from 'styled-components'
import { MessageContextMenu } from '.'
import Subtext from '../../../../shared/ui/subtext'
import { getTimeFromDate } from '../../lib/get-time-from-date'
import { FileView } from './file-view'

interface Props {
    name: string
    message: RawChatMessage
    isLast: boolean
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
                <span className="message" dangerouslySetInnerHTML={{ __html: message.html }} />

                <Flex d="column" gap="4px">
                    {message.files.map((file) => {
                        return <FileView file={file} key={file.name} />
                    })}
                </Flex>
                <Flex jc="flex-end" gap="4px">
                    <Subtext fontSize="0.7rem">{time}</Subtext>
                    <Icon message={message} />
                </Flex>
            </div>
        </MessageItemWrapper>
    )
}

const Icon = ({ message }: { message: RawChatMessage }) => {
    const [user] = useUnit([userModel.stores.user])

    if (message.status === 'inProgress') {
        return <MdOutlineAvTimer className="icon" />
    }

    if (message.status === 'error') {
        return <MdOutlineWarningAmber className="icon red" />
    }

    if (
        (message.author_id === user?.currentUser?.id.toString() && message.readed_opponent) ||
        message.author_id !== user?.currentUser?.id.toString()
    ) {
        return <IoCheckmarkDoneOutline className="icon" />
    }

    return <IoCheckmarkOutline className="icon" />
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
        background: ${({ isYourMessage }) => (isYourMessage ? Colors.blue.main : 'var(--message-item)')};
        color: ${({ isYourMessage }) => (isYourMessage ? '#fff' : 'var(--text)')};
        padding: 12px;
        border-radius: ${({ isLast }) => (!isLast ? '10px' : '10px 10px 10px 0')};
        margin-left: 10px;
        max-width: 430px;
        width: 100%;
        position: relative;

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
            line-height: 1.4rem;

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
