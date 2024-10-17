import { Colors } from '@shared/constants'
import React from 'react'
import styled from 'styled-components'
import Subtext from '@shared/ui/subtext'
import { Button, Title } from '@shared/ui/atoms'
import { Info } from '@pages/profile/ui/top/styles'
import localizeDate from '@shared/lib/dates/localize-date'
import { useUnit } from 'effector-react'
import { personnelOrdersModel } from '@entities/personnel-orders'
import { Order, orderStatus } from '@entities/personnel-orders/model/types'

export const CardOrder = ({ order }: { order: Order }) => {
    const changeStatus = useUnit(personnelOrdersModel.events.statusChanged)
    if (!order) return null
    return (
        <CardWrapper>
            <Info>
                <Title align="left" size={3}>
                    {order.job}
                </Title>
                {order.orderStatus && order.status === 'Approved' && (
                    <Title align="left" size={4}>
                        {order.orderStatus} {order.orderTitle && `(${order.orderTitle})`}
                    </Title>
                )}
                {order.status === 'Approved' && (
                    <Subtext fontSize="1em" color="var(--greenMain)">
                        {orderStatus[order.status]}
                    </Subtext>
                )}
                {order.status === 'Rejected' && (
                    <Subtext fontSize="1em" color="var(--redMain)">
                        {orderStatus[order.status]}
                    </Subtext>
                )}
                <Title align="left" size={5}>
                    Вид компенсации: {order.type}
                </Title>
                <Subtext>День выхода: {localizeDate(order.workDay, 'numeric')}</Subtext>
            </Info>
            {(order.status === 'Unknown' || order.status === 'InProgress') && (
                <>
                    <BlockButtons>
                        <Button
                            text="Отказаться"
                            onClick={() =>
                                changeStatus({
                                    orderId: order.id,
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
                            text="Принять"
                            onClick={() =>
                                changeStatus({
                                    orderId: order.id,
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
                </>
            )}
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    border-radius: var(--brLight);
    background: var(--block-content);
    box-shadow: var(--block-shadow);
    min-height: 70px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    overflow: hidden;
`
const BlockButtons = styled.div`
    display: flex;
    gap: 8px;
    margin: 0.5rem 0;
    width: 300px;
    @media (max-width: 768px) {
        max-width: 100%;
        width: 100%;
    }
    @media (max-width: 380px) {
        margin: 1.5rem 0;
    }
`
