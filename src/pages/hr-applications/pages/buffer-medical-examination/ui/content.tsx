import React, { useEffect, useMemo } from 'react'
import styled from 'styled-components'
import Flex from '@shared/ui/flex'
import { bufferMedicalExaminationModel } from '../model'
import Block from '@shared/ui/block'
import { Button } from '@shared/ui/atoms'
import Table from '@shared/ui/table'
import { getMedicalExaminationHistoryColumns } from '../lib/get-medical-examination-columns'
import { getExtendedMedicalExaminationHistoryColumns } from '../lib/get-extended-medical-examination-columns'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { useGetJobs } from '@pages/hr-applications/hooks/useGetJobs'
import { MEDICAL_EXAMINATION } from '@app/routes/teacher-routes'
import { differenceInDays } from 'date-fns'
import { PersonMedicalExaminations } from '../types'
import { SliderPage } from 'widgets'

const Content = () => {
    const { data, getDataLoading } = bufferMedicalExaminationModel.selectors.useBufferMedicalExamination()
    const jobs = useGetJobs()

    useEffect(() => {
        if (data === null) {
            bufferMedicalExaminationModel.effects.loadBufferMedicalExaminationFx()
        }
    }, [])

    const [active, archive] = useMemo(() => {
        const currentDate = new Date()
        if (!data || data.length === 0) return [[], []]
        const partitionedData = data.reduce(
            (acc: { active: PersonMedicalExaminations[]; archive: PersonMedicalExaminations[] }, item) => {
                if (
                    item.orderStatus === 'Не утвержден' ||
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
                <BlockHeader>История заявлений на диспансеризацию:</BlockHeader>
                <Link to={MEDICAL_EXAMINATION}>
                    <Button
                        text="Диспансеризация"
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
                                    columns={getMedicalExaminationHistoryColumns(jobs)}
                                    columnsExtended={getExtendedMedicalExaminationHistoryColumns(jobs)}
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
                                    columns={getMedicalExaminationHistoryColumns(jobs)}
                                    columnsExtended={getExtendedMedicalExaminationHistoryColumns(jobs)}
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
