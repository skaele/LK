import { WorkerApplication } from '@shared/api/model'
import Block from '@shared/ui/block'
import { Button } from '@shared/ui/button'
import Table from '@shared/ui/table'
import React, { useState } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BufferHoliday } from '@pages/hr-applications/types/hr-applications'
import { FiPlus } from 'react-icons/fi'
import Flex from '@shared/ui/flex'
import { getBufferHolidayPlanningColumns } from '../lib/get-buffer-holiday-planning-columns'
import { getExtendedBufferHolidayPlanningColumns } from '../lib/get-extended-buffer-holiday-planning-columns'

interface Props {
    //info: BufferHolidayPlanning['employeeVacations'][0]
    info: WorkerApplication
    index: number
    data: BufferHoliday['employeeVacations']
}

const JobTitle: React.FC<Props> = ({ info, index, data }) => {
    const { jobTitle, subDivision, rate } = info

    const [opened, setOpened] = useState<boolean>(false)

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
                <Flex gap="10px">
                    <span>{jobTitle}</span>
                    <Button
                        icon={opened ? <HiChevronUp /> : <HiChevronDown />}
                        onClick={() => {
                            setOpened((prev) => !prev)
                        }}
                        background="transparent"
                    />
                </Flex>

                <Link to={`/hr-applications/holiday-planning/${index}`}>
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
            </BlockHeader>
            <JobDescription>
                Подразделение: {subDivision}
                <br />
                Ставка: {rate}
                {/* Вид места работы: добавим */}
            </JobDescription>
            {opened && (
                <ActionBlock>
                    {data.map((workerInfo, index) => {
                        if (workerInfo.employeeGuid == info.jobGuid) {
                            const allVacations = [
                                ...data[index].schedule,
                                ...data[index].spent,
                                ...data[index].notTaken,
                            ]
                            // const filteredData = allVacations.filter((item) => {
                            //     if (
                            //         item.vacation.status.orderStatus != 'false' &&
                            //         item.vacation.status.orderStatus != ''
                            //     )
                            //         return item.vacation.status.orderStatus
                            // })
                            return (
                                <Table
                                    key={workerInfo.jobTitle}
                                    columns={getBufferHolidayPlanningColumns()}
                                    columnsExtended={getExtendedBufferHolidayPlanningColumns()}
                                    data={allVacations}
                                    maxOnPage={10}
                                />
                            )
                        }
                    })}
                </ActionBlock>
            )}
            <Button
                onClick={() => {
                    setOpened((prev) => !prev)
                }}
                text={opened ? 'Скрыть' : 'Подробнее'}
                background="transparent"
            />
        </Block>
    )
}

export default JobTitle

const JobDescription = styled.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`

const BlockHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const ActionBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`
