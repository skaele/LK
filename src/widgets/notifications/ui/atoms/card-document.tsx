import React from 'react'
import { useState } from 'react'
import { FiLink } from 'react-icons/fi'

import { docsNotification } from '@api/model/notification'
import { LinkButton, SubmitButton } from '@ui/atoms'
import getRightGenderWord from '@utils/get-right-gender-word'
import styled from 'styled-components'

import { lkNotificationModel } from '@entities/lk-notifications'
import { personalNotificationModel } from '@entities/notification'
import { popUpMessageModel } from '@entities/pop-up-message'
import { userModel } from '@entities/user'

import { Colors } from '@shared/constants'
import localizeDate from '@shared/lib/dates/localize-date'
import Subtext from '@shared/ui/subtext'

import { CardTitle, Info } from './styled'

const CardDocumentWrapper = styled.div`
    width: 100%;
    padding: 20px;
    border-radius: var(--brLight);
    background: var(--block-content);
    box-shadow: var(--block-shadow);
    row-gap: 20px;
    min-height: 70px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const BlockButtons = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 5px;
    width: 300px;

    @media (max-width: 768px) {
        max-width: 100%;
        width: 100%;
    }
`

interface Props {
    data: docsNotification
}

const CardDocument = ({ data }: Props) => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const [loading, setLoading] = useState(false)
    const [completed, setCompleted] = useState(false)
    const handleView = () => {
        try {
            setLoading(true)
            personalNotificationModel.effects.viewPersonalNotificationsFx(data.id)
            lkNotificationModel.events.clearById({ id: `studdoc-${data.id}`, pageId: 'doclist' })
            setLoading(false)
            setCompleted(true)
        } catch (_) {
            popUpMessageModel.events.evokePopUpMessage({ message: 'Не удалось отправить данные', type: 'failure' })
        }
    }
    return (
        <CardDocumentWrapper>
            <Info>
                <CardTitle>{data.name}</CardTitle>
                {data.date && <Subtext>Дата: {localizeDate(data.date, 'numeric')}</Subtext>}
            </Info>
            <BlockButtons>
                {data.link && (
                    <LinkButton
                        href={data.link}
                        onClick={() => null}
                        text="Подробнее"
                        width="100%"
                        icon={<FiLink />}
                        height="35px"
                        minHeight="30px"
                        background={Colors.grey.transparent2}
                    />
                )}
                <SubmitButton
                    text={data.viewed ? getRightGenderWord(user?.sex, 'Ознакомлен', 'Ознакомлена') : 'Ознакомиться'}
                    action={handleView}
                    height="35px"
                    width="100%"
                    buttonSuccessText={getRightGenderWord(user?.sex, 'Ознакомлен', 'Ознакомлена')}
                    isLoading={loading}
                    completed={completed}
                    setCompleted={setCompleted}
                    isActive={true}
                    isDone={data.viewed}
                    repeatable={false}
                    popUpFailureMessage="Вы уже ознакомились"
                />
            </BlockButtons>
        </CardDocumentWrapper>
    )
}

export default CardDocument
