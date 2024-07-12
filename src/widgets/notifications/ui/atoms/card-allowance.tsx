import { Info } from '@pages/profile/ui/top/styles'
import { PersonalAllowance } from '@shared/api/model/notification'
import React from 'react'
import Subtext from '@shared/ui/subtext'
import localizeDate from '@shared/lib/dates/localize-date'
import styled from 'styled-components'
import { Button, Title } from '@shared/ui/atoms'
import { Colors } from '@shared/constants'
import { allowancesModel } from '@entities/allowances'
import { useUnit } from 'effector-react'

export const CardAllowance = ({ allowance }: { allowance: PersonalAllowance }) => {
    const changeStatus = useUnit(allowancesModel.events.allowanceStatusChanged)
    if (!allowance) return null
    return (
        <CardWrapper>
            <Info>
                <Title align="left" size={3}>
                    Инициатор: {allowance.initiatorName}, {allowance.position}
                </Title>
                {allowance.selfApprovalStatus === 'Согласовано' && (
                    <Subtext fontSize="1em" color="var(--greenMain)">
                        Согласовано
                    </Subtext>
                )}{' '}
                {allowance.selfApprovalStatus === 'Отклонено' && (
                    <Subtext fontSize="1em" color="#c54646">
                        Отказано
                    </Subtext>
                )}
                <Title align="left" size={4}>
                    {allowance.paymentIdentifier}
                </Title>
                <Title align="left" size={5}>
                    Источник: {allowance.sourceOfFunding}
                </Title>
                <Title align="left" size={5}>
                    Сумма: {allowance.sum} руб.
                </Title>
                <Subtext>
                    Период: {localizeDate(allowance.startDate, 'numeric')} -{' '}
                    {localizeDate(allowance.endDate, 'numeric')}{' '}
                </Subtext>
            </Info>
            {allowance.selfApprovalStatus === 'На рассмотрении' && (
                <BlockButtons>
                    <Button
                        text="Отказаться"
                        onClick={() =>
                            changeStatus({
                                allowanceId: allowance.allowanceId,
                                isConfirmed: false,
                            })
                        }
                        background={Colors.red.main}
                        textColor="white"
                        height="35px"
                        width="100%"
                        isActive={true}
                    />
                    <Button
                        text="Согласиться"
                        onClick={() =>
                            changeStatus({
                                allowanceId: allowance.allowanceId,
                                isConfirmed: true,
                            })
                        }
                        background={Colors.green.main}
                        textColor="white"
                        height="35px"
                        width="100%"
                        isActive={true}
                    />
                </BlockButtons>
            )}
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    width: 100%;
    padding: 20px;
    border-radius: var(--brLight);
    background: var(--block-content);
    box-shadow: var(--block-shadow);
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
