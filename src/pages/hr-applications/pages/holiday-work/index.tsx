import React, { useEffect, useMemo } from 'react'
import { Button, Wrapper } from '@ui/atoms'
import PageBlock from '@shared/ui/page-block'
import { holidayWorkModel } from './model'
import { useUnit } from 'effector-react'
import { useGetJobs } from '@pages/hr-applications/hooks/useGetJobs'
import { differenceInDays } from 'date-fns'
import Block from '@shared/ui/block'
import Table from '@shared/ui/table'
import getHolidayWorkHistoryColumns from '../buffer-holiday-transfer/lib/get-holiday-work-history-columns'
import { SliderPage } from 'widgets'
import Flex from '@shared/ui/flex'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import styled from 'styled-components'
import { HOLIDAY_WORK } from '@app/routes/teacher-routes'
import { HolidayWork } from './types'

const HolidayWorkBufferPage = () => {
    const [data, bufferPageMounted] = useUnit([holidayWorkModel.stores.data, holidayWorkModel.events.bufferPageMounted])
    const loading = useUnit(holidayWorkModel.stores.dataLoading)
    const jobs = useGetJobs()

    useEffect(() => {
        bufferPageMounted()
    }, [])

    const [active, archive] = useMemo(() => {
        const currentDate = new Date()
        if (!data || data.length === 0) return [[], []]
        const partitionedData = data.reduce(
            (acc: { active: HolidayWork[]; archive: HolidayWork[] }, item) => {
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
        <Wrapper load={() => {}} error={null} data={true}>
            <PageBlock>
                <Flex jc="space-between" m="10px 0">
                    <BlockHeader>История заявлений на выход в выходной день:</BlockHeader>
                    <Link to={HOLIDAY_WORK}>
                        <Button
                            text="Создать"
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
                                        loading={loading || data === null}
                                        columns={getHolidayWorkHistoryColumns(jobs)}
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
                                        loading={loading || data === null}
                                        columns={getHolidayWorkHistoryColumns(jobs)}
                                        data={archive}
                                        maxOnPage={10}
                                    />
                                </Block>
                            ),
                        },
                    ]}
                />
            </PageBlock>
        </Wrapper>
    )
}
const BlockHeader = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`

export default HolidayWorkBufferPage
