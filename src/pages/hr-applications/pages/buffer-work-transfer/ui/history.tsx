import Block from '@shared/ui/block'
import { Button } from '@shared/ui/button'
import Table from '@shared/ui/table'
import React, { useState, useEffect } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import styled from 'styled-components'
import getWorkTransferHistoryColumns from '../../buffer-holiday-transfer/lib/get-holiday-work-history-columns'
import { bufferWorkTransferModel } from '../model'
import { useUnit } from 'effector-react'

const History = () => {
    const [openedHistory, setOpenedHistory] = useState<boolean>(false)
    useEffect(bufferWorkTransferModel.events.loadBufferWorkTransfer, [])
    const data = useUnit(bufferWorkTransferModel.stores.data)
    const historyIsEmpty = !!data.every((d) => !d)
    return (
        <Block
            orientation={'vertical'}
            alignItems={'flex-start'}
            justifyContent={'flex-start'}
            gap={'10px'}
            width="100%"
            maxWidth="100%"
            height="fit-content"
        >
            <BlockHeader>
                История заявлений на перевод:
                <Button
                    icon={openedHistory ? <HiChevronUp /> : <HiChevronDown />}
                    onClick={() => !historyIsEmpty && setOpenedHistory((prev) => !prev)}
                    background="transparent"
                />
            </BlockHeader>
            {openedHistory && (
                // if (!object.dismissalApplications.length) return null

                <StyledTable
                    columns={getWorkTransferHistoryColumns()}
                    data={data.map((object) => {
                        return {
                            ...object,
                        }
                    })}
                    maxOnPage={5}
                />
            )}
            <Button
                onClick={() => {
                    !historyIsEmpty && setOpenedHistory((prev) => !prev)
                }}
                text={historyIsEmpty ? 'История пуста' : openedHistory ? 'Скрыть' : 'Подробнее'}
                background="transparent"
            />
        </Block>
    )
}

export default History

const BlockHeader = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`

const StyledTable = styled(Table)`
    width: 100%;
`
