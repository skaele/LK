import React, { useRef } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useHistory } from 'react-router'

import { useUnit } from 'effector-react'
import styled from 'styled-components'

import User from '@features/user'

import { chatModel, chatsModel } from '@entities/chats'

import { CHAT_ROUTE } from '@shared/routing'
import { Button } from '@shared/ui/atoms'

import Flex from '../../../../shared/ui/flex'
import Subtext from '../../../../shared/ui/subtext'
import { GroupIcon } from '../atoms/group-icon'

export const ChatHeader = () => {
    const [chat, loading, isFirstFetched] = useUnit([
        chatModel.stores.selectedChat,
        chatsModel.queries.chats.$pending,
        chatsModel.stores.isFirstFetched,
    ])

    const menuRef = useRef<HTMLDivElement>(null)
    const history = useHistory()

    const handleClick = () => {
        history.push(CHAT_ROUTE)
    }

    const isEmployee = chat?.opponent?.status === 'сотрудник'

    const isFirstLoading = loading && !isFirstFetched

    return (
        <ChatHeaderWrapper ref={menuRef}>
            <Button icon={<FiArrowLeft />} onClick={handleClick} background="transparent" />
            {(chat?.opponent?.id || isFirstLoading) && (
                <User
                    id={chat?.opponent?.id}
                    type={isEmployee ? 'staff' : 'stud'}
                    avatar={chat?.opponent?.avatar}
                    name={chat?.opponent?.name ?? ''}
                    loading={isFirstLoading}
                    group={!isEmployee ? chat?.opponent?.data : undefined}
                />
            )}

            {!isFirstLoading && !!chat?.subject.length && (
                <Flex gap="8px" w="fit-content">
                    <GroupIcon />
                    <Subtext style={{ color: 'var(--text)', whiteSpace: 'nowrap' }}>{chat?.subject}</Subtext>
                </Flex>
            )}

            {/* <Button
                icon={<FiMoreVertical />}
                onClick={(e) =>
                    contextMenuModel.events.open({
                        e,
                        height: 80,
                        content: (
                            <>
                                <Button
                                    icon={<FiSearch />}
                                    text={'Поиск'}
                                    onClick={() => {
                                        setSearchMode((prev) => !prev)
                                        contextMenuModel.events.close()
                                    }}
                                    width="100%"
                                    align="left"
                                    background="transparent"
                                />
                                <Button
                                    icon={<ImAttachment />}
                                    text={'Вложения'}
                                    onClick={() => {
                                        contextMenuModel.events.close()
                                        open(<Attachments />)
                                    }}
                                    width="100%"
                                    align="left"
                                    background="transparent"
                                />
                            </>
                        ),
                    })
                }
                background="var(--block)"
            /> */}
        </ChatHeaderWrapper>
    )
}

const ChatHeaderWrapper = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 8px 10px;
    position: relative;
    border-bottom: 1px solid #00000024;
    background: var(--block-content);
`
