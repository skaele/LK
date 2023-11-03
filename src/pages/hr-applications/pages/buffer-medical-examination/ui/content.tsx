import React from 'react'
import styled from 'styled-components'
import Flex from '@shared/ui/flex'
import { bufferMedicalExaminationModel } from '../model'
import { Loading } from '@shared/ui/loading'
import Block from '@shared/ui/block'
import { Wrapper } from '@shared/ui/atoms'
import Table from '@shared/ui/table'
import { getMedicalExaminationHistoryColumns } from '../lib/get-medical-examination-columns'
import { applicationsModel } from '@entities/applications'
import { compareDesc } from 'date-fns'
import { getExtendedMedicalExaminationHistoryColumns } from '../lib/get-extended-medical-examination-columns-columns'

const Content = () => {
    const { data, loading } = bufferMedicalExaminationModel.selectors.useBufferMedicalExamination()
    const {
        data: { dataWorkerApplication },
    } = applicationsModel.selectors.useApplications()

    const jobExaminations =
        data &&
        data
            .map((job) => {
                const currentJob =
                    dataWorkerApplication && dataWorkerApplication.find((el) => el.jobGuid === job.employeeGuid)
                return [...job.notTaken.map((exam) => ({ ...exam, jobTitle: currentJob?.jobTitle }))]
            })
            .flat()
            .filter((exam) => {
                if (exam.orderStatus != 'false' && exam.orderStatus != '') return true
            })
            .sort((a, b) => compareDesc(new Date(a.creationDate), new Date(b.creationDate)))

    return (
        <Wrapper load={bufferMedicalExaminationModel.effects.loadBufferMedicalExaminationFx} error={null} data={data}>
            {loading ? (
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
                    <BlockHeader>История заявлений на диспансеризацию:</BlockHeader>
                    <Table
                        columns={getMedicalExaminationHistoryColumns()}
                        columnsExtended={getExtendedMedicalExaminationHistoryColumns()}
                        data={jobExaminations}
                        maxOnPage={10}
                    />
                </Block>
            )}
        </Wrapper>
        // <Wrapper>
        //     <>
        //         <Flex jc="space-between" ai="flex-start" gap="10px">
        //             {dataWorkerApplication.map((jobTitleInfo, index) => {
        //                 if (jobTitleInfo.isDismissal) {
        //                     historyIsEmpty && setHistoryIsEmpty(false)
        //                     return null
        //                 } else return <JobTitle info={jobTitleInfo} index={index} />
        //             })}
        //         </Flex>
        //         <History />
        //     </>
        // </Wrapper>
    )
}

const BlockHeader = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`

export default Content
