import { Button, Divider, Input } from '@ui/atoms'
import React from 'react'
import { IoMdSend } from 'react-icons/io'
import styled from 'styled-components'

import { chatModel } from '@entities/chats'
import { userModel } from '@entities/user'
import { chatsMessageModel } from '@features/chat/model'
import useResize from '@shared/lib/hooks/use-resize'
import { RichTextInput } from '@shared/ui/rich-text-input'
import { SmallFilesList } from '@shared/ui/small-files-list'
import { UploadFileButton } from '@shared/ui/upload-file-button'
import { useUnit } from 'effector-react'

export const ChatInput = () => {
    const [user, message, selectedChat] = useUnit([
        userModel.stores.user,
        chatsMessageModel.stores.currentMessage,
        chatModel.stores.selectedChat,
    ])
    const { width } = useResize()

    const isStaff = user.currentUser?.user_status === 'staff'

    const handleFileUploaded = (files: File[]) => {
        chatsMessageModel.events.changed({ ...message, files: [...message.files, ...files] })
    }

    if (selectedChat?.subject) {
        return null
    }

    const inputProps = {
        value: message.text,
        setValue: (value: string) => chatsMessageModel.events.changed({ ...message, text: value }),
        placeholder: 'Введите сообщение...',
    }

    return (
        <ChatInputWrapper>
            <Divider />
            <ActionsWrapper>
                <UploadFileButton setFiles={handleFileUploaded} />
                {isStaff || width < 600 ? <Input {...inputProps} /> : <RichTextInput {...inputProps} />}
                <Button
                    icon={<IoMdSend />}
                    onClick={() => chatsMessageModel.events.sended()}
                    background="transparent"
                />
            </ActionsWrapper>

            <SmallFilesList
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

    flex: 1;

    gap: 8px;
`

const ActionsWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
`
