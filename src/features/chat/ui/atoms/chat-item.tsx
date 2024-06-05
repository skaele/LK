import { CHAT_ROUTE, TEMPLATE_CHAT_ROUTE } from '@app/routes/general-routes'
import { chatSidebarModel } from '@features/chat/model'
import Avatar from '@features/home/ui/molecules/avatar'
import { useUnit } from 'effector-react'
import React from 'react'
import { useRouteMatch } from 'react-router'
import ChatItemWrapper from './chat-item-wrapper'
import { Chat } from '@entities/chats'
import localizeDate from '@shared/lib/dates/localize-date'

const ChatItem = (chat: Chat) => {
    const params = useRouteMatch(TEMPLATE_CHAT_ROUTE)?.params as { chatId: string | undefined }

    const [isOpen] = useUnit([chatSidebarModel.stores.isOpen])

    console.log(chat.opponent.avatar)

    const avatarProps = {
        name: chat.opponent.name,
        avatar: chat.opponent.avatar,
        width: isOpen ? '40px' : '45px',
        height: isOpen ? '40px' : '45px',
        marginRight: !isOpen ? '0' : '7px',
        // notifications: chat.lastmessage.readed ? 1 : 0,
    }

    return (
        <ChatItemWrapper to={CHAT_ROUTE + `/${chat.id}`} isChosen={params?.chatId === chat.id} isOpen={isOpen}>
            <div className="chat-item-content">
                <Avatar {...avatarProps} />
                {isOpen && (
                    <>
                        <div className="name-and-message">
                            <b>{chat.opponent.name}</b>
                            <div className="last-message">{chat.lastmessage.text}</div>
                        </div>
                        <div className="sent-time">{localizeDate(chat.lastmessage.dateTime, 'long')}</div>
                    </>
                )}
            </div>
        </ChatItemWrapper>
    )
}

export default ChatItem
