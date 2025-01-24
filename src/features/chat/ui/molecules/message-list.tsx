import React from 'react'

import { useUnit } from 'effector-react'
import styled from 'styled-components'

import { prepareMessages } from '@features/chat/lib/prepare-messages'
import { allChatMessagesModel } from '@features/chat/model'
import { RawChatMessage } from '@features/chat/type'
import Avatar from '@features/home/ui/molecules/avatar'

import { chatMessagesModel } from '@entities/chat-messages'
import { chatModel } from '@entities/chats'
import { userModel } from '@entities/user'

import { StaffModal } from '../../../../pages/all-staff/ui/staff-modal'
import { useModal } from '../../../../widgets'
import { StudentModal } from '../../../../widgets/user/ui'
import { MessageItem } from '../atoms'
import EmptyHere from '../atoms/empty-here'
import TopDate from '../atoms/top-date'

export const MessageList = () => {
    const { open } = useModal()
    const [allMessages, chat, pending, user] = useUnit([
        allChatMessagesModel.stores.messages,
        chatModel.stores.selectedChat,
        chatMessagesModel.queries.chatMessages.$pending,
        userModel.stores.user,
    ])

    const handleOpenUserModal = (message: RawChatMessage) => {
        if (!chat || message.author_id === user?.currentUser?.id.toString()) return

        open(
            chat?.opponent?.status === 'сотрудник' ? (
                <StaffModal {...chat.opponent} />
            ) : (
                <StudentModal {...chat?.opponent} id={chat.opponent?.id} name={chat.opponent?.name ?? ''} />
            ),
        )
    }

    if (!chat || !user || !allMessages) return null

    return (
        <MessageListWrapper>
            {allMessages?.length === 0 && !pending && <EmptyHere message="Нет сообщений" />}
            {Object.values(
                prepareMessages({
                    chat: chat!,
                    messages: allMessages,
                    currentUser: user.currentUser!,
                }),
            ).map((messageGroup) => {
                return (
                    <React.Fragment key={messageGroup.date + chat.id + messageGroup.messages[0].msg_id}>
                        <TopDate date={messageGroup.date} />
                        <div className="messages-section">
                            <div className={'message-avatar'}>
                                <Avatar
                                    name={messageGroup.messages[0].author_name.split(' ').reverse().join(' ')}
                                    avatar={messageGroup.avatar}
                                    width="32px"
                                    height="32px"
                                    marginRight="0"
                                    onClick={() => handleOpenUserModal(messageGroup.messages[0])}
                                />
                            </div>
                            <div className="messages">
                                {messageGroup.messages.map((message, i) => {
                                    return (
                                        <MessageItem
                                            name={message.author_name}
                                            message={message}
                                            key={message.msg_id}
                                            isLast={i === messageGroup.messages.length - 1}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </React.Fragment>
                )
            })}
        </MessageListWrapper>
    )
}

const MessageListWrapper = styled.div`
    padding: 20px 5px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .messages-section {
        position: relative;
        display: flex;
        align-items: flex-end;
        width: 100%;

        .messages {
            width: 100%;
        }
    }

    .message-avatar {
        width: 32px;
        height: 32px;
        position: sticky;
        bottom: 7px;
        margin-bottom: 10px;
        cursor: pointer;
    }

    @media (max-width: 1000px) {
        padding: 10px 0px;
    }
`
