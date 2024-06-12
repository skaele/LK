import { CHAT_ROUTE } from '@app/routes/general-routes'
import { Colors } from '@shared/constants'
import { Button, Divider, Title } from '@shared/ui/atoms'
import ListOfFiles from '@shared/ui/file-input/ui/list-of-files'
import { RichTextInput } from '@shared/ui/rich-text-input'
import { UploadFileButton } from '@shared/ui/upload-file-button'
import UserHeader from '@shared/ui/user-header'
import { useUnit } from 'effector-react'
import React, { useState } from 'react'
import { FiMessageCircle } from 'react-icons/fi'
import { IoMdSend } from 'react-icons/io'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useModal } from 'widgets'
import { sendFirstMessageModel } from '../model'
import { SendFirstMessageProps as SendMessageProps } from '../type'

export const SendMessageModal = (props: SendMessageProps) => {
    const { close } = useModal()
    const [messageText, setMessageText] = useState('')
    const [files, setFiles] = useState<File[]>([])
    const [pending, succeeded, lastAddedMessageChat] = useUnit([
        sendFirstMessageModel.mutations.sendFirstMessage.$pending,
        sendFirstMessageModel.mutations.sendFirstMessage.$succeeded,
        sendFirstMessageModel.stores.lastAddedMessageChat,
    ])

    const handleFileUploaded = (files: File[]) => {
        setFiles((prev) => [...files, ...prev])
    }

    const handleSend = () => {
        // TODO: update SendFirstMessage type
        sendFirstMessageModel.mutations.sendFirstMessage.start({
            text: messageText,
            files,
            localId: Date.now().toString(),
            ...props,
        } as any)
    }

    const footer = !succeeded ? (
        <InputWrapper>
            <Divider />
            <ActionsWrapper>
                <UploadFileButton isActive={!pending} setFiles={handleFileUploaded} />
                <RichTextInput value={messageText} setValue={setMessageText} placeholder={'Введите сообщение...'} />
                <Button
                    isActive={(!!messageText || !!files.length) && !pending}
                    icon={<IoMdSend />}
                    onClick={handleSend}
                    background="transparent"
                />
            </ActionsWrapper>

            <ListOfFiles
                hideHeader
                files={files}
                setFiles={(files) => {
                    setFiles(files)
                }}
            />
        </InputWrapper>
    ) : (
        <Link to={CHAT_ROUTE + `/${lastAddedMessageChat?.id}`}>
            <Button
                icon={<FiMessageCircle />}
                onClick={() => {
                    sendFirstMessageModel.mutations.sendFirstMessage.reset()
                    close()
                }}
                background={Colors.green.main}
                textColor={Colors.white.main}
                text={'Перейти в чат'}
                width="100%"
            />
        </Link>
    )

    if ('group' in props) {
        return (
            <GroupWrapper>
                <Title>Группе: {props.group}</Title>
                {footer}
            </GroupWrapper>
        )
    }

    return (
        <>
            <UserHeader type={props.status} name={props.fio} {...props} />

            {footer}
        </>
    )
}

const ActionsWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
`

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--block);
    padding-right: 14px;
    padding-bottom: 12px;

    flex: 1;

    gap: 4px;
    max-width: 100%;
`

const GroupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 30dvw;

    gap: 4px;
`
