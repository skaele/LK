import React from 'react'
import { bufferHolidayPlanningModel } from '../model'
import { Loading, Wrapper } from '@shared/ui/atoms'
import styled from 'styled-components'
import Block from '@shared/ui/block'
import { getBufferHolidayPlanningColumns } from '../lib/get-buffer-holiday-planning-columns'
import Table from '@shared/ui/table'
import { getExpandedBufferHolidayPlanningColumns } from '../lib/get-expanded-buffer-holiday-planning-columns copy'
import { compareAsc } from 'date-fns'
import Flex from '@shared/ui/flex'

const Content = () => {
    const { data, getDataLoading } = bufferHolidayPlanningModel.selectors.useBufferHolidayPlanning()
    const load = () => bufferHolidayPlanningModel.events.loadBufferHolidayPlanning()

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
            .sort((a, b) =>
                compareAsc(new Date(a.vacation.status.creationDate), new Date(b.vacation.status.creationDate)),
            )

    return (
        <Wrapper load={load} error={null} data={data}>
            {/* <>
                {dataWorkerApplication &&
                    dataWorkerApplication.map((jobTitleInfo, index) => {
                        if (jobTitleInfo.isDismissal) {
                            historyIsEmpty && setHistoryIsEmpty(false)
                            return null
                        } else
                            return <JobTitle key={jobTitleInfo.jobGuid} info={jobTitleInfo} index={index} data={data} />
                    })}
            </> */}
            <>
                {getDataLoading ? (
                    <Flex w="100%" jc="center" ai="center">
                        <Loading />
                    </Flex>
                ) : (
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
                        <Table
                            columns={getBufferHolidayPlanningColumns()}
                            columnsExtended={getExpandedBufferHolidayPlanningColumns()}
                            data={jobVacations}
                            maxOnPage={10}
                        />
                    </Block>
                )}
            </>
        </Wrapper>
    )
}

const BlockHeader = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`

export default Content
