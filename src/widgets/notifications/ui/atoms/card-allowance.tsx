import { Info } from '@pages/profile/ui/top/styles'
import { AllowanceNotification } from '@shared/api/model/notification'
import React from 'react'
import { CardTitle } from './styled'
import Subtext from '@shared/ui/subtext'
import localizeDate from '@shared/lib/dates/localize-date'
import styled from 'styled-components'
import { Button } from '@shared/ui/atoms'
import { Colors } from '@shared/constants'
import { allowancesModel } from '@entities/allowances'
import { useUnit } from 'effector-react'

export const CardAllowance = ({ allowance }: { allowance: AllowanceNotification }) => {
    const changeStatus = useUnit(allowancesModel.events.allowanceStatusChanged)
    if (!allowance) return null
    return (
        <CardWrapper>
            <Info>
                <Title>{allowance.initials}</Title>
                <Title>{allowance.divisionName}</Title>
                {allowance.status === 'approved' && (
                    <Subtext fontSize="1em" color="var(--greenMain)">
                        Согласовано
                    </Subtext>
                )}{' '}
                {allowance.status === 'rejected' && (
                    <Subtext fontSize="1em" color="#c54646">
                        Отказано
                    </Subtext>
                )}
                {allowance.startDate && (
                    <Subtext>
                        Период: {localizeDate(allowance.startDate, 'numeric')} -{' '}
                        {localizeDate(allowance.endDate, 'numeric')}{' '}
                    </Subtext>
                )}
            </Info>
            {allowance.status === 'unknown' && (
                <BlockButtons>
                    <Button
                        text="Отказаться"
                        onClick={() => changeStatus({ status: 'rejected', id: allowance.id })}
                        background={Colors.red.main}
                        textColor="white"
                        height="35px"
                        width="100%"
                        isActive={true}
                    />
                    <Button
                        text="Согласиться"
                        onClick={() => changeStatus({ status: 'approved', id: allowance.id })}
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
const Title = styled(CardTitle)`
    text-align: left;
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
