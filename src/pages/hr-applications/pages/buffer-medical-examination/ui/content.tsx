import React, { useEffect } from 'react'
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

const Content = () => {
    const { data, getDataLoading } = bufferMedicalExaminationModel.selectors.useBufferMedicalExamination()
    const jobs = useGetJobs()

    useEffect(() => {
        if (data === null) {
            bufferMedicalExaminationModel.effects.loadBufferMedicalExaminationFx()
        }
    }, [])

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
