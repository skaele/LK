import React, { useEffect, useMemo } from 'react'
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
import { SliderPage } from 'widgets'
import { differenceInDays } from 'date-fns'
import { PersonVacation } from '@pages/hr-applications/types/hr-applications'

const Content = () => {
    const { data, getDataLoading } = bufferHolidayPlanningModel.selectors.useBufferHolidayPlanning()
    const jobs = useGetJobs()

    useEffect(() => {
        if (data === null) {
            bufferHolidayPlanningModel.events.loadBufferHolidayPlanning()
        }
    }, [])

    const [active, archive] = useMemo(() => {
        const currentDate = new Date()
        if (!data || data.length === 0) return [[], []]
        const partitionedData: { active: PersonVacation[]; archive: PersonVacation[] } = data.reduce(
            (acc: { active: PersonVacation[]; archive: PersonVacation[] }, item) => {
                if (
                    item.orderStatus === 'Не утвержден' ||
                    item.orderStatus === 'На регистрации' ||
                    differenceInDays(currentDate, new Date(item.signedDate)) < 8
                ) {
                    acc.active.push(item)
                } else {
                    acc.archive.push(item)
                }
                return acc
            },
            { active: [], archive: [] },
        )

        return [partitionedData.active, partitionedData.archive]
    }, [data])

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
            <SliderPage
                pages={[
                    {
                        title: 'Активные заявления',
                        content: (
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
                                    data={active}
                                    maxOnPage={10}
                                />
                            </Block>
                        ),
                    },
                    {
                        title: 'Архив',
                        content: (
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
                                    data={archive}
                                    maxOnPage={10}
                                />
                            </Block>
                        ),
                    },
                ]}
            />
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
