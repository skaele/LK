import { CHAT_ROUTE, TEMPLATE_CHAT_ROUTE } from '@app/routes/general-routes'
import { Chat } from '@entities/chats'
import Avatar from '@features/home/ui/molecules/avatar'
import React from 'react'
import { useRouteMatch } from 'react-router'
import ChatItemWrapper from './chat-item-wrapper'
import { GroupIcon } from './group-icon'

const ChatItem = (chat: Chat) => {
    const params = useRouteMatch(TEMPLATE_CHAT_ROUTE)?.params as { chatId: string | undefined }

    const avatarProps = {
        name: chat.opponent?.name ?? '',
        avatar: chat.opponent?.avatar ?? '',
        width: '40px',
        height: '40px',
        marginRight: '7px',
        notifications: !chat.lastmessage.readed ? 1 : undefined,
    }

    const lastMessage = chat.lastmessage.from === 'you' ? 'Вы: ' + chat.lastmessage.text : chat.lastmessage.text
    const isGroupMessageSendedByYou = chat.subject.split(' ')[0] === 'Группе' && chat.lastmessage.from === 'you'

    return (
        <ChatItemWrapper to={CHAT_ROUTE + `/${chat.id}`} isChosen={params?.chatId === chat.id} isOpen>
            <div className="chat-item-content">
                {isGroupMessageSendedByYou ? <GroupIcon size={40} marginRight="7px" /> : <Avatar {...avatarProps} />}
                <>
                    <div className="name-and-message">
                        {chat.subject && <span className="subject">{chat.subject}</span>}
                        {chat.opponent?.name && <b>{chat.opponent.name}</b>}
                        <div className="last-message">{lastMessage}</div>
                        {/* <div className="sent-time">{localizeDate(chat.lastmessage.datetime, 'numeric')}</div> */}
                    </div>
                </>
            </div>
        </ChatItemWrapper>
    )
}

export default ChatItem
