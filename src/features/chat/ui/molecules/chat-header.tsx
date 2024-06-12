import { CHAT_ROUTE } from '@app/routes/general-routes'
import { chatModel, chatsModel } from '@entities/chats'
import { Button } from '@ui/atoms'
import { useUnit } from 'effector-react'
import React, { useRef } from 'react'
import { FiX } from 'react-icons/fi'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { User } from 'widgets'
import { GroupIcon } from '../atoms/group-icon'

export const ChatHeader = () => {
    const [chat, loading] = useUnit([chatModel.stores.selectedChat, chatsModel.queries.chats.$pending])

    const menuRef = useRef<HTMLDivElement>(null)
    const history = useHistory()

    const handleClick = () => {
        history.push(CHAT_ROUTE)
    }

    const isEmployee = chat?.opponent?.status === 'сотрудник'

    return (
        <ChatHeaderWrapper ref={menuRef}>
            <Button icon={<FiX />} onClick={handleClick} background="var(--block)" />
            {(chat?.opponent?.id || loading) && (
                <User
                    id={chat?.opponent?.id}
                    type={isEmployee ? 'staff' : 'stud'}
                    avatar={chat?.opponent?.avatar}
                    name={chat?.opponent?.name ?? ''}
                    loading={loading}
                    group={!isEmployee ? chat?.opponent?.data : undefined}
                />
            )}

            {!chat?.opponent?.id && !loading && (
                <GroupWrapper>
                    <GroupIcon />
                    {chat?.subject}
                </GroupWrapper>
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
    padding: 0 10px;
    padding-top: 15px;
    position: relative;
`

const GroupWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
