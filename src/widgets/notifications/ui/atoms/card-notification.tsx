import React, { useState } from 'react'
import { FiDownload } from 'react-icons/fi'

import { baseNotification, businesstripNotification } from '@api/model/notification'
import styled from 'styled-components'

import { personalNotificationModel } from '@entities/notification'
import { userModel } from '@entities/user'

import { Colors } from '@shared/constants'
import localizeDate from '@shared/lib/dates/localize-date'
import Subtext from '@shared/ui/subtext'

import { LinkButton, SubmitButton } from '@ui/atoms'

import getRightGenderWord from '@utils/get-right-gender-word'

import { CardTitle, Info } from './styled'

const CardNotificationWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-radius: var(--brLight);
    background: var(--block-content);
    box-shadow: var(--block-shadow);
    row-gap: 20px;
    min-height: 70px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const BlockButtons = styled.div`
    display: flex;
    gap: 10px;
    align-self: end;

    @media (max-width: 768px) {
        width: 100%;
        gap: 20px;
    }
`

interface Props {
    data: baseNotification | businesstripNotification
}

const CardNotification = ({ data }: Props) => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const [loading, setLoading] = useState(false)
    const [completed, setCompleted] = useState(false)
    return (
        <CardNotificationWrapper>
            <Info>
                <CardTitle>{data.event || data.post}</CardTitle>
                {data.startDate && data.endDate !== '0000-00-00' ? (
                    <Subtext>
                        Период: {localizeDate(data.startDate, 'numeric')} - {localizeDate(data.endDate, 'numeric')}
                    </Subtext>
                ) : (
                    <Subtext>Дата: {localizeDate(data.startDate, 'numeric')}</Subtext>
                )}
            </Info>
            <BlockButtons>
                {data.file && (
                    <LinkButton
                        href={data.file}
                        onClick={() => null}
                        text="Скачать"
                        width="150px"
                        icon={<FiDownload />}
                        height="35px"
                        minHeight="30px"
                        background={Colors.grey.transparent2}
                    />
                )}
                <SubmitButton
                    text={data.viewed ? getRightGenderWord(user?.sex, 'Ознакомлен', 'Ознакомлена') : 'Ознакомиться'}
                    action={() => {
                        setLoading(true)
                        personalNotificationModel.effects.viewPersonalNotificationsFx(data.id)
                        setLoading(false)
                        setCompleted(true)
                    }}
                    height="35px"
                    width="150px"
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
        </CardNotificationWrapper>
    )
}

export default CardNotification
