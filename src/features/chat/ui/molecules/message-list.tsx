import { chatModel } from '@entities/chats'
import { userModel } from '@entities/user'
import { prepareMessages } from '@features/chat/lib/prepare-messages'
import { allChatMessagesModel } from '@features/chat/model'
import Avatar from '@features/home/ui/molecules/avatar'
import { useUnit } from 'effector-react'
import React from 'react'
import styled from 'styled-components'
import { MessageItem } from '../atoms'
import EmptyHere from '../atoms/empty-here'
import TopDate from '../atoms/top-date'
import { useModal } from '../../../../widgets'
import { StaffModal } from '../../../../pages/all-staff/ui/staff-modal'
import { StudentModal } from '../../../../widgets/user/ui'

export const MessageList = () => {
    const { open } = useModal()
    const [allMessages, chat, user] = useUnit([
        allChatMessagesModel.stores.messages,
        chatModel.stores.selectedChat,
        userModel.stores.user,
    ])

    const handleOpenUserModal = () => {
        if (chat !== null) {
            open(
                chat?.opponent?.status === 'сотрудник' ? (
                    <StaffModal {...chat.opponent} />
                ) : (
                    <StudentModal {...chat?.opponent} id={chat.opponent?.id} name={chat.opponent?.name ?? ''} />
                ),
            )
        }
    }

    if (!chat || !user || !allMessages) return null

    return (
        <MessageListWrapper>
            {allMessages?.length === 0 && <EmptyHere message="Нет сообщений" />}
            {Object.values(
                prepareMessages({
                    chat: chat!,
                    messages: allMessages,
                    currentUser: user.currentUser!,
                }),
            ).map((messageGroup, i) => {
                return (
                    <React.Fragment key={messageGroup.date}>
                        <TopDate date={messageGroup.date} />
                        <div className="messages-section" key={i}>
                            <div className={'message-avatar'}>
                                <Avatar
                                    name={messageGroup.messages[0].author_name.split(' ').reverse().join(' ')}
                                    avatar={messageGroup.avatar}
                                    width="32px"
                                    height="32px"
                                    marginRight="0"
                                    onClick={handleOpenUserModal}
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
