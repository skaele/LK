import React from 'react'
import { IoMdSend } from 'react-icons/io'

import { useUnit } from 'effector-react'
import sanitize from 'sanitize-html'
import styled from 'styled-components'

import { chatsMessageModel } from '@features/chat/model'

import { chatModel } from '@entities/chats'

import { Button } from '@shared/ui/atoms'
import { MEDIA_QUERIES } from '@shared/ui/consts'
import ListOfFiles from '@shared/ui/file-input/ui/list-of-files'
import { RichTextInput } from '@shared/ui/rich-text-input'
import { UploadFileButton } from '@shared/ui/upload-file-button'

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
            <ActionsWrapper>
                <UploadFileButton setFiles={handleFileUploaded} />
                <RichTextInput
                    key={selectedChat?.id}
                    value={message.text}
                    setValue={(value: string) => chatsMessageModel.events.changed({ ...message, text: value })}
                    placeholder={'Введите сообщение...'}
                />
                <Button
                    icon={<IoMdSend />}
                    onClick={() => chatsMessageModel.events.sended()}
                    background="transparent"
                    isActive={
                        !!sanitize(message.text, {
                            allowedTags: [],
                        }).trim()
                    }
                />
            </ActionsWrapper>

            <StyledListOfFiles
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
    background: var(--block-content);
    padding: 8px 16px;
    border-top: 1px solid #00000018;

    gap: 8px;
    max-width: 100%;
`

const ActionsWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 8px;
`

const StyledListOfFiles = styled(ListOfFiles)`
    padding: 0 48px 0 46px;

    ${MEDIA_QUERIES.isMobile} {
        padding: 0;
    }
`
