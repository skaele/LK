import React from 'react'
import { useRouteMatch } from 'react-router'

import { Divider, Title } from '@ui/atoms'
import { useUnit } from 'effector-react'
import styled from 'styled-components'
import { ChatItemsTutorial } from 'widgets/tutorial/tutorials/chat-items-tutorial'
import { FlexTutorial } from 'widgets/tutorial/tutorials/flex-tutorial'
import { AddNewChatTutorial } from 'widgets/tutorial/tutorials/new-chat'

import { TEMPLATE_CHAT_ROUTE } from '@app/routes/general-routes'

import { chatSidebarModel } from '@features/chat/model'

import Search from '@shared/ui/search'

import { MEDIA_QUERIES } from '../../../../shared/constants'

export const ListOfChats = () => {
    const params = useRouteMatch(TEMPLATE_CHAT_ROUTE)?.params as { chatId: string | undefined }

    const { search } = useUnit(chatSidebarModel.stores)

    return (
        <ListOfChatsWrapper isOpen chatId={params?.chatId}>
            <ChatListTopSection>
                <Title size={3} align="left">
                    Чаты
                </Title>
                <AddNewChatTutorial tutorialModule={{ id: 'chat', step: 1 }} />
            </ChatListTopSection>
            <FlexTutorial gap="4px" p="0 14px" d="column" tutorialModule={{ id: 'chat', step: 2 }}>
                <Search value={search} setValue={chatSidebarModel.events.setSearch} placeholder={'Поиск чатов'} />
            </FlexTutorial>
            <Divider margin="10px auto" />
            <ChatItemsTutorial tutorialModule={{ id: 'chat', step: 0 }} />
        </ListOfChatsWrapper>
    )
}

const ListOfChatsWrapper = styled.div<{ isOpen: boolean; chatId?: string }>`
    min-width: ${({ isOpen }) => (isOpen ? '350px' : '115px')};
    width: ${({ isOpen }) => (isOpen ? '350px' : '115px')};
    transition:
        0.2s width,
        0.2s min-width,
        0.2s padding,
        0.2s opacity;
    height: 100%;
    color: var(--text);
    border-radius: 20px 0 0 20px;
    overflow: hidden;
    border-right: 1px solid #00000018;
    display: flex;
    flex-direction: column;
    background: var(--block-content);

    ${MEDIA_QUERIES.isTablet} {
        padding: 0;
        border-radius: 0;
        width: ${({ chatId }) => (chatId ? '0' : '100%')};
        min-width: ${({ chatId }) => (chatId ? '0' : '100%')};
        opacity: ${({ chatId }) => (chatId ? '0' : '1')};
    }
`

const ChatListTopSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 14px;

    .collapse-button {
        min-width: 30px;
        height: 30px;
        padding: 2px;
        background: transparent;

        svg {
            width: 17px;
            height: 17px;
        }
    }

    @media (max-width: 1000px) {
        .collapse-button {
            display: none;
        }
    }
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`
