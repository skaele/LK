import Block from '@shared/ui/block'
import { Button } from '@shared/ui/button'
import Table from '@shared/ui/table'
import React, { useState, useMemo } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import styled from 'styled-components'
import { getMedicalExaminationHistoryColumns } from '../lib/get-medical-examination-columns'
import { bufferMedicalExaminationModel } from '../model'

const History = () => {
    const [openedHistory, setOpenedHistory] = useState<boolean>(false)
    const { data } = bufferMedicalExaminationModel.selectors.useBufferMedicalExamination()

    const filteredData = useMemo(() => {
        return data
            ?.map((workerInfo) => {
                const filteredData = workerInfo.notTaken.filter((item) => {
                    if (item.orderStatus != 'false' && item.orderStatus != '') return item.orderStatus
                })
                return filteredData
            })
            .flat()
    }, [data])

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
                История заявлений на диспансеризацию:
                <Button
                    icon={openedHistory ? <HiChevronUp /> : <HiChevronDown />}
                    onClick={() => setOpenedHistory((prev) => !prev)}
                    background="transparent"
                />
            </BlockHeader>

            {openedHistory && (
                <StyledTable columns={getMedicalExaminationHistoryColumns()} data={filteredData} maxOnPage={5} />
            )}
            <Button
                onClick={() => {
                    setOpenedHistory((prev) => !prev)
                }}
                text={!data ? 'История пуста' : openedHistory ? 'Скрыть' : 'Подробнее'}
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
