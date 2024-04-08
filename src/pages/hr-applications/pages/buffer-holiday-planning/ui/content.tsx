import React, { useEffect } from 'react'
import { bufferHolidayPlanningModel } from '../model'
import { Button } from '@shared/ui/atoms'
import styled from 'styled-components'
import Block from '@shared/ui/block'
import { getBufferHolidayPlanningColumns } from '../lib/get-buffer-holiday-planning-columns'
import Table from '@shared/ui/table'
import Flex from '@shared/ui/flex'
import { getExtendedBufferHolidayPlanningColumns } from '../lib/get-extended-buffer-holiday-planning-columns'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { useGetJobs } from '@pages/hr-applications/hooks/useGetJobs'
import { HOLIDAY_PLANNING } from '@app/routes/teacher-routes'

const Content = () => {
    const { data, getDataLoading } = bufferHolidayPlanningModel.selectors.useBufferHolidayPlanning()
    const jobs = useGetJobs()

    useEffect(() => {
        if (data === null) {
            bufferHolidayPlanningModel.events.loadBufferHolidayPlanning()
        }
    }, [])

    return (
        <>
            <Flex jc="space-between" m="10px 0">
                <BlockHeader>История заявлений на отпуск:</BlockHeader>
                <Link to={HOLIDAY_PLANNING}>
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
                    loading={getDataLoading || data === null}
                    columns={getBufferHolidayPlanningColumns(jobs)}
                    columnsExtended={getExtendedBufferHolidayPlanningColumns(jobs)}
                    data={data}
                    maxOnPage={10}
                />
            </Block>
        </>
    )
}

const BlockHeader = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`

export default Content
