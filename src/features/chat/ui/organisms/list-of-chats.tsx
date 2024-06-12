import { TEMPLATE_CHAT_ROUTE } from '@app/routes/general-routes'
import { AddNewChat } from '@features/add-new-chat'
import { chatSidebarModel } from '@features/chat/model'
import Search from '@shared/ui/search'
import { Divider, Title } from '@ui/atoms'
import { useUnit } from 'effector-react'
import React from 'react'
import { useRouteMatch } from 'react-router'
import styled from 'styled-components'
import Flex from '../../../../shared/ui/flex'
import { ChatItems } from '../molecules'

export const ListOfChats = () => {
    const params = useRouteMatch(TEMPLATE_CHAT_ROUTE)?.params as { chatId: string | undefined }

    const { search } = useUnit(chatSidebarModel.stores)

    return (
        <ListOfChatsWrapper isOpen chatId={params?.chatId}>
            <ChatListTopSection>
                <Title size={3} align="left">
                    Чаты
                </Title>
                <AddNewChat />
            </ChatListTopSection>
            <Flex gap="10px" p="0 14px">
                <Search value={search} setValue={chatSidebarModel.events.setSearch} placeholder={'Поиск чатов'} />
            </Flex>
            <Divider margin="10px auto" />
            <ChatItems />
        </ListOfChatsWrapper>
    )
}

const ListOfChatsWrapper = styled.div<{ isOpen: boolean; chatId?: string }>`
    min-width: ${({ isOpen }) => (isOpen ? '350px' : '115px')};
    width: ${({ isOpen }) => (isOpen ? '350px' : '115px')};
    transition: 0.2s width, 0.2s min-width, 0.2s padding, 0.2s opacity;
    height: 100%;
    color: var(--text);
    border-radius: 20px 0 0 20px;
    overflow: hidden;
    border-right: 1px solid #00000018;
    display: flex;
    flex-direction: column;
    background: var(--block-content);

    @media (max-width: 1000px) {
        width: ${({ chatId }) => (chatId ? '0' : '100%')};
        min-width: ${({ chatId }) => (chatId ? '0' : '100%')};
        padding: ${({ chatId }) => (chatId ? '0' : '14px')};
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
