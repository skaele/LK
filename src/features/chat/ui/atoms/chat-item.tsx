import React from 'react'
import { useRouteMatch } from 'react-router'

import { useUnit } from 'effector-react'
import styled from 'styled-components'

import { CHAT_ROUTE, TEMPLATE_CHAT_ROUTE } from '@app/routes/general-routes'

import Avatar from '@features/home/ui/molecules/avatar'

import { chatMessagesModel } from '@entities/chat-messages'
import { Chat } from '@entities/chats'

import Badge from '../../../../shared/ui/badge'
import Flex from '../../../../shared/ui/flex'
import Subtext from '../../../../shared/ui/subtext'
import { getTimeFromDate } from '../../lib/get-time-from-date'
import { ChatItemLastMessageStatus } from './chat-item-last-message-status'
import ChatItemWrapper from './chat-item-wrapper'
import { GroupIcon } from './group-icon'

const NotificationBadge = styled(Badge)`
    min-width: 20px;
    width: 20px;
    height: 20px;
    border-radius: 100%;
`

const getLastMessageTime = (lastMessageDatetime: string) => {
    const date = new Date(lastMessageDatetime)
    const moreThanDayDiff = new Date().getTime() - date.getTime() > 3_600_000 * 24

    if (moreThanDayDiff) {
        return date.toLocaleDateString('ru-RU')
    }

    return getTimeFromDate(date)
}

const ChatItem = (chat: Chat) => {
    const params = useRouteMatch(TEMPLATE_CHAT_ROUTE)?.params as { chatId: string | undefined }
    const isFirstFetchedChats = useUnit(chatMessagesModel.stores.isFirstFetchedChats)

    const avatarProps = {
        name: chat.opponent?.name ?? '',
        avatar: chat.opponent?.avatar ?? '',
        width: '40px',
        height: '40px',
        marginRight: '12px',
        notifications: undefined,
    }

    const lastMessage = chat.lastmessage.from === 'you' ? 'Вы: ' + chat.lastmessage.text : chat.lastmessage.text
    const isGroupMessageSendedByYou = chat.subject.split(' ')[0] === 'Группе' && chat.lastmessage.from === 'you'
    const lastMessageTime = getLastMessageTime(chat.lastmessage.datetime)
    const isFirstFetchedChat = !!isFirstFetchedChats[chat.id]

    return (
        <ChatItemWrapper to={CHAT_ROUTE + `/${chat.id}`} isChosen={params?.chatId === chat.id} isOpen>
            <div className="chat-item-content">
                {isGroupMessageSendedByYou ? <GroupIcon size={40} marginRight="7px" /> : <Avatar {...avatarProps} />}
                <>
                    <div className="name-and-message">
                        {chat.subject && <span className="subject">{chat.subject}</span>}
                        {chat.opponent?.name && (
                            <Flex jc="space-between" w="100%" gap="8px">
                                <b>{chat.opponent.name}</b>
                                <Flex gap="4px" w="fit-content">
                                    <ChatItemLastMessageStatus lastMessage={chat.lastmessage} />
                                    <Subtext fontSize="0.7rem">{lastMessageTime}</Subtext>
                                </Flex>
                            </Flex>
                        )}
                        <Flex gap="6px">
                            <div className="last-message">{lastMessage}</div>
                            <NotificationBadge visible={!chat.lastmessage.readed && !isFirstFetchedChat}>
                                1
                            </NotificationBadge>
                        </Flex>
                    </div>
                </>
            </div>
        </ChatItemWrapper>
    )
}

export default ChatItem
