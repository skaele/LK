import React from 'react'
import { bufferHolidayPlanningModel } from '../model'
import { Button, Loading, Wrapper } from '@shared/ui/atoms'
import styled from 'styled-components'
import Block from '@shared/ui/block'
import { getBufferHolidayPlanningColumns } from '../lib/get-buffer-holiday-planning-columns'
import Table from '@shared/ui/table'
import Flex from '@shared/ui/flex'
import { getExtendedBufferHolidayPlanningColumns } from '../lib/get-extended-buffer-holiday-planning-columns'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { useGetJobs } from '@pages/hr-applications/hooks/useGetJobs'

const Content = () => {
    const { data, getDataLoading } = bufferHolidayPlanningModel.selectors.useBufferHolidayPlanning()
    const load = () => bufferHolidayPlanningModel.events.loadBufferHolidayPlanning()
    const jobs = useGetJobs()

    // const jobVacations =
    //     data &&
    //     data
    //         .map((job) => {
    //             return [
    //                 ...job.notTaken.map((vac) => ({
    //                     ...vac,
    //                     jobTitle: job.jobTitle,
    //                     signedDate: vac.vacation.status.signedDate,
    //                 })),
    //             ]
    //         })
    //         .flat()
    //         // .filter((item) => {
    //         //     if (item.vacation.status.orderStatus != 'false' && item.vacation.status.orderStatus != '')
    //         //         return item.vacation.status.orderStatus
    //         // })
    //         .sort((a, b) => compareDesc(new Date(a.vacation.period.startDate), new Date(b.vacation.period.startDate)))

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
                <Flex jc="space-between" m="10px 0">
                    <BlockHeader>История заявлений на отпуск:</BlockHeader>
                    <Link to={`/hr-applications/holiday-planning`}>
                        <Button
                            text="Отпуск"
                            background="var(--reallyBlue)"
                            textColor="#fff"
                            icon={<FiPlus />}
                            minWidth={'35px'}
                            height="36px"
                            shrinkTextInMobile
                        />
                    </Link>
                </Flex>
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
                        <Table
                            columns={getBufferHolidayPlanningColumns(jobs)}
                            columnsExtended={getExtendedBufferHolidayPlanningColumns(jobs)}
                            data={data}
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
