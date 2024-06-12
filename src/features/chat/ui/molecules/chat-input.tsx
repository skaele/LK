import { Button, Divider } from '@ui/atoms'
import React from 'react'
import { IoMdSend } from 'react-icons/io'
import styled from 'styled-components'

import { chatModel } from '@entities/chats'
import { chatsMessageModel } from '@features/chat/model'
import { RichTextInput } from '@shared/ui/rich-text-input'
import { UploadFileButton } from '@shared/ui/upload-file-button'
import { useUnit } from 'effector-react'
import ListOfFiles from '@shared/ui/file-input/ui/list-of-files'

export const ChatInput = () => {
    const [message, selectedChat] = useUnit([chatsMessageModel.stores.currentMessage, chatModel.stores.selectedChat])

    const handleFileUploaded = (files: File[]) => {
        chatsMessageModel.events.changed({ ...message, files: [...message.files, ...files] })
    }

    if (selectedChat?.subject && selectedChat.lastmessage.from === 'opponent') {
        return null
    }

    return (
        <ChatInputWrapper>
            <Divider />
            <ActionsWrapper>
                <UploadFileButton setFiles={handleFileUploaded} />
                <RichTextInput
                    value={message.text}
                    setValue={(value: string) => chatsMessageModel.events.changed({ ...message, text: value })}
                    placeholder={'Введите сообщение...'}
                />
                <Button
                    icon={<IoMdSend />}
                    onClick={() => chatsMessageModel.events.sended()}
                    background="transparent"
                    isActive={!!message.text || !!message.files.length}
                />
            </ActionsWrapper>

            <ListOfFiles
                hideHeader
                files={message.files}
                setFiles={(files) => {
                    chatsMessageModel.events.changed({ ...message, files })
                }}
            />
        </ChatInputWrapper>
    )
}

const ChatInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--block);
    padding-right: 14px;
    padding-bottom: 12px;

    flex: 1;

    gap: 4px;
    max-width: 100%;
`

const ActionsWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
`
