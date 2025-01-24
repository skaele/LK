import React from 'react'
import { FiCopy } from 'react-icons/fi'
import { IoReload } from 'react-icons/io5'

import { Button } from '@ui/button'
import sanitize from 'sanitize-html'

import { RawChatMessage } from '@features/chat/type'

import { chatMessagesModel } from '@entities/chat-messages'
import { contextMenuModel } from '@entities/context-menu'
import { popUpMessageModel } from '@entities/pop-up-message'

import Flex from '@shared/ui/flex'

interface Props {
    message: RawChatMessage
}

export const MessageContextMenu = ({ message }: Props) => {
    return (
        <Flex gap="8px" d="column">
            <Button
                text="Копировать"
                icon={<FiCopy />}
                width="100%"
                align="left"
                background="transparent"
                onClick={() => {
                    navigator.clipboard.writeText(sanitize(message.html, { allowedTags: [] }) ?? '')
                    contextMenuModel.events.close()
                    popUpMessageModel.events.evokePopUpMessage({ message: 'Сообщение скопировано', type: 'info' })
                }}
            />
            {message.status === 'error' && (
                <Button
                    text="Повторить"
                    icon={<IoReload />}
                    width="100%"
                    align="left"
                    background="transparent"
                    onClick={() => {
                        chatMessagesModel.events.resendErrorMessage(message)
                        contextMenuModel.events.close()
                    }}
                />
            )}
        </Flex>
    )
}
