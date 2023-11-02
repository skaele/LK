import Block from '@shared/ui/block'
import Table from '@shared/ui/table'
import React from 'react'
import styled from 'styled-components'
import { bufferHolidayPlanningModel } from '../model'
import { getBufferHolidayPlanningColumns } from '../lib/get-buffer-holiday-planning-columns'

const History = () => {
    const { data } = bufferHolidayPlanningModel.selectors.useBufferHolidayPlanning()

    const jobVacations =
        data &&
        data
            .map((job) => {
                return [
                    ...job.notTaken.map((vac) => ({ ...vac, jobTitle: job.jobTitle })),
                    ...job.schedule.map((vac) => ({ ...vac, jobTitle: job.jobTitle })),
                    ...job.spent.map((vac) => ({ ...vac, jobTitle: job.jobTitle })),
                ]
            })
            .flat()

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
            <BlockHeader>История заявлений на отпуск:</BlockHeader>
            <Table columns={getBufferHolidayPlanningColumns()} data={jobVacations} maxOnPage={10} />
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
