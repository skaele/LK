import { CHAT_ROUTE } from '@app/routes/general-routes'
import { chatModel, chatsModel } from '@entities/chats'
import { contextMenuModel } from '@entities/context-menu'
import { Button } from '@ui/atoms'
import { LocalSearch } from '@ui/molecules'
import { useUnit } from 'effector-react'
import React, { useRef, useState } from 'react'
import { FiMoreVertical, FiSearch, FiX } from 'react-icons/fi'
import { ImAttachment } from 'react-icons/im'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { User, useModal } from 'widgets'
import { Attachments } from '.'

export const ChatHeader = () => {
    const [chat, loading] = useUnit([chatModel.stores.selectedChat, chatsModel.queries.chat.$pending])

    const menuRef = useRef<HTMLDivElement>(null)
    const [searchMode, setSearchMode] = useState(false)
    const { open } = useModal()
    const history = useHistory()

    const handleClick = () => {
        if (searchMode) setSearchMode((prev) => !prev)
        else history.push(CHAT_ROUTE)
    }

    return (
        <ChatHeaderWrapper ref={menuRef}>
            <Button icon={<FiX />} onClick={handleClick} background="var(--block)" />
            {!searchMode ? (
                <User type="staff" avatar={chat?.opponent.avatar} name={chat?.opponent.name ?? ''} loading={loading} />
            ) : (
                <LocalSearch
                    whereToSearch={[]}
                    searchEngine={() => []}
                    setResult={() => null}
                    placeholder="Поиск сообщений"
                />
            )}
            <Button
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
            />
        </ChatHeaderWrapper>
    )
}

const ChatHeaderWrapper = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    background: var(--block);
    position: relative;
`
