import { TEMPLATE_CHAT_ROUTE } from '@app/routes/general-routes'
import { chatModel, chatsModel } from '@entities/chats'
import { ChatWindow, ListOfChats } from '@features/chat'
import EmptyHere from '@features/chat/ui/atoms/empty-here'
import { useUnit } from 'effector-react'
import React, { useEffect } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import styled from 'styled-components'
import { MEDIA_QUERIES } from '../../shared/constants'

const ChatPage = () => {
    const params = useRouteMatch<{ chatId: string | undefined }>(TEMPLATE_CHAT_ROUTE)?.params

    const { data: chats } = useUnit(chatsModel.queries.chats)

    useEffect(() => {
        chatsModel.events.load()
    }, [])

    useEffect(() => {
        if (!params?.chatId) {
            chatModel.events.reset()
            return
        }

        chatModel.events.set(params.chatId)
    }, [params?.chatId, chats])

    return (
        <ChatPageWrapper>
            <ListOfChats />
            {!params?.chatId && <EmptyHere />}
            <Switch>
                <Route path={TEMPLATE_CHAT_ROUTE}>
                    <ChatWindow />
                </Route>
            </Switch>
        </ChatPageWrapper>
    )
}

export default ChatPage

const ChatPageWrapper = styled.div`
    display: flex;
    height: 90%;
    max-width: 1100px;
    margin: 40px auto;
    background: var(--block);

    box-shadow: var(--very-mild-shadow);
    border-radius: 12px;
    overflow: hidden;

    ${MEDIA_QUERIES.isSmallTesktop} {
        margin: 0;
        height: 100%;
        border-radius: 0;
        max-width: 100%;
    }
`
